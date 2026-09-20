import { Text, View } from 'react-native';

export function BrandHeader({ title = 'Train Storyteller' }: { title?: string }) {
  return (
    <View className="px-6 pt-5 pb-3">
      <Text className="text-xs font-bold uppercase tracking-[3px] text-teal">GKHack26</Text>
      <Text className="mt-1 text-3xl font-black text-ink">{title}</Text>
    </View>
  );
}
