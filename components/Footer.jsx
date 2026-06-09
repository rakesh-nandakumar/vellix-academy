import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-grid">
          {/* Col 1 – Brand */}
          <div className="footer-col">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/logos/logo-dark.png"
                alt="Vellix Academy"
                width={170}
                height={52}
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <p className="footer-about">
              Vellix Academy is Sri Lanka's premier enterprise IT education provider. We teach
              software development, data science, cloud computing and cybersecurity the way it's
              done at the enterprise level.
            </p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Col 2 – Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programmes">Programmes</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/instructors">Instructors</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/news">News & Blog</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Bauddhaloka Mawatha, Kohuwala, Colombo 06, Sri Lanka</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+94112123456">+94 112 123 456</a>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <a href="tel:+94771234567">+94 77 123 4567</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:info@vellixacademy.lk">info@vellixacademy.lk</a>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Vellix Academy. All rights reserved.
        </p>
        <p>
          <Link href="/about">About</Link>
          {" · "}
          <Link href="/contact">Contact</Link>
          {" · "}
          <Link href="/faq">FAQ</Link>
        </p>
      </div>
    </footer>
  );
}
