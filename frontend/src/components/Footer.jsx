import React from "react";
import { motion } from "framer-motion";
import {Link as ScrollLink} from 'react-scroll'
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-2 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@munroeboating.com"
                  className="hover:text-gray-100 transition-colors"
                >
                  info@munroeboating.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-2 text-gray-400"
                  aria-hidden="true"
                />
                <a
                  href="tel:+918138804905"
                  className="hover:text-gray-100 transition-colors"
                >
                  +91 813-880-4905
                </a>
              </li>
              <li className="flex items-center">
                <MapPin
                  size={18}
                  className="mr-2 text-gray-400"
                  aria-hidden="true"
                />
                <span>Plavaravayalil, Munroethuruthu, Kerala, India</span>
              </li>
            </ul>
          </div>
          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="hover:text-gray-100 transition-colors cursor-pointer"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="booking"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="hover:text-gray-100 transition-colors cursor-pointer"
                >
                  Book Now
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="packages"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="hover:text-gray-100 transition-colors cursor-pointer"
                >
                  Packages
                </ScrollLink>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#E5E7EB" }}
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} className="text-gray-400" />
              </motion.a>
              <motion.a
                href="https://facebook.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#E5E7EB" }}
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} className="text-gray-400" />
              </motion.a>
              <motion.a
                href="https://twitter.com/munroeboating"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#E5E7EB" }}
                aria-label="Follow us on Twitter"
              >
                <Twitter size={24} className="text-gray-400" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <div className="mt-12 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Munroe Boating. All rights reserved. | Designed by{" "}
          <motion.a
            href="https://sagar-sunil-portfolio.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
            aria-label="Visit Sagar Sunil's portfolio"
            whileHover={{ scale: 1.05 }}
          >
            Sagar Sunil
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
