import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MountainHero } from '@/components/MountainHero';
import { AudioPlayer } from '@/components/AudioPlayer';
import { useApp } from '@/context/AppProvider';
import { getStop } from '@/lib/db';
import { generateStory } from '@/lib/ai';
import type { Stop } from '@/types';

export default function Destination() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { savedIds, toggleSaved } = useApp();
  const [stop, setStop] = useState<Stop | null>(null);
  const [aiStory, setAiStory] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => { if (id) getStop(id).then(setStop); }, [id]);
  if (!stop) return <View className="flex-1 items-center justify-center"><ActivityIndicator color="#0E7779" /></View>;

  const saved = savedIds.includes(stop.id);
  const askAI = async () => {
    setAiLoading(true);
    try { setAiStory((await generateStory(stop)).story); } catch { setAiStory('AI storytelling is unavailable offline. The locally stored story is ready below.'); }
    finally { setAiLoading(false); }
  };

  return (
    <ScrollView className="flex-1 bg-cream" contentContainerStyle={{ paddingBottom: 40 }}>
      <View className="pt-2"><MountainHero title={stop.name} region={stop.region} saved={saved} onToggle={() => toggleSaved(stop.id)} /></View>
      <View className="mt-3 flex-row border-b border-slate-200 px-6">
        <View className="mr-8 border-b-4 border-orange py-4"><Text className="font-black text-teal">Overview</Text></View>
        <Pressable onPress={() => router.push(`/destination/${stop.id}/photos`)} className="py-4"><Text className="font-bold text-slate-500">Photos</Text></Pressable>
        <View className="ml-8 py-4"><Text className="font-bold text-slate-500">Info</Text></View>
      </View>
      <View className="px-6 pt-6">
        <Text className="text-lg leading-7 text-slate-700">{stop.description}</Text>
        <View className="mt-6 flex-row justify-between">
          {['Beaches', 'Mountains', 'Food', 'Culture'].map((x, i) => <View key={x} className="items-center"><View className="h-14 w-14 items-center justify-center rounded-full bg-mist"><Ionicons name={['water-outline','triangle-outline','restaurant-outline','color-palette-outline'][i] as any} size={22} color="#0E7779" /></View><Text className="mt-2 text-xs font-bold text-slate-600">{x}</Text></View>)}
        </View>
        <View className="mt-7 rounded-3xl bg-white p-5 shadow-sm">
          <Text className="text-xs font-black uppercase tracking-widest text-orange">Story</Text>
          <Text className="mt-2 text-base leading-6 text-slate-700">{aiStory ?? stop.story}</Text>
          <Text className="mt-4 text-sm font-semibold leading-5 text-teal">Fun fact: {stop.fun_fact}</Text>
        </View>
        <View className="mt-4"><AudioPlayer uri={stop.audio_url} /></View>
        <Pressable onPress={askAI} disabled={aiLoading} className="mt-4 flex-row items-center justify-center rounded-2xl bg-orange p-4">
          <Ionicons name="sparkles" size={19} color="#111" /><Text className="ml-2 font-black text-ink">{aiLoading ? 'Creating story…' : 'Create an AI story'}</Text>
        </Pressable>
        <Pressable onPress={() => toggleSaved(stop.id)} className="mt-3 flex-row items-center justify-center rounded-2xl bg-teal p-4"><Ionicons name={saved ? 'heart' : 'heart-outline'} size={20} color="#fff" /><Text className="ml-2 font-black text-white">{saved ? 'Added to your saved list' : 'Save destination'}</Text></Pressable>
      </View>
    </ScrollView>
  );
}
