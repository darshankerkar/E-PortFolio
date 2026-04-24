import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.13, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} style={{ paddingBottom: '160px' }}>
      <div className="container">

        {/* Section label */}
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.73rem', color: '#4a90e2',
            letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '48px',
          }}
        >
          01 · About Me
        </motion.p>

        {/* Two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(240px, 340px) 1fr',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* ── LEFT: Photo ── */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            {/* Decorative glow behind photo */}
            <div style={{
              position: 'absolute',
              inset: '-2px',
              borderRadius: '20px',
              background: 'linear-gradient(145deg, rgba(108,99,255,0.5) 0%, rgba(147,197,253,0.3) 50%, rgba(167,139,250,0.5) 100%)',
              filter: 'blur(18px)',
              opacity: 0.6,
              zIndex: 0,
            }} />

            {/* Photo card — same feel as project cards */}
            <div style={{
              position: 'relative',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow:
                '0 0 0 1px rgba(108,99,255,0.25), 0 24px 60px rgba(0,0,0,0.6), 0 8px 24px rgba(108,99,255,0.18)',
              zIndex: 1,
              background: '#0c1020',
            }}>
              <img
                src="/In suit-EDIT.jpg"
                alt="Darshan Kerkar"
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'cover',
                  objectPosition: '50% top',
                  aspectRatio: '3 / 4',
                  filter: 'brightness(0.92) contrast(1.04)',
                  transform: 'scale(1.12)',
                  transformOrigin: 'center top',
                }}
              />

              {/* Subtle gradient overlay at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '80px',
                background: 'linear-gradient(to top, rgba(6,8,20,0.7) 0%, transparent 100%)',
              }} />
            </div>
          </motion.div>

          {/* ── RIGHT: Text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            {/* Welcome heading */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
              <h2 style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                fontWeight: 800,
                color: '#f1f5f9',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '0 0 20px',
              }}>
                Welcome to my{' '}
                <span style={{
                  background: 'linear-gradient(120deg, #93c5fd 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Portfolio</span>
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: '#94a3b8',
                lineHeight: 1.85,
                margin: 0,
                maxWidth: '520px',
              }}>
                I'm <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>Darshan Kerkar</strong>, a full-stack developer
                and B.E. IT student at VIT Mumbai, focused on building systems that are fast, purposeful, and reliable.
                From AI-powered hiring platforms to open-source CMS contributions, I care about shipping things that
                actually make a difference.
              </p>
            </motion.div>

            {/* Brief bullets — clean, no fluff */}
            <motion.ul
              variants={fadeUp} custom={3} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}
            >
              {[
                {
                  label: 'Founder',
                  value: <><a href="https://github.com/darshankerkar/Recrify" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none', fontWeight: 500 }}>RECRIFY</a>, an AI-driven recruitment platform</>,
                },
                {
                  label: 'Open Source',
                  value: <>Contributor to <a href="https://github.com/wagtail/wagtail" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none', fontWeight: 500 }}>Wagtail</a>, a Google Summer of Code org</>,
                },
                {
                  label: 'Community',
                  value: <>Technical Team Member at <a href="https://github.com/GDGVITM/" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none', fontWeight: 500 }}>GDG VIT Mumbai</a>, contributing to dev events and workshops</>,
                },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'baseline' }}>
                  <span style={{
                    flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #6c63ff, #93c5fd)',
                    marginTop: '7px',
                  }} />
                  <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                    <strong style={{ color: '#94a3b8', fontWeight: 500 }}>{item.label}:</strong>
                    {' '}{item.value}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* goal.txt block */}
            <motion.div
              variants={fadeUp} custom={4} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid rgba(108,99,255,0.2)',
                borderLeft: '3px solid #6c63ff',
                borderRadius: '12px',
                padding: '20px 24px',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#4a90e2',
                letterSpacing: '0.1em',
                marginBottom: '10px',
                textTransform: 'uppercase',
              }}>
                // goal.txt
              </div>
              <p style={{
                color: '#cbd5e1',
                fontSize: '0.93rem',
                lineHeight: 1.7,
                margin: 0,
                fontStyle: 'italic',
              }}>
                "To engineer products that solve real problems, write clean code,
                contibute to open source, and leave the codebase better than I found it."
              </p>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Responsive: stack on small screens */}
      <style>{`
        @media (max-width: 720px) {
          #about .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #about .container > div:last-child > div:first-child {
            max-width: 280px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
