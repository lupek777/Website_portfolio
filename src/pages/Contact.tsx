import { useEffect, useRef } from "react";
import { Phone, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { contact } from "../data/contact";

export default function Contact() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".apple-contact-eyebrow", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".apple-contact-title span", {
        y: 90,
        opacity: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
        delay: 0.1,
      });

      gsap.from(
        ".apple-contact-description, .apple-contact-actions",
        {
          y: 25,
          opacity: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.45,
        }
      );

      gsap.from(".apple-contact-bottom", {
        opacity: 0,
        duration: 1,
        delay: 0.9,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="apple-contact" ref={pageRef}>
      <div className="apple-contact-glow" />

      <section className="apple-contact-content">
        <p className="apple-contact-eyebrow">
          LET'S CREATE SOMETHING
        </p>

        <h1 className="apple-contact-title">
          <span>Good ideas.</span>
          <span className="apple-title-muted">Great things.</span>
          <span className="apple-title-italic">Together.</span>
        </h1>

        <p className="apple-contact-description">
          Creative direction, fashion styling and visual stories.
          <br />
          Based between Barcelona and Cracow. Available worldwide.
        </p>

        <div className="apple-contact-actions">
       <a
  className="apple-contact-button apple-button-dark"
  href="mailto:majasiuda23@gmail.com"
>
  Get in touch
  <ArrowUpRight size={18} />
</a>

          <a
            className="apple-contact-button apple-button-light"
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
          >
            <Phone size={16} />
            {contact.phone}
          </a>
        </div>

        <div className="apple-contact-bottom">
          <span>BARCELONA · CRACOW</span>
          <span>MAJA SIUDA © 2026</span>
        </div>
      </section>
    </main>
  );
}