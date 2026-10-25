import { useEffect, useState } from "react";
type Props = { src: string; alt: string; ratio?: string; className?: string; eager?: boolean };
/** Image that keeps its box and shows a neutral placeholder if the file is missing. */
export default function Media({ src, alt, ratio = "4 / 5", className = "", eager }: Props) {
  const [bad, setBad] = useState(false);
  useEffect(() => setBad(false), [src]);
  return (
    <div className={`media ${className}`} style={{ aspectRatio: ratio }}>
      {bad ? (
        <div className="ph" role="img" aria-label={alt}><span>{src.split("/").pop()}</span></div>
      ) : (
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} onError={() => setBad(true)} />
      )}
    </div>
  );
}
