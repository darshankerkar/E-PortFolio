import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        // Find the overlapping sections and pick the first one that intersects the mid line
        entries.forEach(e => {
          if (e.isIntersecting) {
            setActiveLink('#' + e.target.id);
          }
        });
      },
      // Using a very narrow band precisely at the center-top of the screen.
      // This prevents the next section (like Experience) from overriding Skills.
      { rootMargin: '-20% 0px -79% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '14px 0' : '16px 0',
          background: 'rgba(10,10,10,0.94)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <motion.a
            href="#hero"
            whileHover={{ opacity: 0.8 }}
            style={{ textDecoration: 'none', fontSize: '1.05rem', fontWeight: 600, color: '#f4f4f4', letterSpacing: '0.01em' }}
          >
            darshan.dev
          </motion.a>

          {/* Desktop Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
            {links.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                whileHover={{ opacity: 0.7 }}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: activeLink === link.href ? '#ffffff' : '#b5b5b5',
                  transition: 'all 0.2s',
                  borderBottom: activeLink === link.href ? '1px solid #ffffff' : '1px solid transparent',
                  paddingBottom: '4px',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(v => !v)}
            style={{
              display: 'none', background: 'transparent', border: 'none',
              color: '#ffffff', cursor: 'pointer', padding: '6px',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 60, left: 0, right: 0, zIndex: 999,
              background: 'rgba(10,10,10,0.95)',
              backdropFilter: 'blur(10px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '20px 24px 28px',
              display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                  color: activeLink === link.href ? '#ffffff' : '#b5b5b5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
