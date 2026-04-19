import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role:    'Founder',
    company: 'Recrify',
    link:    'https://recrify.co/',
    period:  'Dec 2025 – Present',
    color:   '#6c63ff',
    badge:   'badge-violet',
    bullets: [
      'Building a scalable recruitment platform focused on automating hiring workflows.',
      'Leading product architecture, backend systems, and deployment strategy.',
      'Developing intelligent systems for resume analysis and candidate evaluation.',
    ],
  },
  {
    role:    'Technical Team Member',
    company: 'GDG VIT Mumbai',
    link:    'https://github.com/GDGVITM/',
    period:  'Sept 2025 – Present',
    color:   '#00d4ff',
    badge:   'badge-cyan',
    bullets: [
      'Contributing to large-scale hackathons, workshops, and developer events.',
      'Supporting technical documentation and community-driven learning initiatives.',
      'Collaborating with teams to grow the local developer ecosystem.',
    ],
  },
  {
    role:    'Technical Team Member',
    company: 'ACM Student Chapter',
    link:    'https://www.linkedin.com/company/association-of-computing-machinery-vit-mumbai/posts/?feedView=all',
    period:  'Oct 2024 – Present',
    color:   '#00e5a0',
    badge:   'badge-emerald',
    bullets: [
      'Building internal tools and supporting technical initiatives.',
      'Assisting in organizing technical events and promoting competitive programming.',
    ],
  },
  {
    role:    'Open-Source Contributor',
    company: 'Wagtail (GSoC Org)',
    link:    'https://github.com/wagtail/wagtail',
    period:  'Ongoing',
    color:   '#ff6b6b',
    badge:   'badge-coral',
    bullets: [
      'Contributed to a widely used Django CMS (GSoC organization).',
      'Improved documentation and developer onboarding experience.',
      'Collaborated with maintainers through PR reviews and iterative improvements.',
    ],
  },
];

const fadeUp = {
  hidden:   { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.13, duration: 0.5, ease: 'easeOut' } }),
};

export default function Experience() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="container">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px' }}>
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've <span className="gradient-text">Contributed</span></h2>
          <div className="divider" />
          <p className="section-subtitle">From founding startups to contributing open-source and building communities.</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ display: 'flex', gap: '28px', paddingBottom: i < experiences.length - 1 ? '8px' : '0' }}
            >
              {/* Timeline column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 + i * 0.13, type: 'spring', stiffness: 300 }}
                  style={{
                    width: 14, height: 14, borderRadius: '50%',
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}80`,
                    flexShrink: 0, marginTop: 24,
                  }}
                />
                {i < experiences.length - 1 && (
                  <div style={{
                    width: 2, flex: 1, minHeight: 40,
                    background: `linear-gradient(to bottom, ${exp.color}60, transparent)`,
                    marginTop: 6,
                  }} />
                )}
              </div>

              {/* Card */}
              <motion.div
                className="card"
                whileHover={{ x: 6, borderColor: exp.color + '60' }}
                style={{ flex: 1, marginBottom: 20, cursor: 'default' }}
              >
                {/* Accent bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0, width: 3,
                  background: exp.color, borderRadius: '20px 0 0 20px',
                }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '4px' }}>{exp.role}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <Briefcase size={13} color={exp.color} />
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 6,
                            fontSize: '0.88rem',
                            fontWeight: 600,
                            color: exp.color,
                            textDecoration: 'none',
                          }}
                        >
                          {exp.company}
                          <ExternalLink size={12} color={exp.color} />
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: exp.color }}>{exp.company}</span>
                      )}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Calendar size={13} color="#475569" />
                    <span style={{ fontSize: '0.78rem', color: '#475569', fontFamily: 'var(--font-mono)' }}>{exp.period}</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span style={{ color: exp.color, flexShrink: 0, marginTop: '3px', fontSize: '0.7rem' }}>▹</span>
                      <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
