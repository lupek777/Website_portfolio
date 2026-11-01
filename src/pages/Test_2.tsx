
import { useEffect } from "react";

const fonts = [
  { name: "Inter", type: "Modern Sans" },
  { name: "Space Grotesk", type: "Modern Sans" },
  { name: "Manrope", type: "Minimal Sans" },
  { name: "DM Sans", type: "Minimal Sans" },
  { name: "Montserrat", type: "Geometric Sans" },
  { name: "Poppins", type: "Geometric Sans" },
  { name: "Raleway", type: "Elegant Sans" },
  { name: "Josefin Sans", type: "Fashion Sans" },
  { name: "Syne", type: "Experimental" },
  { name: "Archivo Black", type: "Bold Display" },
  { name: "Bebas Neue", type: "Condensed Display" },
  { name: "Oswald", type: "Condensed Sans" },
  { name: "Barlow Condensed", type: "Condensed Sans" },
  { name: "League Spartan", type: "Bold Sans" },
  { name: "Outfit", type: "Contemporary Sans" },
  { name: "Plus Jakarta Sans", type: "Contemporary Sans" },
  { name: "Urbanist", type: "Contemporary Sans" },
  { name: "Sora", type: "Geometric Sans" },
  { name: "Archivo", type: "Editorial Sans" },
  { name: "Work Sans", type: "Clean Sans" },
  { name: "Cormorant Garamond", type: "Editorial Serif" },
  { name: "Bodoni Moda", type: "High Fashion Serif" },
  { name: "Playfair Display", type: "Editorial Serif" },
  { name: "DM Serif Display", type: "Display Serif" },
  { name: "Libre Baskerville", type: "Classic Serif" },
  { name: "Bodoni  Moda", type: "Fashion Serif" },
  { name: "Prata", type: "Luxury Serif" },
  { name: "Italiana", type: "Fashion Serif" },
  { name: "GFS Didot", type: "Classic Fashion" },
  { name: "Abril Fatface", type: "Statement Serif" },
  { name: "Instrument Serif", type: "Editorial Serif" },
  { name: "Newsreader", type: "Editorial Serif" },
  { name: "Lora", type: "Contemporary Serif" },
  { name: "Libre Caslon Display", type: "Editorial Serif" },
  { name: "Fraunces", type: "Expressive Serif" },
  { name: "Bree Serif", type: "Rounded Serif" },
  { name: "Prata", type: "Luxury Editorial" },
  { name: "Tenor Sans", type: "Elegant Minimal" },
  { name: "Jost", type: "Geometric Minimal" },
  { name: "Questrial", type: "Minimal Sans" },
  { name: "Futura", type: "Geometric Classic" },
  { name: "Archivo Narrow", type: "Narrow Sans" },
  { name: "Unbounded", type: "Experimental Display" },
  { name: "Righteous", type: "Retro Display" },
  { name: "Poiret One", type: "Art Deco" },
  { name: "Marcellus", type: "Classical Display" },
  { name: "Yeseva One", type: "Decorative Serif" },
  { name: "Cinzel", type: "Roman Display" },
  { name: "Forum", type: "Elegant Display" },
  { name: "Syne Mono", type: "Experimental Mono" },
];

const googleFonts = [
  "Inter", "Space Grotesk", "Manrope", "DM Sans", "Montserrat",
  "Poppins", "Raleway", "Josefin Sans", "Syne", "Archivo Black",
  "Bebas Neue", "Oswald", "Barlow Condensed", "League Spartan",
  "Outfit", "Plus Jakarta Sans", "Urbanist", "Sora", "Archivo",
  "Work Sans", "Cormorant Garamond", "Bodoni Moda",
  "Playfair Display", "DM Serif Display", "Libre Baskerville",
  "Prata", "Italiana", "GFS Didot", "Abril Fatface",
  "Instrument Serif", "Newsreader", "Lora", "Libre Caslon Display",
  "Fraunces", "Bree Serif", "Tenor Sans", "Jost", "Questrial",
  "Unbounded", "Righteous", "Poiret One", "Marcellus",
  "Yeseva One", "Cinzel", "Forum", "Syne Mono",
];

