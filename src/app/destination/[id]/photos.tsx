import { Pressable, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getStop } from '@/lib/db';
import { useEffect, useState } from 'react';
import type { Stop } from '@/types';

export default function Photos() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [stop, setStop] = useState<Stop | null>(null);
  useEffect(() => { if (id) getStop(id).then(setStop); }, [id]);
  return <View className="flex-1 bg-cream"><View className="flex-row items-center border-b border-slate-200 px-6 pb-4 pt-5"><Pressable onPress={() => router.back()} className="h-10 w-10 items-center justify-center rounded-full bg-mist"><Ionicons name="chevron-back" size={20} color="#111" /></Pressable><Text className="ml-4 text-2xl font-black text-ink">{stop?.name ?? 'Photos'}</Text></View><View className="flex-row border-b border-slate-200 px-6"><View className="mr-8 py-4"><Text className="font-bold text-slate-500">Description</Text></View><View className="border-b-4 border-orange py-4"><Text className="font-black text-teal">Photos</Text></View></View><ScrollView contentContainerStyle={{ padding: 24 }}><View className="h-52 items-center justify-center rounded-3xl bg-mist"><Ionicons name="images-outline" size={48} color="#0E7779" /><Text className="mt-3 font-semibold text-teal">Add destination photos from Supabase Storage</Text></View><Text className="mt-5 text-sm leading-6 text-slate-500">Photo URLs can be attached to each stop and rendered here without changing the navigation flow.</Text></ScrollView></View>;
}
