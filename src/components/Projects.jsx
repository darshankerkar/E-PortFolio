import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    title:    'AuthValidator',
    desc:     'Modular system to test and validate authentication mechanisms with secure API design.',
    image:    '/authv.png',
    live:     'https://auth-validator.vercel.app/',
  },
  {
    title:    'V-Library',
    desc:     'Centralized system for managing digital library resources with advanced search and categorization.',
    image:    '/library.png',
    live:     'https://v-library-new.vercel.app/',
  },
  {
    title:    'Recrify',
    desc:     'Recruitment platform automating hiring workflows using intelligent systems for resume analysis.',
    image:    '/recrify.png',
    live:     'https://recrify.co/',
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' } }),
};

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px' }}>
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've <span className="gradient-text">Built</span></h2>
          <div className="divider" />
          <p className="section-subtitle">Real-world platforms focused on scalability, performance, and practical impact.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onMouseEnter={e => {
                const content = e.currentTarget.querySelector('.project-content');
                const btn = e.currentTarget.querySelector('.project-btn');
                const img = e.currentTarget.querySelector('.project-image');
                if (content) content.style.opacity = '0';
                if (btn) btn.style.opacity = '1';
                if (btn) btn.style.transform = 'translateY(0)';
                if (img) img.style.opacity = '1';
              }}
              onMouseLeave={e => {
                const content = e.currentTarget.querySelector('.project-content');
                const btn = e.currentTarget.querySelector('.project-btn');
                const img = e.currentTarget.querySelector('.project-image');
                if (content) content.style.opacity = '1';
                if (btn) btn.style.opacity = '0';
                if (btn) btn.style.transform = 'translateY(14px)';
                if (img) img.style.opacity = '0';
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                minHeight: '320px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              {/* Image layer */}
              <div
                className="project-image"
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                }}
              />

              {/* Content - title + description (centered) */}
              <div
                className="project-content"
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '40px 24px',
                  transition: 'opacity 0.3s ease',
                }}
              >
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', letterSpacing: '-0.02em' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#d1d5db', lineHeight: 1.6, maxWidth: '280px' }}>
                  {p.desc}
                </p>
              </div>

              {/* Button - appears on hover */}
              <a
                className="project-btn"
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: '58px',
                  zIndex: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transform: 'translateY(14px)',
                  transition: 'opacity 0.28s ease, transform 0.28s ease, background 0.2s ease',
                  background: '#1528c7',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#1020ab';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#1528c7';
                }}
              >
                <span style={{
                  color: '#ffffff',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  VIEW PROJECT
                </span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
