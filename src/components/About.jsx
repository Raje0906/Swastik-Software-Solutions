import { Users, Briefcase, Award, HeartHandshake } from 'lucide-react'

const differentiators = [
    {
        icon: <Users size={28} color="var(--accent)" />,
        title: 'Industry Mentors',
        desc: 'Learn from professionals with 5+ years of hands-on corporate experience across top tech companies.',
    },
    {
        icon: <Briefcase size={28} color="var(--accent)" />,
        title: 'Live Projects',
        desc: 'Work on real-world client projects — not toy examples — giving you a portfolio employers actually value.',
    },
    {
        icon: <Award size={28} color="var(--accent)" />,
        title: 'Certificate of Completion',
        desc: 'Earn an industry-recognized certificate upon successful course completion, accepted by 30+ hiring partners.',
    },
    {
        icon: <HeartHandshake size={28} color="var(--accent)" />,
        title: 'Placement Assistance',
        desc: 'End-to-end career support — resume review, LinkedIn optimization, mock interviews, and job referrals.',
    },
]

export default function About() {
    return (
        <section id="about" className="section section-alt">
            <div className="container">
                {/* Two-column layout */}
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', marginBottom: 72 }}>
                    {/* Left text */}
                    <div data-aos="fade-right">
                        <span className="section-label">Who We Are</span>
                        <h2 className="section-heading">Bridging Academia &amp; Industry Since Day One</h2>
                        <div className="accent-line-left" style={{ marginBottom: 24 }} />
                        <p style={{ marginBottom: 16, fontSize: '1rem' }}>
                            Swastik Software Solutions is a technology-focused training and internship organization dedicated to transforming how students and professionals acquire industry skills.
                        </p>
                        <p style={{ marginBottom: 16, fontSize: '1rem' }}>
                            Founded with a clear mission — to eliminate the gap between what universities teach and what companies actually need — we design every program around real-world outcomes. Our trainers are working professionals who bring current, relevant expertise into every session.
                        </p>
                        <p style={{ fontSize: '1rem' }}>
                            Our vision is to become India's most trusted ed-tech training partner, empowering every learner with the knowledge, confidence, and portfolio they need to thrive in the modern technology industry.
                        </p>
                        <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
                            {[['5+', 'Years of Excellence'], ['500+', 'Careers Launched'], ['4.8/5', 'Average Rating']].map(([v, l]) => (
                                <div key={l} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--primary)', fontFamily: 'Poppins,sans-serif' }}>{v}</div>
                                    <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{l}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right image / visual */}
                    <div data-aos="fade-left" style={{ position: 'relative' }}>
                        <div style={{
                            borderRadius: 24,
                            overflow: 'hidden',
                            background: 'linear-gradient(135deg, var(--primary) 0%, #1e4a72 100%)',
                            padding: 40,
                            minHeight: 400,
                            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                            position: 'relative',
                        }}>
                            {/* Abstract decoration */}
                            <div style={{ fontSize: 80, marginBottom: 24, opacity: 0.9 }}>🏆</div>
                            <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: 12, fontSize: '1.4rem' }}>Our Mission</h3>
                            <p style={{ color: 'rgba(255,255,255,0.72)', textAlign: 'center', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                To equip every learner with industry-aligned skills, real-world experience, and the confidence to excel in their professional journey.
                            </p>
                            <div style={{
                                marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center',
                            }}>
                                {['Hands-On Learning', 'Expert Guidance', 'Career Support'].map(tag => (
                                    <span key={tag} style={{
                                        background: 'rgba(201,168,76,0.2)', border: '1px solid rgba(201,168,76,0.4)',
                                        borderRadius: 50, padding: '6px 16px',
                                        color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600,
                                    }}>{tag}</span>
                                ))}
                            </div>
                            {/* Glow */}
                            <div style={{
                                position: 'absolute', bottom: -40, right: -40, width: 200, height: 200,
                                borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.2) 0%, transparent 70%)',
                                pointerEvents: 'none',
                            }} />
                        </div>
                    </div>
                </div>

                {/* Differentiator cards */}
                <div className="grid-4" data-aos="fade-up">
                    {differentiators.map((d, i) => (
                        <div key={d.title} className="card" data-aos="fade-up" data-aos-delay={i * 80} style={{ padding: 28, borderTop: '4px solid var(--accent)' }}>
                            <div style={{
                                width: 56, height: 56, borderRadius: 14,
                                background: 'rgba(201,168,76,0.1)', display: 'flex',
                                alignItems: 'center', justifyContent: 'center', marginBottom: 16,
                            }}>
                                {d.icon}
                            </div>
                            <h3 style={{ marginBottom: 8, fontSize: '1.05rem' }}>{d.title}</h3>
                            <p style={{ fontSize: '0.88rem', lineHeight: 1.65 }}>{d.desc}</p>
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}
