import { Instagram, Mail, Linkedin } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const items = [
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "email", label: "Email", Icon: Mail },
  { key: "linkedin", label: "LinkedIn", Icon: Linkedin },
] as const;

export default function SocialLinks() {
  return (
    <ul className="social">
      {items.map(({ key, label, Icon }) => {
        const url =
          key === "instagram"
            ? "https://www.instagram.com/maja_siuda/"
            : key === "linkedin"
              ? "https://es.linkedin.com/in/maja-siuda-b49544313"
              : socialLinks[key];

        return (
          <li key={key}>
            {url ? (
              <a
                href={url}
                aria-label={label}
                target={key === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </a>
            ) : (
              <span
                className="off"
                role="img"
                aria-label={`${label} (link not set)`}
              >
                <Icon size={20} />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}