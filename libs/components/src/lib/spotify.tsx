export default function Spotify() {
  return (
    <div className="flex flex-col w-full px-8">
      <iframe
        title="Podcast Embed"
        className=""
        src="https://open.spotify.com/embed/show/4W543Ppe5xxB6HF1t7eDTs?utm_source=generator"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
