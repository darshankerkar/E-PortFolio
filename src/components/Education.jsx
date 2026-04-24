import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const courses = [
  'Data Structures & Algorithms',
  'Database Management Systems',
  'Operating Systems',
  'Advanced Java',
  'Computer Networks',
  'Software Engineering',
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' } }),
};

export default function Education() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" ref={ref} style={{ background: 'rgba(15,15,26,0.5)' }}>
      <div className="container">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.73rem',
            color: '#4a90e2',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>04 · Education</p>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            fontWeight: 800,
            color: '#f1f5f9',
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
            margin: 0,
          }}>
            Academic{' '}
            <span style={{
              background: 'linear-gradient(120deg, #93c5fd 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Background</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', alignItems: 'start' }}>

          {/* Main Card */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            whileHover={{ y: -4 }}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(108,99,255,0.2)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'default',
            }}
          >
            {/* Background gradient decoration */}
            <div style={{
              position: 'absolute', top: -60, right: -60,
              width: 200, height: 200, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <div style={{
              width: 56, height: 56, borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(108,99,255,0.25), rgba(0,212,255,0.15))',
              border: '1px solid rgba(108,99,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#6c63ff', marginBottom: '24px',
            }}>
              <GraduationCap size={26} />
            </div>

            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#6c63ff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>B.E. Information Technology</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e2e8f0', lineHeight: 1.3, marginBottom: '8px' }}>
              Vidyalankar Institute<br/>of Technology
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '20px' }}>Mumbai, Maharashtra</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <Calendar size={14} color="#475569" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#475569' }}>2024 – Present</span>
            </div>

            {/* Progress bar decoration */}
            <div style={{ marginTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>Year 1 of 4</span>
                <span style={{ fontSize: '0.75rem', color: '#6c63ff', fontFamily: 'var(--font-mono)' }}>25%</span>
              </div>
              <div style={{ height: 4, background: 'rgba(108,99,255,0.15)', borderRadius: '99px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: '25%' } : { width: 0 }}
                  transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
                  style={{ height: '100%', background: 'linear-gradient(90deg, #6c63ff, #00d4ff)', borderRadius: '99px' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <BookOpen size={16} color="#00d4ff" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#00d4ff', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                Relevant Coursework
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {courses.map((course, i) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 6, borderColor: 'rgba(0,212,255,0.4)' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 16px',
                    cursor: 'default',
                    transition: 'all 0.25s',
                  }}
                >
                  <span style={{ color: '#00d4ff', fontSize: '0.7rem' }}>▹</span>
                  <span style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 500 }}>{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
