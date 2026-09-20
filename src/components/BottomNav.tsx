import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';

const items = [
  { label: 'Journey', icon: 'map-outline', activeIcon: 'map', href: '/' },
  { label: 'Saved', icon: 'heart-outline', activeIcon: 'heart', href: '/saved' },
  { label: 'Settings', icon: 'settings-outline', activeIcon: 'settings', href: '/settings' },
] as const;

export function BottomNav() {
  const router = useRouter();
  const path = usePathname();
  return (
    <View className="flex-row border-t border-slate-200 bg-white px-4 pb-5 pt-3">
      {items.map((item) => {
        const active = path === item.href;
        return (
          <Pressable key={item.href} onPress={() => router.push(item.href)} className="flex-1 items-center">
            <Ionicons name={active ? item.activeIcon : item.icon} size={22} color={active ? '#0E7779' : '#718096'} />
            <Text className={`mt-1 text-xs font-bold ${active ? 'text-teal' : 'text-slate-500'}`}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
