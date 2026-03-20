import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, Monitor, BarChart2, X, ChevronRight, BookOpen } from 'lucide-react'

const courses = [
    {
        id: 7,
        title: 'Agentic AI Systems',
        subtitle: 'LLMs, LangChain, AI Agents',
        category: 'Data Science',
        duration: '2 Months',
        mode: 'Online',
        level: 'Beginner to Advanced',
        emoji: '🧠',
        color: '#3b82f6',
        desc: 'Learn to build autonomous AI agents using large language models. Master tools like LangChain, AutoGPT concepts, and craft intelligent workflows.',
        topics: ['LLM Fundamentals', 'Prompt Engineering', 'LangChain Framework', 'Building Autonomous Agents', 'RAG (Retrieval-Augmented Gen)', 'Deploying AI Systems'],
    },
    {
        id: 2,
        title: 'Python & Data Science',
        subtitle: 'Pandas, NumPy, Visualization',
        category: 'Data Science',
        duration: '2 Months',
        mode: 'Online',
        level: 'Beginner to Intermediate',
        emoji: '📊',
        color: '#1e6ea5',
        desc: 'Learn Python programming from scratch, dive into data manipulation, statistical analysis, and build insightful visualizations with real datasets.',
        topics: ['Python Fundamentals', 'NumPy & Pandas', 'Data Visualization (Matplotlib/Seaborn)', 'Statistical Analysis', 'Machine Learning Basics', 'Capstone Project'],
    },
    {
        id: 3,
        title: 'Artificial Intelligence & ML',
        subtitle: 'Scikit-learn, TensorFlow',
        category: 'Data Science',
        duration: '3 Months',
        mode: 'Online',
        level: 'Intermediate',
        emoji: '🤖',
        color: '#7B3F8C',
        desc: 'Build intelligent systems using supervised/unsupervised learning, neural networks, and deep learning frameworks.',
        topics: ['ML Algorithms', 'Scikit-learn', 'TensorFlow / Keras', 'Natural Language Processing', 'Computer Vision Basics', 'Model Deployment'],
    },
    {
        id: 4,
        title: 'Cybersecurity Fundamentals',
        subtitle: 'Ethical Hacking & Defense',
        category: 'Cybersecurity',
        duration: '2 Months',
        mode: 'Online / Hybrid',
        level: 'Beginner to Intermediate',
        emoji: '🔐',
        color: '#b5451b',
        desc: 'Learn to identify vulnerabilities, conduct ethical penetration testing, and implement robust security measures for modern applications.',
        topics: ['Network Security Basics', 'Linux Command Line', 'Ethical Hacking & Recon', 'OWASP Top 10', 'Penetration Testing', 'Incident Response'],
    },
    {
        id: 5,
        title: 'Cloud Computing',
        subtitle: 'AWS / Azure Fundamentals',
        category: 'Development',
        duration: '2 Months',
        mode: 'Online',
        level: 'Intermediate',
        emoji: '☁️',
        color: '#1a6b8a',
        desc: 'Understand cloud architecture, deploy scalable applications, and earn foundational knowledge aligned with AWS/Azure certifications.',
        topics: ['Cloud Concepts & Models', 'AWS Core Services (EC2, S3, RDS)', 'Azure Fundamentals', 'Serverless Architecture', 'DevOps & CI/CD', 'Cost Optimization'],
    },
    {
        id: 1,
        title: 'Full Stack Web Development',
        subtitle: 'MERN / Java Stack',
        category: 'Development',
        duration: '3 Months',
        mode: 'Online / Hybrid',
        level: 'Beginner to Advanced',
        emoji: '🌐',
        color: '#1A3A5C',
        desc: 'Master both frontend (React, HTML, CSS) and backend (Node.js, Express, MongoDB or Java Spring Boot) development and ship production-ready web applications.',
        topics: ['HTML5, CSS3, JavaScript ES6+', 'React.js with Hooks & Context', 'Node.js & Express.js', 'MongoDB / MySQL', 'REST APIs & Auth', 'Deployment (Vercel, AWS)'],
    },
]

const filters = ['All', 'Development', 'Data Science', 'Cybersecurity']

