# Pizza Bolt — split-file build

## Files (type these four)
| File | Lines | What it is |
|---|---|---|
| `index.html` | ~178 | Page structure only. Loads `styles.css` in `<head>` and `game.js` at the end of `<body>`. |
| `styles.css` | ~634 | All styling, including the 18 theme palettes. |
| `game.js` | ~3308 | All game logic (one big IIFE). No changes to the code itself. |
| `assets/` | folder | 28 images — copy the whole folder, do not type it. |

## How they connect
```html
<!-- inside <head> -->
<link rel="stylesheet" href="styles.css">

<!-- last line inside <body> -->
<script src="game.js"></script>
```
All three files must sit in the same folder. Google Fonts (Fredoka + Noto Sans Arabic) load from a CDN, so the fonts need internet; everything else runs offline.

## Typing notes
- Save every file as **UTF-8** — `game.js` contains Arabic strings.
- The first/last lines of `game.js` are indented 4 spaces (kept byte-identical to the original). The indent is harmless — keep it or not, behavior is the same.
- The last line of `game.js` is `})();` — the IIFE closer. Don't lose it, or nothing runs.
- `index.html` intentionally has **no trailing newline** after `</html>` — doesn't matter for editors.
- Images referenced by relative paths (`assets/pizza.png`, `assets/variants/...`). If you rename the folder, update those paths.
This project is for a competition
## Reference copy
`backup/index-single-file.html` is the original all-in-one version (byte-for-byte), kept only as a cross-check. Don't type from it.
