import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const roles = ['Full-Stack Developer', 'Open Source Contributor', 'Entrepreneur'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % roles.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 80,
        textAlign: 'center',
      }}
    >
      <div className="container" style={{ maxWidth: 800, position: 'relative', zIndex: 2 }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(2.2rem, 8vw, 5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #ffd166 28%, #ff7aa2 58%, #8be9fd 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 28px rgba(255,255,255,0.08)',
            whiteSpace: 'nowrap',
          }}
        >
          Darshan Kerkar
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            minHeight: 'clamp(2.1rem, 4vw, 2.8rem)',
            marginBottom: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -18, filter: 'blur(8px)' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999999',
                fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              {roles[roleIndex]}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
