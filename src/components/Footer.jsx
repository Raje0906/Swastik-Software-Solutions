import { Linkedin, ArrowUp } from 'lucide-react'

const quickLinks = ['Home', 'About', 'Courses', 'Internships', 'Testimonials', 'Contact']
const programs = ['Full Stack Dev', 'Python & Data Science', 'AI & ML', 'Cybersecurity', 'Cloud Computing', 'UI/UX Design']

export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const scrollTo = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

    return (
        <footer style={{ background: 'var(--primary)', color: 'rgba(255,255,255,0.8)' }} role="contentinfo">
            <div className="container" style={{ paddingTop: 64, paddingBottom: 40 }}>
                {/* 4-column grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                            <img src="/logo.png" alt="Swastik Logo" style={{ width: 44, height: 44, objectFit: 'contain' }} />
                            <div>
                                <div style={{ fontWeight: 700, color: '#fff', fontFamily: 'Poppins,sans-serif' }}>Swastik</div>
                                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Software Solutions</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '0.875rem', lineHeight: 1.75, marginBottom: 20, color: 'rgba(255,255,255,0.6)', maxWidth: 280 }}>
                            Bridging the gap between academic learning and industry requirements — one career at a time.
                        </p>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {[
                                { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/company/swatik-software-solutions', label: 'LinkedIn' },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                                    style={{
                                        width: 38, height: 38, borderRadius: 10,
                                        background: 'rgba(255,255,255,0.08)', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        color: 'rgba(255,255,255,0.7)', transition: 'all 0.25s',
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = 'var(--primary)' }}
                                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
                                >{s.icon}</a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 20, fontFamily: 'Poppins,sans-serif' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {quickLinks.map(l => (
                                <li key={l}>
                                    <button
                                        onClick={() => scrollTo(l === 'Internships' ? 'internship' : l)}
                                        style={{
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem',
                                            padding: 0, fontFamily: 'inherit', transition: 'color 0.2s',
                                        }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                                    >{l}</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 20, fontFamily: 'Poppins,sans-serif' }}>Programs</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {programs.map(p => (
                                <li key={p} style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem' }}>{p}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '0.95rem', marginBottom: 20, fontFamily: 'Poppins,sans-serif' }}>Contact</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {[
                                { label: '✉️ Email', val: 'info@swastiksoftware.in' },
                            ].map(c => (
                                <div key={c.label}>
                                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginBottom: 2 }}>{c.label}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>{c.val}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: 24,
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 12,
                }}>
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                        © 2025 Swastik Software Solutions. All Rights Reserved.
                    </span>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {['Privacy Policy', 'Terms of Use'].map(l => (
                            <a key={l} href="#" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                            >{l}</a>
                        ))}
                    </div>
                    {/* Scroll to top */}
                    <button onClick={scrollTop} aria-label="Scroll to top"
                        style={{
                            width: 38, height: 38, borderRadius: 10,
                            background: 'var(--accent)', border: 'none', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--primary)', transition: 'background 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f0c96b'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
                    ><ArrowUp size={18} /></button>
                </div>
            </div>


        </footer>
    )
}