export default function Test_2() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";

    const families = [...new Set(googleFonts)].map(
      (font) => `family=${font.replace(/ /g, "+")}:wght@400;500;600;700`
    );

    link.href =
      "https://fonts.googleapis.com/css2?" +
      families.join("&") +
      "&display=swap";

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main className="font-lab">
      <style>{`
        .font-lab {
          min-height: 100vh;
          background: #f7f6f2;
          color: #191919;
          padding: 48px 5vw 80px;
          font-family: "Inter", sans-serif;
        }

        .font-lab * {
          box-sizing: border-box;
        }

        .font-lab-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid #d6d4cd;
          margin-bottom: 22px;
        }

        .font-lab-eyebrow {
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #77756e;
          margin-bottom: 18px;
        }

        .font-lab-heading {
          font-size: clamp(42px, 8vw, 100px);
          line-height: .88;
          letter-spacing: -.075em;
          font-weight: 500;
          margin: 0;
        }

        .font-lab-heading span {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-style: italic;
          font-weight: 400;
        }

        .font-lab-count {
          font-size: 11px;
          line-height: 1.8;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: #77756e;
          text-align: right;
          flex-shrink: 0;
        }

        .font-lab-intro {
          font-size: 13px;
          line-height: 1.7;
          color: #68665f;
          max-width: 440px;
          margin: 24px 0 36px;
        }

        .font-lab-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .font-card {
          min-width: 0;
          background: #fff;
          border: 1px solid #e5e3dc;
          padding: 20px;
          min-height: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background .2s ease, border-color .2s ease;
        }

        .font-card:hover {
          background: #eeece5;
          border-color: #b8b4aa;
        }

        .font-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 10px;
        }

        .font-card-number {
          color: #929087;
          font-size: 10px;
          letter-spacing: .08em;
        }

        .font-card-type {
          color: #77756e;
          font-size: 9px;
          letter-spacing: .08em;
          text-transform: uppercase;
          text-align: right;
        }

        .font-card-preview {
          font-size: clamp(25px, 3vw, 43px);
          font-weight: 500;
          letter-spacing: -.055em;
          line-height: .98;
          overflow-wrap: anywhere;
          margin: 22px 0;
        }

        .font-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          border-top: 1px solid #efeee9;
          padding-top: 12px;
        }

        .font-card-name {
          font-size: 11px;
          color: #282722;
        }

        .font-card-sample {
          font-size: 10px;
          color: #8a887f;
          text-align: right;
        }

        @media (min-width: 1100px) {
          .font-lab-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (min-width: 1600px) {
          .font-lab-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .font-lab {
            padding: 28px 16px 48px;
          }

          .font-lab-header {
            align-items: flex-start;
          }

          .font-lab-count {
            font-size: 9px;
          }

          .font-lab-grid {
            grid-template-columns: 1fr;
          }

          .font-card {
            min-height: 165px;
          }

          .font-card-preview {
            font-size: 38px;
          }
        }
      `}</style>

      <header className="font-lab-header">
        <div>
          <div className="font-lab-eyebrow">
            Maja Siuda — Typography Studies
          </div>
          <h1 className="font-lab-heading">
            Type
            <span>Archive.</span>
          </h1>
        </div>

        <div className="font-lab-count">
          Font research
          <br />
          50 styles
          <br />
          Test 02 / 03
        </div>
      </header>

      <p className="font-lab-intro">
        A study of type for fashion, image-making and visual identity.
        Compare each typeface using the same words, then choose the
        direction that feels right for the portfolio.
      </p>

      <section className="font-lab-grid">
        {fonts.map((font, index) => (
          <article className="font-card" key={`${font.name}-${index}`}>
            <div className="font-card-top">
              <span className="font-card-number">
                {String(index + 1).padStart(2, "0")} / 50
              </span>
              <span className="font-card-type">{font.type}</span>
            </div>

            <div
              className="font-card-preview"
              style={{ fontFamily: `"${font.name}", sans-serif` }}
            >
              Fashion
              <br />
              Forward
            </div>

            <div className="font-card-bottom">
              <span className="font-card-name">{font.name}</span>
              <span className="font-card-sample">Aa Bb 0123</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
