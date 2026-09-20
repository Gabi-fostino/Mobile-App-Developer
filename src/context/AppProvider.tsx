import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { getSavedIds, getStops, initDb, toggleSaved as toggleSavedDb, upsertStops } from '@/lib/db';
import { syncStops } from '@/lib/sync';
import type { Stop } from '@/types';

const AppContext = createContext<{
  stops: Stop[];
  savedIds: string[];
  loading: boolean;
  offline: boolean;
  refresh: () => Promise<void>;
  toggleSaved: (id: string) => Promise<void>;
} | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [stops, setStops] = useState<Stop[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [offline, setOffline] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      await initDb();
      const local = await getStops();
      setStops(local);
      setSavedIds(await getSavedIds());
      try {
        const cloud = await syncStops();
        if (cloud.length) { await upsertStops(cloud); setStops(cloud); }
        setOffline(false);
      } catch {
        setOffline(true);
      }
    } catch {
      setOffline(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, []);

  const toggleSaved = async (id: string) => {
    await toggleSavedDb(id);
    setSavedIds(await getSavedIds());
  };

  const value = useMemo(() => ({ stops, savedIds, loading, offline, refresh, toggleSaved }), [stops, savedIds, loading, offline]);
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
