import Media from "../components/Media";
import { photos } from "../data/photos";
import { contact } from "../data/contact";
export default function Contact() {
  const tel = contact.phone.replace(/\s/g, "");
  return (
    <section className="contact">
      <Media src={photos.contactLeft} alt="Fashion photograph" ratio="3 / 4.4" className="c-img" eager />
      <div className="c-info">
        <h1>Contact</h1>
        {contact.emails.map((e) => <a key={e} href={`mailto:${e}`} className="u">{e}</a>)}
        <a href={`tel:${tel}`}>{contact.phone}</a>
        <p>{contact.location}</p>
        <p>{contact.postalCode}</p>
      </div>
      <Media src={photos.contactRight} alt="Portrait of Maja Siuda" ratio="3 / 4.4" className="c-img" eager />
    </section>
  );
}
