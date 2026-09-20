import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function MountainHero({ title, region, saved, onToggle }: { title: string; region: string; saved: boolean; onToggle: () => void }) {
  return (
    <View className="mx-4 overflow-hidden rounded-[34px] bg-teal">
      <View className="h-64 bg-tealDark px-6 pt-6">
        <View className="absolute right-6 top-6 h-16 w-16 rounded-full bg-orange" />
        <View className="absolute bottom-0 left-0 right-0 h-24 bg-teal" />
        <View className="absolute bottom-0 left-0 h-20 w-36 bg-tealDark" style={{ transform: [{ skewX: '-25deg' }] }} />
        <View className="absolute bottom-0 left-28 h-28 w-40 bg-tealDark" style={{ transform: [{ skewX: '30deg' }] }} />
        <View className="absolute bottom-0 right-0 h-24 w-40 bg-tealDark" style={{ transform: [{ skewX: '-25deg' }] }} />
        <View className="z-10 flex-row items-center justify-between">
          <View className="h-11 w-11 items-center justify-center rounded-full bg-black/20">
            <Ionicons name="chevron-back" size={22} color="#fff" />
          </View>
          <Pressable onPress={onToggle} className="h-11 w-11 items-center justify-center rounded-full bg-black/20">
            <Ionicons name={saved ? 'heart' : 'heart-outline'} size={22} color={saved ? '#52C9E8' : '#0b1112'} />
          </Pressable>
        </View>
        <View className="absolute bottom-5 left-6 z-20">
          <Text className="text-base font-semibold text-white">●  {region}</Text>
          <Text className="mt-1 text-4xl font-black italic text-white">{title}</Text>
        </View>
      </View>
    </View>
  );
}
