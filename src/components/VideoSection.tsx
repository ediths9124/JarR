import { video } from "@/data/site";

export default function VideoSection() {
  return (
    <section id="video" className="bg-panel py-28">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-6xl md:text-8xl">Video</h2>
        <div className="mt-12 aspect-video w-full overflow-hidden bg-night">
          {video.src ? (
            <video src={video.src} poster={video.poster} controls playsInline preload="metadata" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-dim">Video coming soon.</div>
          )}
        </div>
      </div>
    </section>
  );
}
