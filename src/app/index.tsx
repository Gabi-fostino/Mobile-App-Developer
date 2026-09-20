import { ActivityIndicator, Pressable, ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { BrandHeader } from '@/components/BrandHeader';
import { StopCard } from '@/components/StopCard';
import { BottomNav } from '@/components/BottomNav';
import { useApp } from '@/context/AppProvider';

export default function Home() {
  const router = useRouter();
  const { stops, savedIds, loading, offline } = useApp();
  if (loading) return <View className="flex-1 items-center justify-center"><ActivityIndicator color="#0E7779" /></View>;

  return (
    <View className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 28 }}>
        <BrandHeader />
        <View className="mx-5 mb-5 rounded-3xl bg-teal p-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="text-xs font-bold uppercase tracking-widest text-orange">Your route</Text>
              <Text className="mt-1 text-2xl font-black text-white">Pretoria → Cape Town</Text>
              <Text className="mt-2 leading-5 text-white/80">A story-led rail journey with facts, history and audio at every stop.</Text>
            </View>
            <Ionicons name="train" size={42} color="#F49A2F" />
          </View>
          {offline && <View className="mt-4 rounded-xl bg-white/10 p-3"><Text className="text-xs font-semibold text-white">Offline mode: using saved journey data.</Text></View>}
        </View>
        <View className="px-5">
          <View className="mb-3 flex-row items-end justify-between">
            <View><Text className="text-2xl font-black text-ink">Stops along the way</Text><Text className="mt-1 text-sm text-slate-500">{stops.length} researched waypoints</Text></View>
            <Pressable onPress={() => router.push('/route')}><Text className="font-bold text-teal">View route</Text></Pressable>
          </View>
          {stops.map((stop) => <StopCard key={stop.id} stop={stop} saved={savedIds.includes(stop.id)} onPress={() => router.push(`/destination/${stop.id}`)} />)}
        </View>
      </ScrollView>
      <BottomNav />
    </View>
  );
}
