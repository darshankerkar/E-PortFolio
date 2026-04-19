import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' } }),
};

const contactInfo = [
  { icon: <Mail size={18} />,    label: 'Email',    value: 'darshankerkar09@gmail.com', href: 'mailto:darshankerkar09@gmail.com', color: '#6c63ff' },
  { icon: <Phone size={18} />,   label: 'Phone',    value: '+91 7208128814',             href: 'tel:+917208128814',             color: '#00d4ff' },
  { icon: <MapPin size={18} />,  label: 'Location', value: 'Mumbai, India',              href: null,                            color: '#00e5a0' },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/darshankerkar',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    color: '#e2e8f0',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/darshan-kerkar-4a237a325/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0077b5',
  },
  {
    label: 'Devpost',
    href: 'https://devpost.com/darshankerkar09/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h8a7 7 0 1 1 0 14H5z" />
        <path d="M9 8h4a3 3 0 1 1 0 6H9z" />
      </svg>
    ),
    color: '#0083cf',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/darshankerkar/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.8 4.9 8.2 11.5l6.6 6.6" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m15.3 5.3 3.1 3.1" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.7 11.9h8.4" stroke="#ffffff" strokeWidth="3.1" strokeLinecap="round" />
      </svg>
    ),
    color: '#ffffff',
  },
  {
    label: 'X',
    href: 'https://x.com/darshankerkar05',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2.25h3.68l-8.04 9.2 9.46 12.3h-7.4l-5.8-7.55-6.6 7.55H0.5l8.59-9.82L0 2.25h7.57l5.24 6.87 6.09-6.87Zm-1.29 19.34h2.04L7.46 4.35H5.28l12.33 17.24Z" />
      </svg>
    ),
    color: '#94a3b8',
  },
];

export default function Contact() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors]   = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())                  e.name    = 'Name is required';
    if (!form.email.trim())                 e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim())               e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }, 1400);
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? '#ff6b6b55' : 'rgba(108,99,255,0.2)'}`,
    borderRadius: '10px',
    padding: '13px 16px',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.25s',
    resize: 'vertical',
  });

  return (
    <section id="contact" ref={ref}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ marginBottom: '64px', textAlign: 'center' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Contact</span>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Let's <span className="gradient-text">Work Together</span></h2>
          <div className="divider" style={{ margin: '0 auto 24px' }} />
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Open to internships, collaborations, and exciting opportunities. Drop a message!
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

          {/* Left: Contact info */}
          <motion.div custom={1} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {contactInfo.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 20px',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '12px',
                  background: `${c.color}15`, border: `1px solid ${c.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: c.color, flexShrink: 0,
                }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#475569', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ fontSize: '0.9rem', color: '#e2e8f0', textDecoration: 'none', fontWeight: 500 }}>{c.value}</a>
                    : <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>{c.value}</span>
                  }
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              style={{ display: 'flex', gap: '12px', marginTop: '8px' }}
            >
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    width: 48, height: 48, borderRadius: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    color: '#64748b',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '50'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.15)'; }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div custom={2} variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-xl)',
              padding: '32px',
            }}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 0' }}
                >
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}
                  >
                    <CheckCircle size={52} color="#00e5a0" />
                  </motion.div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '8px' }}>Message Sent</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>I'll get back to you as soon as possible.</p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-outline"
                    onClick={() => setSent(false)}
                    style={{ marginTop: '24px' }}
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      placeholder="Darshan Kerkar"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                      onBlur={e => e.target.style.borderColor = errors.name ? '#ff6b6b55' : 'rgba(108,99,255,0.2)'}
                      style={inputStyle('name')}
                    />
                    {errors.name && <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '4px', display: 'block' }}>{errors.name}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      placeholder="hello@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                      onBlur={e => e.target.style.borderColor = errors.email ? '#ff6b6b55' : 'rgba(108,99,255,0.2)'}
                      style={inputStyle('email')}
                    />
                    {errors.email && <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginBottom: '6px', fontWeight: 500 }}>Message</label>
                    <textarea
                      id="contact-message"
                      rows="5"
                      placeholder="Hi Darshan, I'd love to collaborate on..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
                      onBlur={e => e.target.style.borderColor = errors.message ? '#ff6b6b55' : 'rgba(108,99,255,0.2)'}
                      style={{ ...inputStyle('message'), minHeight: 120 }}
                    />
                    {errors.message && <span style={{ fontSize: '0.75rem', color: '#ff6b6b', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
                  </div>
                  <motion.button
                    type="submit"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                          style={{ width: 16, height: 16, border: '2px solid #fff3', borderTop: '2px solid #fff', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <><Send size={16} /> Send Message</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
