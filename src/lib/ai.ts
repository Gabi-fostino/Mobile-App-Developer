export async function generateStory(stop: { name: string; description: string; fun_fact: string }) {
  const base = process.env.EXPO_PUBLIC_API_BASE_URL;
  if (!base) throw new Error('AI API base URL is not configured.');

  const response = await fetch(`${base.replace(/\/$/, '')}/generate-story`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(stop),
  });
  if (!response.ok) throw new Error('AI story generation failed.');
  return (await response.json()) as { story: string };
}
