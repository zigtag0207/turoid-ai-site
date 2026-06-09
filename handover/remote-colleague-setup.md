# Remote Colleague Setup

Use this if you are working on the Turoid website revamp from your own machine.

## Access

Repo:

```text
https://github.com/zigtag0207/turoid-ai-site
```

Working branch:

```text
website-revamp-2026
```

Production branch:

```text
main
```

Do not commit directly to `main`.

## Codex Account vs GitHub Access

Using the same Codex account is enough to use Codex as the coding assistant on another machine. It does not automatically put the website files on that machine, and it does not replace GitHub repo access.

Your colleague still needs one of these:

- GitHub access to clone, push, and open a pull request.
- A copy of the repo from Nick, with Nick handling pushes later.

Best workflow:

1. Clone the GitHub repo on the colleague's machine.
2. Open Codex in that cloned folder.
3. Work on `website-revamp-2026`.
4. Push the branch or send changes back to Nick.

Do not rely on the existing Codex chat from Nick's machine. That chat references local paths on Nick's computer, so the colleague should start a new Codex chat from the cloned repo folder on their own machine.

## Account Options

Recommended clean option:

- Use your own GitHub account.
- Ask Nick to invite you as a collaborator on `zigtag0207/turoid-ai-site`.
- Push your changes to `website-revamp-2026`.
- Open a pull request into `main`.

Convenient but less clean option:

- Use Nick's GitHub account on your machine.
- You will be able to push without a separate invite.
- Commits and pushes may appear as Nick unless your local Git author is configured.
- This is less ideal for accountability and security.

If using the same shared account, set your local Git author so the commit history still shows who worked on the revamp:

```sh
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Clone And Start

```sh
git clone https://github.com/zigtag0207/turoid-ai-site.git
cd turoid-ai-site
git fetch origin
git switch --track origin/website-revamp-2026
```

If Git says the branch already exists locally, use:

```sh
git switch website-revamp-2026
git pull
```

## Read First

Open these files before making changes:

```text
CODEX_START_HERE.md
HANDOVER.md
handover/revamp-brief.md
handover/seo-and-launch-checklist.md
```

`CODEX_START_HERE.md` exists on the `website-revamp-2026` branch.

## Local Preview

```sh
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/
```

If port `8080` is busy:

```sh
python3 -m http.server 8081
```

## Codex Prompt To Use

When opening Codex in this repo, use:

```text
Read CODEX_START_HERE.md, HANDOVER.md, handover/revamp-brief.md, and handover/seo-and-launch-checklist.md. Then help me revamp the Turoid website on the website-revamp-2026 branch without breaking existing SEO pages, conversion links, sitemap.xml, robots.txt, llms.txt, canonical tags, or schema.
```

## Before Sending Back To Nick

Run:

```sh
git diff --check
git status
```

Then send:

- Preview URL or screenshots.
- Summary of what changed.
- Any open questions.
- Pull request link into `main`.
