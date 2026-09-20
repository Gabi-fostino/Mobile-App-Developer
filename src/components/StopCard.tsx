import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import type { Stop } from '@/types';

export function StopCard({ stop, onPress, saved }: { stop: Stop; onPress: () => void; saved: boolean }) {
  return (
    <Pressable onPress={onPress} className="mb-3 rounded-3xl bg-white p-4 shadow-sm">
      <View className="flex-row items-center">
        <View className="h-12 w-12 items-center justify-center rounded-2xl bg-mist">
          <Ionicons name="train-outline" size={24} color="#0E7779" />
        </View>
        <View className="ml-3 flex-1">
          <Text className="text-xs font-bold uppercase tracking-wider text-orange">{stop.kind}</Text>
          <Text className="mt-1 text-xl font-black text-ink">{stop.name}</Text>
          <Text className="mt-1 text-sm text-slate-500">{stop.region}</Text>
        </View>
        <Ionicons name={saved ? 'heart' : 'chevron-forward'} size={22} color={saved ? '#0E7779' : '#263238'} />
      </View>
    </Pressable>
  );
}
