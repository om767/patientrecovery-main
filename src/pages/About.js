import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Empowering healthcare with AI-driven wound analysis and recovery tracking</p>
      </header>

      <div className="about-container">
        <section className="about-card">
          <h2>Who We Are</h2>
          <p>
            At <strong>Swasth Bharat | HealTrack</strong>, we believe technology can make 
            healthcare more accessible and effective. Our digital platform leverages AI 
            to analyze wound images, track healing progress, and empower patients and 
            doctors with meaningful insights.
          </p>
        </section>

        <section className="about-card">
          <h2>Our Mission</h2>
          <p>
            To empower patients and healthcare professionals with AI-powered tools that 
            improve wound care outcomes, ensure better recovery tracking, and make 
            digital health accessible to all.
          </p>
        </section>

        <section className="about-card">
          <h2>Our Vision</h2>
          <p>
            A world where healthcare insights are available anytime, anywhere — 
            helping patients heal faster, doctors make informed decisions, 
            and caregivers stay connected.
          </p>
        </section>

        <section className="about-card">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Accessibility:</strong> Making healthcare solutions available to everyone.</li>
            <li><strong>Innovation:</strong> Leveraging AI and modern technology for better outcomes.</li>
            <li><strong>Trust:</strong> Ensuring privacy and data protection in every interaction.</li>
            <li><strong>Compassion:</strong> Supporting patients and caregivers with care and empathy.</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li>AI-driven wound image analysis with real-time insights.</li>
            <li>Secure, cloud-based storage with encryption.</li>
            <li>Easy-to-use web and mobile platforms for patients & doctors.</li>
            <li>Data-driven tools for doctors to monitor recovery trends.</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>Data Protection & Privacy</h2>
          <p>We prioritize your privacy with strict security protocols:</p>
          <ul>
            <li>All data is stored securely with encryption.</li>
            <li>We never sell personal information to third parties.</li>
            <li>Only you and your healthcare provider can access your records.</li>
            <li>We comply with all legal and regulatory requirements.</li>
          </ul>
        </section>

        <section className="about-card">
          <h2>Our Team</h2>
          <p>
            A dedicated team of healthcare professionals, AI researchers, 
            and innovators working together to make digital healthcare more effective.
          </p>
        </section>

        <section className="about-card">
          <h2>Contact Us</h2>
          <p>Have questions or feedback? Reach out anytime!</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:aisachbanaya@gmail.com">aisachbanaya@gmail.com</a></li>
            <li><strong>Location:</strong> India</li>
          </ul>
        </section>
      </div>

      <footer className="about-footer">
        <p>
          &copy; 2025 Swasth Bharat | HealTrack. All rights reserved. |{" "}
          <a href="/terms">Terms & Conditions</a> | <a href="/privacy">Privacy Policy</a>
        </p>
      </footer>
    </div>
  );
}
