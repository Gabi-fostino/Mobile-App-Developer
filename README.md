# Train Storyteller — React Native / Expo

A mobile-first train journey storyteller based on the supplied UI reference and route research. It is designed to work offline first, with Supabase sync and an optional AI story generator.

## Stack
- React Native + Expo + TypeScript
- Expo Router for navigation
- NativeWind 4 for styling
- Expo SQLite for offline-first route/story/saved data
- Supabase for cloud data and Storage
- Supabase Edge Function for AI story generation
- expo-audio for narration playback
- Jest / jest-expo for tests

## Screens
- Home / journey overview
- Route with all researched stops
- Destination overview
- Destination photos
- Saved destinations
- Settings / offline status

The visual language follows the supplied reference: teal, warm orange, rounded cards, large destination title, tabs, saved state and bottom route card. The supplied screenshot is included as `docs/ui-reference.jpeg`.

## Research basis
The supplied research defines a Pretoria → Johannesburg → Cape Town journey using Gautrain for the first leg and Shosholoza Meyl for the second, with stops including Kimberley, De Aar, Hutchinson/Merriman, Worcester, Wellington, Paarl, Bellville and Cape Town. See the cited research file in the project handoff for the exact source details.

## Run locally
1. Install Node.js supported by your Expo SDK.
2. `npm install`
3. Copy `.env.example` to `.env` and add Supabase values.
4. `npx expo start`
5. Scan the QR code in Expo Go or use an emulator.

## Supabase
Run `supabase/migrations/001_initial.sql` in the Supabase SQL editor. Then deploy the Edge Function in `supabase/functions/generate-story` and set the `GEMINI_API_KEY` secret on Supabase.

The mobile app never contains the Gemini secret. It calls the Edge Function instead.

## Audio
Upload narration `.mp3`/`.m4a` files to a Supabase Storage bucket named `narration`. Put their public or signed URL into `audio_url` for a stop. The AudioPlayer component will play the URL when present.

## Offline behaviour
- Seed route content is bundled in the app.
- SQLite is populated on first launch.
- Destination detail and saved state read from SQLite first.
- Cloud sync is attempted only when a network request is available.
- If Supabase is unavailable, the user can continue reading local route stories.

## GitHub contribution areas
This project is intentionally split so a mobile contributor can work on screens/components/navigation, SQLite, Supabase/AI integration, audio, tests and bug fixes without rewriting the whole app.
