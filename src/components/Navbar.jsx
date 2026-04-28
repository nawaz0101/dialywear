import { useState } from "react";
import {Link} from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar({search, setSearch}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={handleClose}></div>
      )}

      <div className="navbar-container">
        
        {/* LEFT: Logo */}
        <div className="nav-left">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>

        {/* CENTER: Search */}
        <div className="nav-center">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        {/* RIGHT: Menu */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>
          <a href="/" onClick={handleClose}>Home</a>
          <Link to="/categories" onClick={handleClose} >Categories</Link>
          <Link to="/fabric" onClick={handleClose} >Fabric</Link>
          <Link to="/testimonials" onClick={handleClose}>Testimonials</Link>
          <Link to="/about" onClick={handleClose} >About</Link>
          <Link to="/contact" onClick={handleClose}>Contact</Link>
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
}