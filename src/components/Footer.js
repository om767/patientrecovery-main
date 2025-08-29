import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {/* Brand */}
          <h2 className="brand">SWASTH BHARAT</h2>

          {/* Social Links */}
          <div className="footer-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          {/* Copy */}
          <p className="copy">
            © 2025 SWASTH BHARAT. All rights reserved. | Designed with ❤️ for a
            Healthier India
          </p>
        </div>
      </footer>

      <style>{`
        .footer {
          background: linear-gradient(135deg, #0072ff, #00c6ff);
          color: white;
          text-align: center;
          padding: 2rem 1rem;
          border-radius: 0;
          margin: 0;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
        }

        .brand {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(90deg, #ffffff, #ffdf40);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-links a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #ffdf40;
          transform: translateY(-2px);
        }

        .copy {
          font-size: 0.9rem;
          opacity: 0.85;
        }
      `}</style>
    </>
  );
}

export default Footer;
