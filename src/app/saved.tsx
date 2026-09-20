import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandHeader } from '@/components/BrandHeader';
import { StopCard } from '@/components/StopCard';
import { BottomNav } from '@/components/BottomNav';
import { useApp } from '@/context/AppProvider';

export default function Saved() {
  const router = useRouter(); const { stops, savedIds } = useApp();
  const saved = stops.filter((s) => savedIds.includes(s.id));
  return <View className="flex-1"><ScrollView><BrandHeader title="Saved places" /><View className="px-5 pb-6">{saved.length ? saved.map((s) => <StopCard key={s.id} stop={s} saved onPress={() => router.push(`/destination/${s.id}`)} />) : <View className="rounded-3xl bg-mist p-6"><Text className="text-xl font-black text-ink">Nothing saved yet</Text><Text className="mt-2 leading-6 text-slate-600">Tap the heart on a destination to keep it available for quick offline access.</Text></View>}</View></ScrollView><BottomNav /></View>;
}
