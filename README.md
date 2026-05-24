# Matt Reynolds Portfolio

A static, mobile-first software design portfolio centered on a horizontal project rail. The page is intentionally quiet: one focused node, adjacent work fading away, and only the company, dates, and project title visible.

## Stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- No build step
- Local assets only
- Vercel Web Analytics

## Files

```text
index.html          page structure, metadata, analytics snippet
style.css           rail, device frames, responsive layout, Konami states
script.js           project data, rail geometry, keyboard/scroll interaction
favicon.svg         browser icon
assets/avatar/      local header avatar
assets/downloads/   downloadable resume PDF
assets/favicons/    company favicon assets for project identification
```

## Interaction

- Initial focus lands on the TikTok confidential GenAI node.
- Horizontal scroll snap and ArrowLeft/ArrowRight move through the 16-node project sequence.
- The active project sits on the timeline marker; nearby projects fade to support comparison without clutter.
- The selected label stays centered on the active node and shows only company, date range, and project name.
- The header name reveals quiet `Portfolio` and `Resume` download links on hover, focus, or tap. Both currently point to the resume PDF.
- Typing the Konami code on the confidential TikTok node replaces `Locked` with progress inputs, locks timeline movement before the left/right commands, shows `Unlocked` on completion, then returns to `Locked` after 5 seconds.

## Content Policy

- No invented metrics.
- No private/confidential product detail.
- TikTok remains a locked teaser until the work can be discussed publicly.
- Project spacing represents ordered portfolio chronology, not exact employment duration.
- Visual detail should earn its pixels: no decorative grids, fake depth, noisy animation, or redundant case-study copy.

## Analytics

Vercel Web Analytics is included with the no-build static HTML snippet:

```html
<script>
  window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
</script>
<script defer src="/_vercel/insights/script.js"></script>
```

Web Analytics must also be enabled for the `2026-portfolio` Vercel project.

## Local Preview

```sh
python3 -m http.server 8766
```

Then open `http://127.0.0.1:8766/`.

## Validation

```sh
tidy -q -e index.html
node --check script.js
xmllint --noout favicon.svg
git diff --check
```
