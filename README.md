# michaelu4.github.io

Personal portfolio for Michael Urgilez. Plain HTML/CSS, no build step. GitHub Pages serves it from `main`.

```
index.html                  Home: bio, work, experience, leadership, skills, contact
styles.css                  Shared styles
projects/<slug>/index.html  Project pages (quadruped-robot is the full case study)
assets/                     Images, favicon, og-image.png (link preview)
resume.pdf                  Add this file at the repo root
```

## Find everything left to fill in

```bash
grep -rn -e "TODO" -e "\[ADD" -e "IMAGE" --include=*.html .
```

## Swap a placeholder for a real image

Each placeholder is a `<div class="ph ...">`. Replace the whole div with an `<img>` that keeps the same ratio class:

```html
<img class="media ratio-16-9" src="../../assets/quadruped/walking.gif"
     alt="Quadruped robot walking across a table" width="1600" height="900" loading="lazy">
```

On `index.html` paths start with `assets/`; on project pages they start with `../../assets/`.
Keep photos under ~300 KB (export JPG/WebP at ~1600px wide). For the walking GIF, an MP4 is much smaller:

```html
<video class="media ratio-16-9" src="../../assets/quadruped/walking.mp4" autoplay muted loop playsinline></video>
```

## After changing styles.css or main.js

Bump the `?v=` value on the `styles.css` / `main.js` links in every HTML file (e.g. `?v=20261028b` → `?v=20261029a`) so visitors' browsers fetch the new file instead of a cached one:

```bash
sed -i 's/?v=20261028b/?v=NEWVALUE/g' index.html projects/*/index.html
```
