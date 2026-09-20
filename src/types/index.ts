export type Stop = {
  id: string;
  name: string;
  region: string;
  kind: string;
  order_index: number;
  description: string;
  story: string;
  fun_fact: string;
  audio_url?: string | null;
  image_url?: string | null;
  latitude?: number | null;
  longitude?: number | null;
};
