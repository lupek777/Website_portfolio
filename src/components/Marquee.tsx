const text = "Communication · Fashion Design · Creative Direction · Sewing and Patchworking · Event Planning · Styling · Fashion Management · ";
export default function Marquee() {
  return (
    <div className="marquee" role="img" aria-label={text.replace(/ · $/, "")}>
      <div className="marquee-track" aria-hidden="true">
        <span>{text}</span><span>{text}</span>
      </div>
    </div>
  );
}
