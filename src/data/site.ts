// ============================================================
//  EVERYTHING you will want to change lives in this one file.
// ============================================================

export const site = {
  name: "JarR",
  tagline: "Music, made after dark.",
  description: "Official website of JarR.",
  // Booking email used by the contact form (it opens the visitor's email app).
  email: "", // e.g. "booking@yourname.com"
};

// Images live in /public/images. Replace the files, keep the names.
export const images = {
  cover: "/images/cover.jpg", // hero + track artwork
  artist: "/images/artist.jpg", // about section
};

// Add songs: drop an mp3 into /public/audio and add a line here.
export const tracks: { title: string; src: string; year?: string }[] = [
  { title: "Track One", src: "/audio/track-1.mp3" },
  { title: "Track Two", src: "/audio/track-2.mp3" },
  { title: "Track Three", src: "/audio/track-3.mp3" },
];

export const about = {
  heading: "About JarR",
  // Write your own story here.
  text: [
    "Bio coming soon.",
  ],
};

// Add a video: drop an mp4 into /public/video and put the path here.
export const video = {
  src: "", // e.g. "/video/clip.mp4"
  poster: "/images/cover.jpg",
};

// Add shows like: { date: "12 Dec", city: "Windhoek", venue: "Venue", link: "https://..." }
export const shows: { date: string; city: string; venue: string; link?: string }[] = [];

// Add socials like: { label: "Instagram", href: "https://instagram.com/yourhandle" }
export const socials: { label: string; href: string }[] = [];
