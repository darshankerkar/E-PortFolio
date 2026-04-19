import { motion } from 'framer-motion';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid rgba(108,99,255,0.1)',
      padding: '40px 0',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '20px',
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: 32, height: 32, borderRadius: '8px',
              background: 'linear-gradient(135deg, #6c63ff, #00d4ff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
                <path d="m14.5 4-5 16" />
              </svg>
            </div>
            <span style={{ fontWeight: 800, color: '#64748b', fontSize: '0.95rem' }}>
              Darshan<span style={{ color: '#6c63ff' }}>.</span>
            </span>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <motion.a
              href="https://www.linkedin.com/in/darshan-kerkar-4a237a325/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: '6px',
                background: 'rgba(0, 119, 181, 0.1)', color: '#0077b5',
                cursor: 'pointer'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.94 6.5A2.44 2.44 0 1 1 6.94 1.62a2.44 2.44 0 0 1 0 4.88ZM4.75 22V8.2h4.38V22H4.75Zm7.25-13.8h4.18v1.88h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.21 2.89 5.21 6.65V22h-4.38v-6.77c0-1.62-.03-3.69-2.25-3.69-2.26 0-2.61 1.76-2.61 3.57V22H12V8.2Z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/darshankerkar05"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 32, height: 32, borderRadius: '6px',
                background: 'rgba(217, 39, 111, 0.1)', color: '#d9276f',
                cursor: 'pointer'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm9 2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4.75 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
              </svg>
            </motion.a>
          </div>

          {/* Credit */}
          <p style={{ color: '#475569', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#ff6b6b" aria-hidden="true">
                <path d="M12 21.35 10.55 20.03C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.53L12 21.35Z" />
              </svg>
            </motion.span>
            by Darshan Kerkar © {new Date().getFullYear()}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'rgba(108,99,255,0.1)',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: '8px',
              padding: '8px 14px',
              color: '#6c63ff',
              fontSize: '0.8rem',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 7-7 7 7" />
              <path d="M12 5v14" />
            </svg>
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
