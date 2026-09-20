import { serve } from 'https://deno.land/std@0.224.0/http/server.ts';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  try {
    const { name, description, fun_fact } = await req.json();
    const apiKey = Deno.env.get('GEMINI_API_KEY');
    if (!apiKey) throw new Error('GEMINI_API_KEY is not configured');

    const prompt = `You are a concise train journey storyteller. Create a 90-120 word spoken-style story for ${name}. Use only these supplied facts: ${description}. Fun fact: ${fun_fact}. Do not invent dates, people or claims. Make it warm and easy to listen to.`;
    const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!result.ok) throw new Error('Gemini request failed');
    const json = await result.json();
    const story = json?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!story) throw new Error('No story returned');
    return new Response(JSON.stringify({ story }), { headers: { ...cors, 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), { status: 500, headers: { ...cors, 'Content-Type': 'application/json' } });
  }
});
