# SEO And Launch Checklist

Use this before merging a website revamp into `main`.

## URL Safety

- [ ] Homepage works: `/`
- [ ] Core HK page works: `/family-office-software-hong-kong/`
- [ ] HK exact-match page works: `/hk-family-office-software/`
- [ ] Comparison page works: `/best-family-office-software-hong-kong/`
- [ ] Reporting page works: `/family-office-reporting-software-hong-kong/`
- [ ] Audit page works: `/hk-family-office-software-audit/`
- [ ] Benchmark page works: `/hk-family-office-software-stack-benchmark/`
- [ ] Readiness assessment works: `/hk-family-office-software-readiness-assessment/`
- [ ] Press page works: `/press/`
- [ ] No existing URL was renamed without a redirect.

## SEO Basics

- [ ] Each important page has one clear `<title>`.
- [ ] Each important page has a meta description.
- [ ] Each important page has a self-referencing canonical URL.
- [ ] `robots.txt` still allows crawling.
- [ ] `sitemap.xml` includes all indexable pages.
- [ ] `llms.txt` still describes Turoid accurately.
- [ ] Organization schema still uses `https://www.turoid.ai/#organization`.
- [ ] Legal name remains `Turoid Financial Technologies Limited`.

## Conversion

- [ ] Free audit CTA is visible from homepage.
- [ ] Benchmark download CTA is visible from homepage or relevant HK page.
- [ ] `hello@turoid.ai` links work.
- [ ] WhatsApp link works.
- [ ] Benchmark PDF works: `/growth/hk-family-office-software-stack-benchmark-2026.pdf`
- [ ] Readiness assessment link works.

## Design Review

- [ ] Desktop homepage reviewed.
- [ ] Mobile homepage reviewed.
- [ ] At least one SEO landing page reviewed.
- [ ] Navigation is usable on mobile.
- [ ] Text is readable and not overlapping.
- [ ] Images load correctly.
- [ ] Buttons look like buttons and have clear actions.

## Technical Checks

Run locally before review:

```sh
python3 -m http.server 8080
```

Manual checks:

- [ ] Open `http://localhost:8080/`
- [ ] Open `http://localhost:8080/family-office-software-hong-kong/`
- [ ] Open `http://localhost:8080/hk-family-office-software-audit/`
- [ ] Open `http://localhost:8080/hk-family-office-software-stack-benchmark/`
- [ ] Open `http://localhost:8080/sitemap.xml`
- [ ] Open `http://localhost:8080/llms.txt`

Optional command checks:

```sh
git diff --check
python3 -m http.server 8080
```

## Go-Live

- [ ] Nick approves the preview URL.
- [ ] Pull request is approved.
- [ ] Merge into `main`.
- [ ] Wait for deployment.
- [ ] Confirm live homepage loads.
- [ ] Confirm audit page loads.
- [ ] Confirm benchmark PDF loads.
- [ ] Confirm `sitemap.xml`, `robots.txt`, and `llms.txt` load.

