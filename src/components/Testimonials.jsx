import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'Final Year, B.Tech CSE — PICT Pune',
        course: 'Full Stack Web Development',
        rating: 5,
        quote: 'The MERN stack program at Swastik was a game-changer for me. Unlike other courses, we built three live projects I can actually show employers. I cracked my first campus interview within two months of completing the course. The mentors are extremely approachable and always ready to help.',
        avatar: '🧑‍💻',
        avatarBg: '#1A3A5C',
    },
    {
        name: 'Priya Nair',
        role: 'Software Engineer — Infosys',
        course: 'Python & Data Science',
        rating: 5,
        quote: 'I was a Java developer looking to pivot into data science. The Python & Data Science program at Swastik gave me exactly what I needed — hands-on projects with real datasets, clear mentorship, and a portfolio that got me an internal transfer to the data team. Highly recommend!',
        avatar: '👩‍🔬',
        avatarBg: '#7B3F8C',
    },
    {
        name: 'Aakash Mehta',
        role: 'MBA Graduate — SIBM Pune',
        course: 'AI & Machine Learning',
        rating: 5,
        quote: 'As an MBA student with no coding background, I was nervous. The trainers at Swastik broke down complex AI concepts into understandable pieces. The certificate definitely boosted my profile for product management roles. The placement support was also exceptional.',
        avatar: '🎓',
        avatarBg: '#1e6ea5',
    },
    {
        name: 'Sneha Patil',
        role: 'Intern → Junior Dev — TCS',
        course: 'Internship Program — Web Dev',
        rating: 5,
        quote: 'My 3-month internship at Swastik led directly to my first job offer. The real project experience and the letter of recommendation gave me an edge over other freshers. The team is incredibly supportive and the mentorship goes well beyond the classroom.',
        avatar: '👩‍💼',
        avatarBg: '#1a5c3a',
    },
    {
        name: 'Vikram Singh',
        role: 'B.Tech 3rd Year — VIT Pune',
        course: 'Cybersecurity Fundamentals',
        rating: 5,
        quote: 'I always wanted to get into cybersecurity but didn\'t know where to start. Swastik\'s Cybersecurity program gave me a structured path, hands-on tools practice, and ethical hacking skills. Cleared the CompTIA Security+ exam right after. Best decision I made this year.',
        avatar: '🔐',
        avatarBg: '#b5451b',
    },
    {
        name: 'Ananya Goyal',
        role: 'UI/UX Designer — Startup',
        course: 'UI/UX Design Program',
        rating: 5,
        quote: 'The Figma-based design program exceeded my expectations. We did real design critiques, user research exercises, and built complete design systems. My Behance portfolio from this course is what got me hired at my current startup. Worth every rupee!',
        avatar: '🎨',
        avatarBg: '#1a5c3a',
    },
]

function StarRating({ count }) {
    return (
        <div style={{ display: 'flex', gap: 2 }}>
            {Array.from({ length: count }).map((_, i) => (
                <Star key={i} size={14} fill="#C9A84C" color="#C9A84C" />
            ))}
        </div>
    )
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="section section-alt">
            <div className="container">
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">Student Stories</span>
                    <h2 className="section-heading">What Our Students Say</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub">Real words from real people who transformed their careers with Swastik.</p>
                </div>

                {/* Carousel wrapper */}
                <div style={{ overflow: 'hidden', position: 'relative' }} data-aos="fade-up" data-aos-delay="100">
                    <div
                        className="testimonial-track"
                        style={{
                            display: 'flex',
                            gap: 24,
                            animation: 'scrollTestimonials 32s linear infinite',
                        }}
                        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                    >
                        {[...testimonials, ...testimonials].map((t, i) => (
                            <div
                                key={i}
                                style={{
                                    minWidth: 340,
                                    background: '#fff',
                                    borderRadius: 16,
                                    padding: '28px',
                                    boxShadow: 'var(--shadow-md)',
                                    border: '1px solid var(--border)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 16,
                                    flexShrink: 0,
                                }}
                            >
                                {/* Quote icon */}
                                <Quote size={28} color="var(--accent)" style={{ opacity: 0.5 }} />
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--text-secondary)', flex: 1 }}>
                                    "{t.quote}"
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: '50%',
                                        background: t.avatarBg, display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        fontSize: 22, flexShrink: 0,
                                        boxShadow: `0 4px 12px ${t.avatarBg}40`,
                                    }}>{t.avatar}</div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>{t.name}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.role}</div>
                                        <StarRating count={t.rating} />
                                    </div>
                                    <div style={{
                                        background: 'rgba(201,168,76,0.1)', borderRadius: 8, padding: '4px 10px',
                                        fontSize: '0.7rem', fontWeight: 600, color: '#8a6c1e', flexShrink: 0, textAlign: 'right',
                                    }}>{t.course}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scrollTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-340px * ${testimonials.length} - 24px * ${testimonials.length})); }
        }
        @media (max-width: 480px) {
          .testimonial-track > div { min-width: 290px !important; }
        }
      `}</style>
        </section>
    )
}
