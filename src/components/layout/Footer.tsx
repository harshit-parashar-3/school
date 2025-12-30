import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { name: "About Us", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

const programLinks = [
  { name: "Elementary School", path: "/academics" },
  { name: "Middle School", path: "/academics" },
  { name: "High School", path: "/academics" },
  { name: "Summer Programs", path: "/academics" },
];

// Update these URLs with your actual social media profiles
const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/prestigeacademy", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/prestigeacademy", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/prestigeacademy", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/school/prestige-academy", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent">
                <GraduationCap className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-display text-xl font-bold">
                  Prestige Academy
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Nurturing minds, building futures. Since 1965, we have been committed to 
              academic excellence and the holistic development of every student.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Academic Drive<br />
                  Cambridge, MA 02138
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href="mailto:info@prestigeacademy.edu" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@prestigeacademy.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Prestige Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
