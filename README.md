# JarR website

Next.js + React + TypeScript + Tailwind + Framer Motion. Deploys on Vercel.

## Change things (phone friendly, on GitHub)
- Everything editable is in `src/data/site.ts` (name, tagline, songs, bio, shows, socials, email, video).
- Swap photos: replace `public/images/cover.jpg` and `public/images/artist.jpg` (same names).
- Add songs: upload mp3 files into `public/audio/`, then add a line in `tracks` in `site.ts`.
- Add a video: upload an mp4 into `public/video/` and set `video.src`.

## Deploy
1. Upload this folder to a GitHub repo.
2. In Vercel: Add New > Project > import the repo > Deploy.
