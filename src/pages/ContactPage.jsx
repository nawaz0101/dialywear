import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <div className="contact-page">

      {/* HEADER */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you</p>
      </section>

      {/* MAIN */}
      <section className="contact-container">
        <ContactInfo />
        <ContactForm />
      </section>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/917353364410?text=Hello%20I%20am%20interested%20in%20your%20products"
        className="whatsapp-float"
        target="_blank"
      >
        💬
      </a>

    </div>
  );
}