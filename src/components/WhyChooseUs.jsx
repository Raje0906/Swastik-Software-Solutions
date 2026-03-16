import { useRef } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { UserCheck, Layers, Clock3, BadgeCheck, Rocket, Wallet } from 'lucide-react'

const features = [
    { icon: <UserCheck size={28} color="var(--accent)" />, title: 'Industry-Expert Mentors', desc: 'Trainers with 5+ years of corporate experience from leading tech companies, teaching what actually matters.' },
    { icon: <Layers size={28} color="var(--accent)" />, title: 'Hands-on Learning', desc: 'Real-world projects, not just theory. Build a portfolio of work that impresses recruiters.' },
    { icon: <Clock3 size={28} color="var(--accent)" />, title: 'Flexible Schedules', desc: 'Weekday and weekend batches available so you can learn without disrupting your existing commitments.' },
    { icon: <BadgeCheck size={28} color="var(--accent)" />, title: 'Recognized Certificates', desc: 'Our certificates are acknowledged and accepted by 30+ hiring partners across India.' },
    { icon: <Rocket size={28} color="var(--accent)" />, title: 'Placement Assistance', desc: 'End-to-end career support: resume reviews, LinkedIn optimization, mock interviews, and job referrals.' },
    { icon: <Wallet size={28} color="var(--accent)" />, title: 'Affordable Pricing', desc: 'Competitive fees with flexible EMI payment options so finances never become a barrier to learning.' },
]

const statsData = [
    { end: 500, suffix: '+', label: 'Students Trained' },
    { end: 20, suffix: '+', label: 'Courses Offered' },
    { end: 4.8, suffix: '/5', label: 'Average Rating', decimals: 1 },
    { end: 30, suffix: '+', label: 'Hiring Partners' },
]

function StatBlock({ end, suffix, label, decimals }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })
    return (
        <div ref={ref} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', fontFamily: 'Poppins,sans-serif', lineHeight: 1 }}>
                {inView ? <CountUp end={end} duration={2.5} decimals={decimals || 0} suffix={suffix} /> : `0${suffix}`}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', marginTop: 6, fontWeight: 500 }}>{label}</div>
        </div>
    )
}

export default function WhyChooseUs() {
    return (
        <section id="why" className="section">
            <div className="container">
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">Why Us</span>
                    <h2 className="section-heading">Why Students Choose Swastik</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub">Everything designed around one goal — making you career-ready, faster.</p>
                </div>

                {/* 3x2 Feature Grid */}
                <div className="grid-3" style={{ marginBottom: 72 }}>
                    {features.map((f, i) => (
                        <div key={f.title} className="card" data-aos="fade-up" data-aos-delay={i * 80} style={{ padding: 28 }}>
                            <div style={{
                                width: 60, height: 60, borderRadius: 16,
                                background: 'rgba(201,168,76,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 18,
                            }}>{f.icon}</div>
                            <h3 style={{ fontSize: '1.05rem', marginBottom: 10 }}>{f.title}</h3>
                            <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>{f.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Counter Strip */}
                <div
                    data-aos="fade-up"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, #1e4a72 100%)',
                        borderRadius: 20,
                        padding: '48px 40px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 24,
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div style={{
                        position: 'absolute', right: -40, top: -40, width: 200, height: 200,
                        borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%)',
                    }} />
                    {statsData.map(s => <StatBlock key={s.label} {...s} />)}
                </div>
            </div>


        </section>
    )
}
