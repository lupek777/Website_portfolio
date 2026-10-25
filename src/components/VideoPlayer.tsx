import { useRef, useState } from "react";
import { Play } from "lucide-react";
export default function VideoPlayer({ src, poster }: { src: string; poster: string }) {
  const v = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [err, setErr] = useState(false);
  const start = () => {
    setStarted(true);
    v.current?.play().catch(() => setErr(true));
  };
  return (
    <div className="video">
      <video ref={v} src={src} poster={poster} controls={started} preload="none" playsInline onError={() => setErr(true)} aria-label="Experience video" />
      {!started && (
        <button className="play" onClick={start} aria-label="Play video"><Play size={44} fill="#fff" /></button>
      )}
      {err && <p className="video-err">Video not found. Add public/videos/Experience_Video.mp4.</p>}
    </div>
  );
}
