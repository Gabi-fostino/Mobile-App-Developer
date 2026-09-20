import { Pressable, ScrollView, Text, View } from 'react-native';
import { BrandHeader } from '@/components/BrandHeader';
import { BottomNav } from '@/components/BottomNav';
import { useApp } from '@/context/AppProvider';

export default function Settings() {
  const { offline, refresh } = useApp();
  return <View className="flex-1"><ScrollView><BrandHeader title="Settings" /><View className="px-5"><View className="rounded-3xl bg-white p-5 shadow-sm"><Text className="text-xs font-black uppercase tracking-widest text-orange">Data</Text><Text className="mt-2 text-xl font-black text-ink">Offline-first journey</Text><Text className="mt-2 leading-6 text-slate-600">Your route content is stored in SQLite so the core storytelling experience can continue without a connection.</Text><View className="mt-4 rounded-2xl bg-mist p-4"><Text className="font-bold text-teal">Status: {offline ? 'Offline' : 'Local data ready'}</Text></View><Pressable onPress={refresh} className="mt-4 rounded-2xl bg-teal p-4"><Text className="text-center font-black text-white">Refresh local data</Text></Pressable></View><View className="mt-4 rounded-3xl bg-white p-5 shadow-sm"><Text className="text-xs font-black uppercase tracking-widest text-orange">Integrations</Text><Text className="mt-2 text-base text-slate-700">Supabase stores cloud stops and audio. The AI story generator runs server-side so API secrets are not shipped inside the mobile app.</Text></View></View></ScrollView><BottomNav /></View>;
}
