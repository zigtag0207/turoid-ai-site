# Turoid Website Revamp Handover

Start here if you are helping revamp the Turoid website.

Live site: https://www.turoid.ai/
Repository: https://github.com/zigtag0207/turoid-ai-site
Production branch: `main`
Recommended working branch: `website-revamp-2026`

## Goal

Refresh the current website design and user experience while preserving the existing SEO footprint, technical crawlability, and conversion assets that are already live.

The current site is a static HTML/CSS/JS website hosted from this repository. The safest workflow is:

1. Create a new branch from `main`.
2. Make all revamp changes on that branch.
3. Share a preview URL and screenshots.
4. Open a pull request into `main`.
5. Nick reviews and approves.
6. Merge to `main` only when ready to go live.

## Important Files

- `index.html`: homepage.
- `styles.css`: global styling.
- `script.js`: global interactions and click tracking hooks.
- `assets/turoid-logo.png`: main logo asset.
- `sitemap.xml`: search engine sitemap.
- `robots.txt`: crawler access file.
- `llms.txt`: AI/search context file.
- `_redirects`: apex-to-www redirect rules.
- `_headers`: deployment headers.
- `handover/revamp-brief.md`: business/design brief.
- `handover/remote-colleague-setup.md`: setup instructions for a colleague using their own machine.
- `handover/seo-and-launch-checklist.md`: required approval checklist.
- `handover/message-to-colleague.md`: ready-to-send handover note.

## Pages To Preserve

Core pages:

- `/`
- `/family-office-software/`
- `/family-office-software-hong-kong/`
- `/hk-family-office-software/`
- `/best-family-office-software-hong-kong/`
- `/hong-kong-family-office-technology-guide/`
- `/hk-family-office-software-readiness-assessment/`
- `/hk-family-office-software-audit/`
- `/hk-family-office-software-stack-benchmark/`
- `/family-office-reporting-software-hong-kong/`
- `/press/`

The site has more SEO pages than this list. Do not delete or rename pages unless the change includes redirects, sitemap updates, and approval.

## Non-Negotiables

- Keep `main` production-safe.
- Do not make design experiments directly on `main`.
- Preserve canonical URLs unless explicitly approved.
- Preserve `robots.txt`, `sitemap.xml`, and `llms.txt`.
- Preserve Organization schema identity: `https://www.turoid.ai/#organization`.
- Keep contact links working: `hello@turoid.ai` and WhatsApp `+852 6231 5831`.
- Keep the benchmark PDF reachable at `/growth/hk-family-office-software-stack-benchmark-2026.pdf`.
- Keep primary conversion paths visible: free audit, benchmark download, readiness assessment, contact.

## How To Work Locally

This is a static site. A simple local server is enough:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

If working from another machine, follow `handover/remote-colleague-setup.md` first.

## Suggested Pull Request Format

Use this PR summary:

```md
## What changed

- 

## Screenshots / preview

- Homepage:
- Mobile:
- Key SEO page:

## SEO safety

- [ ] Existing URLs preserved
- [ ] Canonical tags preserved
- [ ] `sitemap.xml` updated if URLs changed
- [ ] `llms.txt` updated if messaging changed
- [ ] Contact and CTA links tested

## Notes for Nick

- 
```
