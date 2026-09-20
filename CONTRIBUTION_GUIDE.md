# Mobile GitHub contribution guide

## Branches
- `feature/navigation`
- `feature/screens`
- `feature/sqlite-offline`
- `feature/supabase-ai`
- `feature/audio`
- `test/mobile`
- `fix/<short-description>`

## Contribution map
| Area | Main files |
|---|---|
| Navigation | `src/app/**`, `BottomNav.tsx` |
| Screens | `src/app/**` |
| Components | `src/components/**` |
| SQLite | `src/lib/db.ts`, `src/context/AppProvider.tsx` |
| Supabase | `src/lib/supabase.ts`, `src/lib/sync.ts`, `supabase/migrations/**` |
| AI | `src/lib/ai.ts`, `supabase/functions/generate-story/**` |
| Audio | `src/components/AudioPlayer.tsx` |
| Tests | `__tests__/**` |

## Before opening a PR
1. Run `npm run typecheck`.
2. Run `npm test`.
3. Test offline by disabling Wi-Fi/data after the first launch.
4. Test a destination save/unsave flow.
5. Test the audio player with a real Supabase Storage URL.
6. Test AI with the Edge Function deployed and `GEMINI_API_KEY` stored as a Supabase secret.
