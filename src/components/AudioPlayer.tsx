import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

export function AudioPlayer({ uri }: { uri?: string | null }) {
  const player = useAudioPlayer(uri ?? null);
  const status = useAudioPlayerStatus(player);

  useEffect(() => () => player.remove(), [player]);

  if (!uri) {
    return <View className="rounded-2xl bg-mist p-4"><Text className="font-semibold text-teal">Narration audio will appear here when a track is connected.</Text></View>;
  }

  const playing = status.playing;
  return (
    <Pressable
      onPress={() => (playing ? player.pause() : player.play())}
      className="flex-row items-center rounded-2xl bg-teal p-4"
    >
      <View className="h-11 w-11 items-center justify-center rounded-full bg-orange">
        <Ionicons name={playing ? 'pause' : 'play'} size={20} color="#111" />
      </View>
      <View className="ml-3 flex-1">
        <Text className="font-black text-white">Storyteller narration</Text>
        <Text className="mt-1 text-xs text-white/70">Tap to {playing ? 'pause' : 'listen'}</Text>
      </View>
    </Pressable>
  );
}
