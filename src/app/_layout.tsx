import '../global.css';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppProvider } from '@/context/AppProvider';

export default function RootLayout() {
  return (
    <AppProvider>
      <SafeAreaView className="flex-1 bg-cream">
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#FFFDF8' } }} />
      </SafeAreaView>
    </AppProvider>
  );
}
