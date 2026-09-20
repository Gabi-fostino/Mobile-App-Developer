import { supabase } from '@/lib/supabase';
import { getStops } from '@/lib/db';
import type { Stop } from '@/types';

export async function syncStops(): Promise<Stop[]> {
  const local = await getStops();
  if (!supabase) return local;
  const { data, error } = await supabase.from('stops').select('*').order('order_index');
  if (error) throw error;
  return data?.length ? (data as Stop[]) : local;
}
