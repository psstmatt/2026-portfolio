# Matt Reynolds Portfolio

Static portfolio rebuild using the reference structure: fixed identity header, horizontal project timeline, project details, About overlay, and sparse footer links.

## Stack

- Plain HTML
- Plain CSS
- Vanilla JavaScript
- No build step
- Neutral CSS media placeholders until the image/video pass

## Files

```text
index.html   page structure, metadata, About copy, links
style.css    layout, timeline, overlay, cursor
script.js    canonical project data and interactions
favicon.svg  browser icon
```

## Interaction

- Header shows `Matt Reynolds` and `Software Designer`.
- Header nav shows `About`, `Twitter`, and `TikTok`.
- Project data lives in one canonical array in `script.js`.
- The horizontal timeline supports wheel, drag, click/tap, and arrow-key navigation.
- About opens as a full-screen overlay and includes Email, Twitter, and TikTok links.
- Media slots are neutral placeholders with one TODO comment for the later image/video pass.

## Validation

```sh
tidy -q -e index.html
node --check script.js
xmllint --noout favicon.svg
git diff --check
```
