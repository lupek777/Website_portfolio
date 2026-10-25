# Maja Siuda — Fashion Portfolio

React + TypeScript + Vite. Five pages: `/`, `/experience`, `/education`, `/projects`, `/contact`.

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

## Photos
Put your files in `public/images/` using the numbered names. The mapping lives in **`src/data/photos.ts`** only.

| Files | Section |
|---|---|
| Photo_1–3 | Home hero (left, centre, right) |
| Photo_4, 31, 5–9 | Home gallery 01–06 (31 is the second image of 01) |
| Photo_10 | Experience video poster |
| Photo_11, 12 | Experience centre / right images |
| Photo_13, 14 | Education: LCI Barcelona / Cracow |
| Photo_15, 16 | Contact left / right |
| Photo_17 | Exhale of dystopia hero |
| Photo_18–22 | Exhale wide gallery |
| Photo_32, 33 | Exhale statistics (colour, black-and-white) |
| Photo_34–38 | Exhale carousel |
| Photo_23 | Red Renaissance hero |
| Photo_24–26 | Red Renaissance composition |
| Photo_27, 39–41 | Red Renaissance carousel |
| Photo_28 | Fashion Events |

**Replace a photo:** save your file over the same name (e.g. `Photo_1.jpg`). For PNG/WebP, change the extension in `src/data/photos.ts` (the `p(n, "png")` helper takes an extension). Missing files show a neutral placeholder; the layout never breaks.

**Add carousel photos:** add a `p(42)` entry to `exhaleCarousel` or `renaissanceCarousel` in `photos.ts`.

## Video
Save your video as `public/videos/Experience_Video.mp4`, or change the path in `src/data/media.ts`. The poster is `experienceVideoPoster`.

## Social links and contact
- Social URLs: `src/data/socialLinks.ts` (empty = inactive icon).
- Contact details: `src/data/contact.ts`.
