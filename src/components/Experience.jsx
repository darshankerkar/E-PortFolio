import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    id: 'recrify',
    role: 'Founder',
    company: 'Recrify',
    link: 'https://recrify.co/',
    period: 'Dec 2025 — Present',
    tag: 'Startup',
    bullets: [
      'Building a scalable recruitment platform focused on automating hiring workflows.',
      'Leading product architecture, backend systems, and deployment strategy.',
      'Developing intelligent systems for resume analysis and candidate evaluation.',
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'gdg',
    role: 'Technical Team Member',
    company: 'GDG VIT Mumbai',
    link: 'https://github.com/GDGVITM/',
    period: 'Sept 2025 — Present',
    tag: 'Community',
    bullets: [
      'Contributing to large-scale hackathons, workshops, and developer events.',
      'Supporting technical documentation and community-driven learning initiatives.',
      'Collaborating with teams to grow the local developer ecosystem.',
    ],
    skills: ['Community', 'Event Management', 'Open Source'],
  },
  {
    id: 'wagtail',
    role: 'Open-Source Contributor',
    company: 'Wagtail · GSoC',
    link: 'https://github.com/wagtail/wagtail',
    period: 'Ongoing',
    tag: 'Open Source',
    bullets: [
      'Contributed to a widely used Django CMS under the Google Summer of Code org.',
      'Improved documentation and streamlined the developer onboarding experience.',
      'Collaborated with maintainers through PR reviews and iterative improvements.',
    ],
    skills: ['Python', 'Django', 'Git', 'Technical Writing'],
  },
];

/*
  U-shape stagger matching the sketch:
  - Left  (Recrify)  → sits highest
  - Center (GDG)     → sits lower
  - Right (Wagtail)  → sits highest
*/
const offsets  = ['0px', '130px', '0px'];
const colSpans = ['1', '1', '1']; // all equal width in 3-col grid

const cardIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.16, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const ref = useRef(null);

  return (
    <section
      id="experience"
      ref={ref}
      style={{ padding: '100px 0 80px', background: 'transparent' }}
    >
      <div className="container" style={{ maxWidth: '1120px' }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ marginBottom: '72px' }}
        >
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.73rem',
            color: '#4a90e2',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            03 · Experience
          </p>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            margin: 0,
          }}>
            Where I've{' '}
            <span style={{
              background: 'linear-gradient(120deg, #93c5fd 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Contributed
            </span>
          </h2>
        </motion.div>

        {/* ── 3-column staggered grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          alignItems: 'start',
        }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              custom={i}
              variants={cardIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              style={{ marginTop: offsets[i] }}
            >
              <ExperienceCard exp={exp} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <a
      href={exp.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.018 }}
        transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        style={{
          position: 'relative',
          borderRadius: '20px',
          padding: '32px 28px 28px',
          background: 'rgba(12, 16, 32, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Top shimmer */}
        <div style={{
          position: 'absolute', top: 0, left: '15%', right: '15%', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(147,197,253,0.5), transparent)',
        }} />

        {/* Tag pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '4px 12px', borderRadius: '100px',
          background: 'rgba(147, 197, 253, 0.1)',
          border: '1px solid rgba(147, 197, 253, 0.22)',
          marginBottom: '20px',
        }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#93c5fd',
            boxShadow: '0 0 8px rgba(147,197,253,1)',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.67rem',
            color: '#93c5fd', letterSpacing: '0.1em', textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            {exp.tag}
          </span>
        </div>

        {/* Role + arrow */}
        <div style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '8px', marginBottom: '4px',
        }}>
          <h3 style={{
            fontSize: '1.15rem', fontWeight: 700,
            color: '#f0f4ff',
            letterSpacing: '-0.015em', lineHeight: 1.25, margin: 0,
          }}>
            {exp.role}
          </h3>
          <ArrowUpRight size={15} style={{ color: '#4a90e2', flexShrink: 0, marginTop: '3px' }} />
        </div>

        {/* Company */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.8rem',
          color: '#60a5fa', marginBottom: '3px', letterSpacing: '0.02em', fontWeight: 500,
        }}>
          {exp.company}
        </p>

        {/* Period */}
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          color: '#64748b', marginBottom: '22px', letterSpacing: '0.04em',
        }}>
          {exp.period}
        </p>

        {/* Hairline */}
        <div style={{
          width: '100%', height: '1px',
          background: 'rgba(255,255,255,0.07)', marginBottom: '18px',
        }} />

        {/* Bullets */}
        <ul style={{
          listStyle: 'none', padding: 0,
          margin: '0 0 22px', display: 'flex', flexDirection: 'column', gap: '10px',
        }}>
          {exp.bullets.map((b, j) => (
            <li key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <span style={{
                flexShrink: 0, marginTop: '8px',
                width: '4px', height: '4px', borderRadius: '50%',
                background: '#60a5fa', opacity: 0.7,
              }} />
              <span style={{ fontSize: '0.875rem', color: '#c8d6e8', lineHeight: 1.65 }}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Skill chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {exp.skills.map((skill, j) => (
            <span key={j} style={{
              padding: '4px 12px', fontSize: '0.69rem',
              fontFamily: 'var(--font-mono)',
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '5px', letterSpacing: '0.03em',
            }}>
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </a>
  );
}
