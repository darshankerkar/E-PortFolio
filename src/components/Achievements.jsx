import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Star, Award } from 'lucide-react';

const achievements = [
  {
    icon:   <Medal size={22} />,
    title:  'Runner-Up – TechSprint Hackathon',
    org:    'GDG VIT Mumbai',
    color:  '#c0c0c0',
    desc:   'Secured 2nd place in a competitive hackathon organized by GDG VIT Mumbai with an innovative full-stack solution.',
    badge:  '🥈',
  },
  {
    icon:   <Trophy size={22} />,
    title:  'Winner – Brainiacs Pitching Contest',
    org:    'Team Lead',
    color:  '#FFD700',
    desc:   'Won as team lead for a hardware + software integration project, outperforming multiple competing teams.',
    badge:  '🥇',
  },
  {
    icon:   <Star size={22} />,
    title:  'Open Source Contributor',
    org:    'Wagtail (GSoC Organization)',
    color:  '#00e5a0',
    desc:   'Contributed to a production-grade Django CMS used globally, improving developer documentation and experience.',
    badge:  '🌍',
  },
  {
    icon:   <Award size={22} />,
    title:  'Top 1% – NPTEL Java',
    org:    'IIT Nationwide',
    color:  '#6c63ff',
    desc:   'Scored 91% in NPTEL Programming in Java, placing in the top 1% among all participants nationwide in India.',
    badge:  '🎓',
  },
];

const certifications = [
  {
    title:  'React Developer',
    issuer: 'HackerRank',
    date:   'July 2025',
    id:     '029B6BEE3B75',
    color:  '#00e5a0',
  },
  {
    title:  'Programming in Java',
    issuer: 'NPTEL',
    date:   'May 2025',
    id:     '91% · Top 1%',
    color:  '#6c63ff',
  },
  {
    title:  'Python Mega Course',
    issuer: 'Udemy',
    date:   '2025',
    id:     '20 Real-World Apps & AI',
    color:  '#ff9b6b',
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' } }),
};

export default function Achievements() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" ref={ref}>
      <div className="container">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px' }}>
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Wins & <span className="gradient-text">Recognition</span></h2>
          <div className="divider" />
        </motion.div>

        {/* Achievements Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              custom={i + 1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                background: 'var(--bg-card)',
                border: `1px solid ${a.color}25`,
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                position: 'relative', overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Glow bg */}
              <div style={{
                position: 'absolute', top: -40, right: -40,
                width: 120, height: 120, borderRadius: '50%',
                background: a.color, opacity: 0.06, filter: 'blur(30px)',
              }} />

              {/* Badge emoji */}
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{a.badge}</div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: a.color }}>
                {a.icon}
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{a.org}</span>
              </div>

              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '10px', lineHeight: 1.4 }}>{a.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div custom={5} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span className="section-label" style={{ margin: 0 }}>Certifications</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {certifications.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i + 6}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: '12px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  cursor: 'default',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c.color + '50'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.15)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: 8, height: 32, borderRadius: '4px',
                    background: `linear-gradient(to bottom, ${c.color}, ${c.color}60)`,
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0' }}>{c.title}</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '2px' }}>{c.issuer}</div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.78rem', color: c.color, fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '2px' }}>{c.id}</div>
                  <div style={{ fontSize: '0.75rem', color: '#475569' }}>{c.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
