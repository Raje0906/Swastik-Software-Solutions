import { Calendar, Award, FileText, Laptop, Users, ArrowRight } from 'lucide-react'

const highlights = [
    { icon: <Calendar size={22} color="var(--accent)" />, text: 'Duration Options: 1 / 2 / 3 / 6 Months' },
    { icon: <Award size={22} color="var(--accent)" />, text: 'Certificate of Completion' },
    { icon: <FileText size={22} color="var(--accent)" />, text: 'Letter of Recommendation' },
    { icon: <Laptop size={22} color="var(--accent)" />, text: 'Live Project Experience' },
    { icon: <Users size={22} color="var(--accent)" />, text: 'Mentorship from Industry Experts' },
]

const steps = [
    { num: '01', title: 'Apply Online', desc: 'Fill in our quick application form with your details and domain preference.' },
    { num: '02', title: 'Orientation & Onboarding', desc: 'Attend the kick-off session, meet your mentor, and get your project brief.' },
    { num: '03', title: 'Work on Live Projects', desc: 'Collaborate with mentors on real client projects using industry tools.' },
    { num: '04', title: 'Certificate & Recommendation', desc: 'Graduate with a certificate plus a personalised letter of recommendation.' },
]

const domains = [
    'Web Development', 'Android Development', 'Data Science', 'AI / Machine Learning', 'Cybersecurity', 'Business Analysis'
]

export default function Internship() {
    const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section id="internship" className="section section-alt">
            <div className="container">
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">Internship Program</span>
                    <h2 className="section-heading">Real Experience. Real Impact.</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub" style={{ maxWidth: 620 }}>
                        Our structured internship programs go beyond observation — you build, ship, and present real products alongside industry professionals, making your resume stand out from day one.
                    </p>
                </div>

                {/* Highlights */}
                <div data-aos="fade-up" data-aos-delay="100" style={{
                    display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 64,
                }}>
                    {highlights.map(h => (
                        <div key={h.text} style={{
                            display: 'flex', alignItems: 'center', gap: 12,
                            background: '#fff', borderRadius: 12, padding: '14px 22px',
                            boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)',
                        }}>
                            {h.icon}
                            <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-dark)' }}>{h.text}</span>
                        </div>
                    ))}
                </div>

                {/* How It Works */}
                <h3 style={{ textAlign: 'center', marginBottom: 40, color: 'var(--primary)' }} data-aos="fade-up">How It Works</h3>
                <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative', marginBottom: 64 }} data-aos="fade-up" data-aos-delay="120">
                    {/* Connector line */}
                    <div className="steps-line" style={{
                        position: 'absolute', top: 32, left: '12.5%', right: '12.5%', height: 2,
                        background: 'linear-gradient(to right, var(--accent), var(--primary))',
                        zIndex: 0,
                    }} />
                    {steps.map((s, i) => (
                        <div key={s.num} style={{ textAlign: 'center', padding: '0 16px', position: 'relative', zIndex: 1 }}>
                            <div style={{
                                width: 64, height: 64, borderRadius: '50%',
                                background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                                color: i % 2 === 0 ? '#fff' : 'var(--primary)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 20px',
                                fontWeight: 800, fontSize: '1.1rem', fontFamily: 'Poppins,sans-serif',
                                border: '4px solid #fff',
                                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                            }}>{s.num}</div>
                            <h4 style={{ color: 'var(--primary)', fontSize: '1rem', marginBottom: 8 }}>{s.title}</h4>
                            <p style={{ fontSize: '0.83rem', lineHeight: 1.65 }}>{s.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Available Domains */}
                <div data-aos="fade-up" style={{ background: 'var(--primary)', borderRadius: 20, padding: '40px', marginBottom: 40 }}>
                    <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: 24 }}>Available Domains</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                        {domains.map(d => (
                            <span key={d} style={{
                                background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
                                borderRadius: 50, padding: '8px 22px',
                                color: 'var(--accent)', fontSize: '0.88rem', fontWeight: 600,
                            }}>{d}</span>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center' }} data-aos="fade-up">
                    <button className="btn btn-primary" onClick={scrollToContact} style={{ fontSize: '1rem', padding: '16px 36px' }}>
                        Apply for Internship <ArrowRight size={18} />
                    </button>
                </div>
            </div>


        </section>
    )
}
