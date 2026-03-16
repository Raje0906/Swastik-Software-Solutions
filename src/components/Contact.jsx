import { Mail } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">Get in Touch</span>
                    <h2 className="section-heading">Contact Information</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub">Have questions? Reach out to us via email.</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div data-aos="fade-up" data-aos-delay="100" style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12,
                        background: '#fff', borderRadius: 20, padding: '30px 24px', width: '100%', maxWidth: '380px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.06)', border: '1px solid var(--border)',
                    }}>
                        <div style={{
                            width: 60, height: 60, borderRadius: 16, flexShrink: 0,
                            background: 'rgba(201,168,76,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <Mail size={28} color="var(--accent)" />
                        </div>
                        <div>
                            <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--primary)', marginBottom: 8 }}>Email Us</div>
                            <a href="mailto:info@swastiksoftware.in" style={{ 
                                color: 'var(--text-secondary)', fontSize: '1rem', textDecoration: 'none', 
                                transition: 'color 0.2s', fontWeight: 500 
                            }} 
                            onMouseEnter={e => e.target.style.color = 'var(--accent)'} 
                            onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                                info@swastiksoftware.in
                            </a>
                            <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                We typically reply within 24 hours. Drop us a line for any inquiries!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
