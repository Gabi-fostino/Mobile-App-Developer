import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BrandHeader } from '@/components/BrandHeader';
import { StopCard } from '@/components/StopCard';
import { BottomNav } from '@/components/BottomNav';
import { useApp } from '@/context/AppProvider';

export default function RouteScreen() {
  const router = useRouter();
  const { stops, savedIds } = useApp();
  return <View className="flex-1"><ScrollView><BrandHeader title="Journey route" /><View className="mx-5 mb-5 rounded-3xl bg-mist p-5"><Text className="text-sm font-bold text-teal">LEG 1</Text><Text className="mt-1 text-xl font-black text-ink">Gautrain</Text><Text className="mt-1 text-slate-600">Pretoria Station → Johannesburg Park Station · ~35–42 min</Text><View className="my-4 h-px bg-teal/20" /><Text className="text-sm font-bold text-teal">LEG 2</Text><Text className="mt-1 text-xl font-black text-ink">Shosholoza Meyl</Text><Text className="mt-1 text-slate-600">Johannesburg → Cape Town · ~41 hr 20 min</Text></View><View className="px-5 pb-6">{stops.map((stop, i) => <View key={stop.id} className="flex-row"><View className="mr-3 items-center"><View className="mt-5 h-4 w-4 rounded-full bg-orange" />{i < stops.length - 1 && <View className="w-0.5 flex-1 bg-orange/30" />}</View><View className="flex-1"><StopCard stop={stop} saved={savedIds.includes(stop.id)} onPress={() => router.push(`/destination/${stop.id}`)} /></View></View>)}</View></ScrollView><BottomNav /></View>;
}
