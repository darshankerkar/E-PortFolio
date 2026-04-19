import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Heart } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' } }),
};

const highlights = [
  { icon: <MapPin size={16} />, label: 'Location',    value: 'Mumbai, India' },
  { icon: <GraduationCap size={16} />, label: 'Education', value: 'B.E. IT — VIT Mumbai' },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3" />
        <path d="M12 19v3" />
        <path d="M2 12h3" />
        <path d="M19 12h3" />
      </svg>
    ),
    label: 'Focus',
    value: 'AI & Backend Systems',
  },
  { icon: <Heart size={16} />, label: 'Passion',    value: 'Open-Source & Dev Communities' },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Crafting Digital<br /><span className="gradient-text">Experiences</span></h2>
          <div className="divider" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px', alignItems: 'start',
        }}>
          {/* Left — Story */}
          <div>
            {[
              `I'm Darshan Kerkar, a full-stack developer and student at Vidyalankar Institute of Technology, Mumbai. I specialize in building scalable web applications and developer-focused systems, with a strong interest in AI-powered platforms and secure backend architectures.`,
              `My journey began with curiosity about how systems work internally — that led me deep into backend engineering, REST APIs, and eventually full-stack development. I actively contribute to open-source and have contributed to Wagtail, a widely used Django CMS and a Google Summer of Code organization.`,
              `I'm currently building Recrify, a recruitment platform automating hiring workflows using intelligent systems. I also contribute to tech communities through GDG and ACM, where I help organize hackathons and developer initiatives.`,
            ].map((para, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '20px', fontSize: '0.97rem' }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Right — Card grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                custom={i + 3}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ x: 6 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  transition: 'border-color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.15)'}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: '10px',
                  background: 'rgba(108,99,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#6c63ff', flexShrink: 0,
                }}>
                  {h.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#475569', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{h.label}</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>{h.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Quick fact */}
            <motion.div
              custom={7}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{
                background: 'linear-gradient(135deg, rgba(108,99,255,0.12), rgba(0,212,255,0.08))',
                border: '1px solid rgba(108,99,255,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                marginTop: '4px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00d4ff', marginBottom: '8px' }}>// goal.txt</div>
              <p style={{ color: '#e2e8f0', fontSize: '0.92rem', lineHeight: 1.6 }}>
                "Become a developer who builds <strong style={{ color: '#6c63ff' }}>impactful systems</strong> while contributing to open-source and developer communities."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
