# Codex Start Here: Turoid Website Revamp

You are working in the safe revamp worktree:

```text
/Users/nickwong/Documents/turoid-ai-site-revamp
```

Branch:

```text
website-revamp-2026
```

The live production branch is `main`. Do not switch this worktree to `main` unless Nick asks.

## First Files To Read

1. `HANDOVER.md`
2. `handover/revamp-brief.md`
3. `handover/seo-and-launch-checklist.md`

## Local Preview

Run:

```sh
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

If port `8080` is busy, use another port:

```sh
python3 -m http.server 8081
```

## Working Rules

- Make revamp changes on `website-revamp-2026`.
- Preserve existing SEO URLs unless Nick explicitly approves redirects.
- Keep `sitemap.xml`, `robots.txt`, `llms.txt`, canonical tags, and schema coherent.
- Keep the audit, benchmark, readiness assessment, and contact CTAs working.
- Before handoff, run `git diff --check` and review desktop/mobile pages.

## Handoff Back To Nick

Send:

- Preview URL or local screenshots.
- Short summary of what changed.
- Any open questions.
- Pull request into `main` when ready.