export default function Courses() {
    const [activeFilter, setActiveFilter] = useState('All')
    const [modal, setModal] = useState(null)

    const navigate = useNavigate()

    const filtered = activeFilter === 'All' ? courses : courses.filter(c => c.category === activeFilter)

    const openModal = (course) => { setModal(course); document.body.style.overflow = 'hidden' }
    const closeModal = () => { setModal(null); document.body.style.overflow = '' }

    const handleEnroll = (courseTitle) => {
        closeModal()
        navigate('/register', { state: { courseTitle } })
    }

    const levelColor = (l) => l.includes('Beginner') ? '#2E7D32' : l.includes('Intermediate') ? '#1565C0' : '#6A1B9A'

    return (
        <section id="courses" className="section">
            <div className="container">
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">Training Programs</span>
                    <h2 className="section-heading">Our Courses</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub">Industry-aligned programs designed by working professionals to make you job-ready from day one.</p>
                </div>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }} data-aos="fade-up" data-aos-delay="100">
                    {filters.map(f => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            style={{
                                padding: '8px 22px', borderRadius: 50, border: '1.5px solid',
                                borderColor: activeFilter === f ? 'var(--accent)' : 'var(--border)',
                                background: activeFilter === f ? 'var(--accent)' : '#fff',
                                color: activeFilter === f ? 'var(--primary)' : 'var(--text-secondary)',
                                fontWeight: activeFilter === f ? 700 : 500, fontSize: '0.88rem',
                                cursor: 'pointer', transition: 'all 0.25s', fontFamily: 'inherit',
                            }}
                        >{f}</button>
                    ))}
                </div>

                {/* Course Cards */}
                <div className="grid-3">
                    {filtered.map((c, i) => (
                        <div key={c.id} className="card" data-aos="fade-up" data-aos-delay={i * 70} style={{ overflow: 'hidden', borderTop: `4px solid ${c.color}` }}>
                            <div style={{ padding: '28px 24px 20px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                                    <div style={{
                                        width: 56, height: 56, borderRadius: 14,
                                        background: `${c.color}18`, display: 'flex',
                                        alignItems: 'center', justifyContent: 'center', fontSize: 26,
                                    }}>{c.emoji}</div>
                                    <span style={{
                                        background: `${levelColor(c.level)}15`, color: levelColor(c.level),
                                        borderRadius: 50, padding: '3px 12px', fontSize: '0.72rem', fontWeight: 700,
                                    }}>{c.level.split(' ')[0]}</span>
                                </div>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{c.title}</h3>
                                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, marginBottom: 12 }}>{c.subtitle}</p>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.65, marginBottom: 20, color: 'var(--text-secondary)' }}>{c.desc}</p>
                                <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                                        <Clock size={13} /> {c.duration}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                                        <Monitor size={13} /> {c.mode}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: 10 }}>
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => openModal(c)}
                                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.82rem', justifyContent: 'center' }}
                                    >Know More</button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => handleEnroll(c.title)}
                                        style={{ flex: 1, padding: '10px 14px', fontSize: '0.82rem', justifyContent: 'center' }}
                                    >Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {modal && (
                <div
                    onClick={closeModal}
                    style={{
                        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.65)',
                        zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: 20, backdropFilter: 'blur(4px)',
                    }}
                    role="dialog" aria-modal="true" aria-labelledby="modal-title"
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        style={{
                            background: '#fff', borderRadius: 20, maxWidth: 560, width: '100%',
                            maxHeight: '90vh', overflow: 'auto',
                            boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                            borderTop: `5px solid ${modal.color}`,
                        }}
                    >
                        <div style={{ padding: '32px 32px 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                    <div style={{ fontSize: 40 }}>{modal.emoji}</div>
                                    <div>
                                        <h3 id="modal-title" style={{ fontSize: '1.2rem', marginBottom: 4 }}>{modal.title}</h3>
                                        <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.85rem' }}>{modal.subtitle}</span>
                                    </div>
                                </div>
                                <button onClick={closeModal} aria-label="Close" style={{ color: 'var(--text-secondary)', padding: 4 }}><X size={22} /></button>
                            </div>
                            <div style={{ display: 'flex', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
                                <span className="badge badge-blue"><Clock size={12} />{modal.duration}</span>
                                <span className="badge badge-blue"><Monitor size={12} />{modal.mode}</span>
                                <span className="badge badge-gold"><BarChart2 size={12} />{modal.level}</span>
                            </div>
                            <p style={{ marginBottom: 24, lineHeight: 1.7 }}>{modal.desc}</p>
                            <h4 style={{ color: 'var(--primary)', marginBottom: 12, fontSize: '0.95rem' }}>Topics Covered</h4>
                            <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: 28 }}>
                                {modal.topics.map(t => (
                                    <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                        <ChevronRight size={14} color="var(--accent)" />{t}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ padding: '20px 32px 28px', borderTop: '1px solid var(--border)', display: 'flex', gap: 12 }}>
                            <button className="btn btn-primary" onClick={() => handleEnroll(modal.title)} style={{ flex: 1, justifyContent: 'center' }}>
                                <BookOpen size={16} /> Enroll Now
                            </button>
                            <button className="btn btn-outline" onClick={closeModal} style={{ flex: 1, justifyContent: 'center' }}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @media (max-width: 1023px) {
          #courses .grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          #courses .grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    )
}
