import * as SQLite from 'expo-sqlite';
import { stops } from '@/data/stops';
import type { Stop } from '@/types';

let dbPromise: Promise<SQLite.SQLiteDatabase> | null = null;

async function getDb() {
  if (!dbPromise) dbPromise = SQLite.openDatabaseAsync('train-storyteller.db');
  return dbPromise;
}

export async function initDb() {
  const db = await getDb();
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS stops (
      id TEXT PRIMARY KEY NOT NULL,
      name TEXT NOT NULL,
      region TEXT NOT NULL,
      kind TEXT NOT NULL,
      order_index INTEGER NOT NULL,
      description TEXT NOT NULL,
      story TEXT NOT NULL,
      fun_fact TEXT NOT NULL,
      audio_url TEXT,
      image_url TEXT,
      latitude REAL,
      longitude REAL
    );
    CREATE TABLE IF NOT EXISTS saved_stops (
      stop_id TEXT PRIMARY KEY NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const count = await db.getFirstAsync<{ count: number }>('SELECT COUNT(*) as count FROM stops');
  if (!count?.count) {
    for (const stop of stops) {
      await db.runAsync(
        `INSERT INTO stops (id,name,region,kind,order_index,description,story,fun_fact,audio_url,image_url,latitude,longitude)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
        stop.id, stop.name, stop.region, stop.kind, stop.order_index, stop.description, stop.story,
        stop.fun_fact, stop.audio_url ?? null, stop.image_url ?? null, stop.latitude ?? null, stop.longitude ?? null
      );
    }
  }
}

export async function getStops(): Promise<Stop[]> {
  const db = await getDb();
  return db.getAllAsync<Stop>('SELECT * FROM stops ORDER BY order_index ASC');
}

export async function getStop(id: string): Promise<Stop | null> {
  const db = await getDb();
  return db.getFirstAsync<Stop>('SELECT * FROM stops WHERE id = ?', id);
}

export async function toggleSaved(stopId: string) {
  const db = await getDb();
  const row = await db.getFirstAsync<{ stop_id: string }>('SELECT stop_id FROM saved_stops WHERE stop_id = ?', stopId);
  if (row) await db.runAsync('DELETE FROM saved_stops WHERE stop_id = ?', stopId);
  else await db.runAsync('INSERT INTO saved_stops (stop_id) VALUES (?)', stopId);
}

export async function upsertStops(rows: Stop[]) {
  const db = await getDb();
  for (const stop of rows) {
    await db.runAsync(
      `INSERT INTO stops (id,name,region,kind,order_index,description,story,fun_fact,audio_url,image_url,latitude,longitude)
       VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
       ON CONFLICT(id) DO UPDATE SET name=excluded.name, region=excluded.region, kind=excluded.kind, order_index=excluded.order_index, description=excluded.description, story=excluded.story, fun_fact=excluded.fun_fact, audio_url=excluded.audio_url, image_url=excluded.image_url, latitude=excluded.latitude, longitude=excluded.longitude`,
      stop.id, stop.name, stop.region, stop.kind, stop.order_index, stop.description, stop.story, stop.fun_fact, stop.audio_url ?? null, stop.image_url ?? null, stop.latitude ?? null, stop.longitude ?? null
    );
  }
}

export async function getSavedIds(): Promise<string[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<{ stop_id: string }>('SELECT stop_id FROM saved_stops ORDER BY created_at DESC');
  return rows.map((r) => r.stop_id);
}
