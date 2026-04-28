import { useState } from "react";
import "../styles/footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }

    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h2 className="logo">DialyWear</h2>
          <p>
            Premium clothing designed for modern lifestyles.
          </p>
        </div>

        {/* SHOP */}
        <div className="footer-col">
          <h4>Social Media Links</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Youtube</li>
            <li>Whatsapp</li>
          
          </ul>
        </div>

        {/* SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>DialyWear</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h4>Subscribe</h4>
          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>

          {/* SOCIAL */}
          <div className="socials">
            <span>IG</span>
            <span>FB</span>
            <span>TW</span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

        <div className="payments">
          <span>Visa</span>
          <span>MasterCard</span>
          <span>UPI</span>
        </div>
      </div>

    </footer>
  );
}