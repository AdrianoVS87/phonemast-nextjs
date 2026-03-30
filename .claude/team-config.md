# Phonemast Agent Team Configuration

## Team Members

1. **Architect** (Opus) — owns: /app layout, routing, data flow, Sanity schemas. Reviews all PRs before merge.
2. **Frontend** (Sonnet) — owns: /components, /app/*/page.tsx, Tailwind styles, Motion animations. Does NOT touch /lib or /api.
3. **Backend** (Codex) — owns: /lib, /app/api, server actions, Sanity client, build config, vercel.json, next.config.ts. Runs builds and tests after changes.
4. **Docs** (Haiku) — owns: README, JSDoc comments, CHANGELOG, type documentation. Runs after each feature is complete.

## Rules
- File ownership is strict — no teammate edits another's files.
- Interface contracts defined by Architect before implementation begins.
