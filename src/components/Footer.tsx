import { motion } from 'motion/react';
import { Heart, Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', page: 'features' },
      { name: 'Pricing', page: 'pricing' },
      { name: 'Use Cases', page: 'use-cases' },
      { name: 'Host Dashboard', page: 'dashboard' },
    ],
    Support: [
      { name: 'FAQ', page: 'faq' },
      { name: 'Contact Us', page: 'contact' },
      { name: 'Help Center', page: 'contact' },
      { name: 'Privacy Policy', page: 'home' },
    ],
    'Use Cases': [
      { name: 'Weddings', page: 'use-cases' },
      { name: 'Birthdays', page: 'use-cases' },
      { name: 'Corporate Events', page: 'use-cases' },
      { name: 'College Fests', page: 'use-cases' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const languages = ['English', 'हिन्दी', 'ગુજરાતી', 'मराठी', 'தமிழ்', 'తెలుగు', 'বাংলা'];

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-[#B8E4D0]/10 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-2xl bg-gradient-to-r from-[#FFB200] to-[#FF4D67] bg-clip-text text-transparent mb-3">
                Kululu
              </h3>
              <p className="text-gray-600 mb-4 max-w-sm">
                India's favorite platform to collect and share memories from every celebration. 
                No app needed, works in your language.
              </p>
            </motion.div>

            {/* Languages */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">Available in:</p>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-white rounded-full text-xs text-gray-600 border border-gray-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white rounded-xl hover:bg-gradient-to-br hover:from-[#FFB200] hover:to-[#FF4D67] text-gray-600 hover:text-white transition-all shadow-sm hover:shadow-md"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-gray-900">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className="text-gray-600 hover:text-[#FF4D67] transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-8 mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFB200]" />
              <span>support@kululu.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#FF4D67]" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#176B87]" />
              <span>Mumbai, India</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {currentYear} Kululu. All rights reserved.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 flex items-center gap-1"
          >
            Made for India with <Heart className="w-4 h-4 text-[#FF4D67] fill-current" />
          </motion.p>
          <div className="flex gap-4 text-sm text-gray-600">
            <button className="hover:text-[#FF4D67] transition-colors">Terms</button>
            <button className="hover:text-[#FF4D67] transition-colors">Privacy</button>
            <button className="hover:text-[#FF4D67] transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
