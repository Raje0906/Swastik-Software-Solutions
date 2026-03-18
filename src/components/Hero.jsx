import { ArrowRight, GraduationCap, BookOpen, Award, Briefcase } from 'lucide-react'

const stats = [
    { value: '500+', label: 'Students Trained' },
    { value: '20+', label: 'Courses Offered' },
    { value: '95%', label: 'Satisfaction Rate' },
    { value: '30+', label: 'Hiring Partners' },
]

const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    left: Math.random() * 100,
    top: Math.random() * 100,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 4,
}))

export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #0d2137 0%, #1A3A5C 45%, #1e4a72 100%)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                paddingTop: 'var(--nav-height)',
            }}
        >
            {/* Background particles */}
            {particles.map(p => (
                <div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        width: p.size, height: p.size,
                        borderRadius: '50%',
                        background: 'rgba(201,168,76,0.18)',
                        left: `${p.left}%`,
                        top: `${p.top}%`,
                        animation: `floatUp ${p.dur}s ease-in-out ${p.delay}s infinite alternate`,
                    }}
                />
            ))}

            {/* Grid lines overlay */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
                pointerEvents: 'none',
            }} />

            {/* Glowing circles */}
            <div style={{
                position: 'absolute', right: '5%', top: '15%',
                width: 420, height: 420, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', left: '-5%', bottom: '5%',
                width: 320, height: 320, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(30,74,114,0.6) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="hero-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 64,
                    alignItems: 'center',
                    padding: '48px 0',
                }}>
                    {/* Left content */}
                    <div style={{ animation: 'fadeInLeft 0.8s ease' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                            borderRadius: 50, padding: '6px 16px', marginBottom: 24,
                        }}>
                            <GraduationCap size={14} color="#C9A84C" />
                            <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em' }}>
                                INDIA'S LEADING TRAINING PLATFORM
                            </span>
                        </div>

                        <h1 style={{ color: '#fff', marginBottom: 20, fontSize: 'clamp(32px, 4.5vw, 52px)', lineHeight: 1.15 }}>
                            Launch Your Career &amp; <br />
                            <span className="gradient-text">Advance Your Skills</span>
                        </h1>

                        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.1rem', marginBottom: 36, lineHeight: 1.7, maxWidth: 480 }}>
                            Bridge the gap between academic knowledge and real-world industry skills. Offering hands-on student internships in tech domains and advanced training programs in Agentic AI, Cloud Computing, Data Science &amp; more.
                        </p>

                        <div className="hero-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
                            <button className="btn btn-primary" onClick={() => scrollTo('courses')} style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                                View Internships <ArrowRight size={17} />
                            </button>
                            <button className="btn btn-outline-light" onClick={() => scrollTo('corporate-training')}>
                                Advanced Training
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="hero-stats" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 16,
                            paddingTop: 32,
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                        }}>
                            {stats.map(s => (
                                <div key={s.label} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: 'var(--accent)', fontFamily: 'Poppins,sans-serif' }}>
                                        {s.value}
                                    </div>
                                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: 4, lineHeight: 1.3 }}>
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right visual */}
                    <div className="hero-right" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', animation: 'fadeInRight 0.9s ease' }}>
                        <div style={{ position: 'relative', width: '100%', maxWidth: 480 }}>
                            {/* Central card */}
                            <div style={{
                                background: 'rgba(255,255,255,0.06)',
                                borderRadius: 24,
                                border: '1px solid rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(20px)',
                                padding: 40,
                                textAlign: 'center',
                            }}>
                                <div style={{
                                    width: 120, height: 120, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--accent), #f0c96b)',
                                    margin: '0 auto 24px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: '0 16px 48px rgba(201,168,76,0.4)',
                                    fontSize: 52,
                                }}>
                                    🎓
                                </div>
                                <h3 style={{ color: '#fff', marginBottom: 8, fontSize: '1.3rem' }}>Start Your Journey</h3>
                                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: 24 }}>
                                    Join 500+ students already transforming their careers
                                </p>

                                {/* Feature pills */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                                    {['Live Projects', 'Mentorship', 'Certificates', 'Job Ready'].map(f => (
                                        <span key={f} style={{
                                            background: 'rgba(201,168,76,0.15)',
                                            border: '1px solid rgba(201,168,76,0.3)',
                                            borderRadius: 50, padding: '5px 14px',
                                            color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600,
                                        }}>{f}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div style={{
                                position: 'absolute', top: -20, left: -20,
                                background: '#fff', borderRadius: 16, padding: '12px 16px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                display: 'flex', alignItems: 'center', gap: 10,
                                animation: 'floatBadge 3s ease-in-out infinite',
                            }}>
                                <BookOpen size={20} color="var(--primary)" />
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', lineHeight: 1 }}>Courses</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>20+</div>
                                </div>
                            </div>

                            <div style={{
                                position: 'absolute', bottom: -20, right: -20,
                                background: 'var(--accent)', borderRadius: 16, padding: '12px 16px',
                                boxShadow: '0 8px 24px rgba(201,168,76,0.4)',
                                display: 'flex', alignItems: 'center', gap: 10,
                                animation: 'floatBadge 3.5s ease-in-out 0.5s infinite',
                            }}>
                                <Award size={20} color="var(--primary)" />
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(26,58,92,0.7)', lineHeight: 1 }}>Success Rate</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>95%</div>
                                </div>
                            </div>

                            <div style={{
                                position: 'absolute', top: '40%', right: -30,
                                background: 'linear-gradient(135deg, var(--primary), #1e4a72)',
                                borderRadius: 16, padding: '12px 16px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                                display: 'flex', alignItems: 'center', gap: 10,
                                animation: 'floatBadge 4s ease-in-out 1s infinite',
                            }}>
                                <Briefcase size={20} color="var(--accent)" />
                                <div>
                                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1 }}>Partners</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>30+</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
                <div style={{ width: 28, height: 48, border: '2px solid rgba(255,255,255,0.3)', borderRadius: 14, display: 'flex', justifyContent: 'center', paddingTop: 6 }}>
                    <div style={{ width: 4, height: 10, background: 'var(--accent)', borderRadius: 2, animation: 'scrollDot 1.5s ease-in-out infinite' }} />
                </div>
            </div>

            <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0px) scale(1); opacity: 0.6; }
          100% { transform: translateY(-30px) scale(1.2); opacity: 0.2; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(14px); opacity: 0.3; }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* Prevent horizontal overflow globally from any absolute element */
        #home { overflow-x: hidden; }

      `}</style>
        </section>
    )
}
