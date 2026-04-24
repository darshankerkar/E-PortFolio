import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Recrify',
    desc: 'Recruitment platform automating hiring workflows using intelligent systems for resume analysis.',
    bullets: [
      'Engineered an intelligent resume parsing engine',
      'Automated multi-stage interview scheduling',
      'Boosted candidate screening efficiency by 40%'
    ],
    image: '/recrify.png',
    live: 'https://recrify.co/',
    category: 'Live Product',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AI/ML'],
    accent: '#10b981',
    accentAlt: '#34d399',
  },
  {
    title: 'AuthValidator',
    desc: 'Modular system to test and validate authentication mechanisms with secure API design.',
    bullets: [
      'Developed modular JWT validation endpoints',
      'Integrated OAuth2.0 flows for third-party access',
      'Streamlined endpoint security testing protocols'
    ],
    image: '/authv.png',
    live: 'https://auth-validator.vercel.app/',
    category: 'SIH Project',
    tech: ['Node.js', 'JWT', 'REST API', 'Security'],
    accent: '#6366f1',
    accentAlt: '#8b5cf6',
  },
  {
    title: 'V-Library',
    desc: 'Centralized system for managing digital library resources with advanced search.',
    bullets: [
      'Implemented real-time search with fuzzy matching',
      'Designed responsive UI for cross-device access',
      'Configured RBAC for admin and user workflows'
    ],
    image: '/library.png',
    live: 'https://v-library-new.vercel.app/',
    category: 'Web App',
    tech: ['React', 'Firebase', 'Search', 'UI/UX'],
    accent: '#0ea5e9',
    accentAlt: '#06b6d4',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: 'easeOut' } }),
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" ref={ref}>
      <div className="container">
        {/* ── Header ── */}
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.73rem', color: '#4a90e2',
            letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '14px',
          }}>04 · Projects</p>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 800, color: '#f1f5f9',
            letterSpacing: '-0.03em', lineHeight: 1.08, margin: '0 0 16px',
          }}>
            Things I've{' '}
            <span style={{
              background: 'linear-gradient(120deg, #93c5fd 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>Built</span>
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.7, maxWidth: '560px' }}>
            Real-world platforms focused on scalability, performance, and practical impact.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {projects.map((p, i) => {
            const isHov = hovered === i;
            return (
              <motion.div
                key={p.title}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  minHeight: '340px',
                  cursor: 'pointer',
                  border: isHov
                    ? `1px solid ${p.accent}55`
                    : '1px solid rgba(255,255,255,0.08)',
                  transition: 'border-color 0.35s ease',
                }}
              >
                {/* ── Default BG: gradient blobs + grid ── */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `
                    radial-gradient(ellipse at 15% 15%, ${p.accent}28 0%, transparent 50%),
                    radial-gradient(ellipse at 85% 85%, ${p.accentAlt}20 0%, transparent 50%),
                    linear-gradient(145deg, rgba(12,16,32,0.97) 0%, rgba(6,8,20,0.99) 100%)
                  `,
                  transition: 'opacity 0.4s ease',
                  opacity: isHov ? 0 : 1,
                  zIndex: 0,
                }} />

                {/* Subtle grid on default */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 0,
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: '36px 36px',
                  opacity: isHov ? 0 : 1,
                  transition: 'opacity 0.4s ease',
                }} />

                {/* ── Hover BG: screenshot ── */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 1,
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                  opacity: isHov ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }} />

                {/* Dark overlay on screenshot so button is readable */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 2,
                  background: 'linear-gradient(to top, rgba(4,6,18,0.92) 0%, rgba(4,6,18,0.45) 55%, rgba(4,6,18,0.1) 100%)',
                  opacity: isHov ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                }} />

                {/* ── DEFAULT CONTENT (visible when not hovered) ── */}
                <div style={{
                  position: 'absolute', inset: 0, zIndex: 3,
                  display: 'flex', flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '28px',
                  opacity: isHov ? 0 : 1,
                  transition: 'opacity 0.25s ease',
                  pointerEvents: isHov ? 'none' : 'auto',
                }}>
                  {/* Top Bar: Category badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '4px 12px', borderRadius: '100px',
                      background: `${p.accent}14`,
                      border: `1px solid ${p.accent}30`,
                      fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                      color: p.accent, letterSpacing: '0.08em', fontWeight: 600,
                      textTransform: 'uppercase',
                    }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%',
                        background: p.accent, boxShadow: `0 0 6px ${p.accent}`,
                        flexShrink: 0,
                      }} />
                      {p.category}
                    </span>
                  </div>

                  {/* Middle Content: Title, Desc, Bullets */}
                  <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{
                      fontSize: '1.45rem', fontWeight: 800,
                      color: '#f0f4ff', letterSpacing: '-0.02em',
                      marginBottom: '10px', lineHeight: 1.2,
                    }}>{p.title}</h3>

                    <p style={{
                      fontSize: '0.875rem', color: '#94a3b8',
                      lineHeight: 1.65, marginBottom: '12px',
                    }}>{p.desc}</p>

                    <ul style={{
                      listStyle: 'none', padding: 0, margin: '0 0 20px',
                      display: 'flex', flexDirection: 'column', gap: '6px'
                    }}>
                      {p.bullets && p.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                          <span style={{
                            flexShrink: 0, marginTop: '7px',
                            width: '3.5px', height: '3.5px', borderRadius: '50%',
                            background: p.accent, opacity: 0.8,
                          }} />
                          <span style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Content: Tech */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {p.tech.map((t, j) => (
                        <span key={j} style={{
                          padding: '3px 10px', fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)',
                          color: p.accent,
                          background: `${p.accent}12`,
                          border: `1px solid ${p.accent}28`,
                          borderRadius: '4px',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── HOVER CONTENT: only View Project button ── */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 4,
                  padding: '28px',
                  opacity: isHov ? 1 : 0,
                  transform: isHov ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease',
                  pointerEvents: isHov ? 'auto' : 'none',
                }}>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '8px',
                      padding: '12px 24px',
                      background: `linear-gradient(135deg, ${p.accent}, ${p.accentAlt})`,
                      borderRadius: '10px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      fontSize: '0.85rem', fontWeight: 700,
                      letterSpacing: '0.04em',
                      boxShadow: `0 6px 24px ${p.accent}55`,
                    }}
                  >
                    <ExternalLink size={14} />
                    View Project
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
