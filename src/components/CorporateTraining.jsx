import { useNavigate } from 'react-router-dom';
import { Bot, Cpu, Building2, GraduationCap, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: <Bot size={24} color="var(--accent)" />,
        title: 'Agentic & Generative AI',
        desc: 'Master building autonomous AI agents, fine-tuning LLMs, and integrating AI into existing enterprise architectures.',
        color: '#7B3F8C',
    },
    {
        icon: <Cpu size={24} color="var(--accent)" />,
        title: 'Modern Tech Stack Integration',
        desc: 'Hands-on training in scalable architectures using Full Stack development, Serverless, and Cloud-native technologies.',
        color: '#1A3A5C',
    },
    {
        icon: <Building2 size={24} color="var(--accent)" />,
        title: 'Professional Upskilling',
        desc: 'Tailored workshops specifically designed to upgrade professionals and engineering teams to the latest industry standards.',
        color: '#1a6b8a',
    },
    {
        icon: <GraduationCap size={24} color="var(--accent)" />,
        title: 'College Seminars & Bootcamps',
        desc: 'Bridging the gap between academic curriculum and advanced, real-world industry demands for students and faculty.',
        color: '#b5451b',
    }
];

export default function CorporateTraining() {
    const navigate = useNavigate();

    return (
        <section id="corporate-training" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
            <div className="container">
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label" style={{ background: 'rgba(123, 63, 140, 0.15)', color: '#7B3F8C' }}>Professional Deep Dive</span>
                    <h2 className="section-heading">Advanced Tech & AI Training</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px', background: 'linear-gradient(90deg, var(--primary), #7B3F8C)' }} />
                    <p className="section-sub">Empowering individual professionals and tech enthusiasts with state-of-the-art training in Agentic AI, Generative Models, and scalable Full Stack Architectures.</p>
                </div>

                <div className="b2b-layout">
                    {/* Left Column - Features */}
                    <div className="b2b-content" data-aos="fade-right">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            {features.map((opt, i) => (
                                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ 
                                        width: '64px', height: '64px', minWidth: '64px', borderRadius: '16px',
                                        background: `${opt.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {opt.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--primary)' }}>{opt.title}</h3>
                                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>{opt.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - CTA Area */}
                    <div className="b2b-form-wrapper" data-aos="fade-left" data-aos-delay="100">
                        <div style={{ 
                            background: '#fff', borderRadius: '24px', padding: '56px 40px', 
                            boxShadow: '0 24px 48px rgba(0,0,0,0.06)', border: '1px solid var(--border)',
                            display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
                            gap: '24px'
                        }}>
                            <div style={{ 
                                width: '80px', height: '80px', borderRadius: '50%', 
                                background: 'rgba(123, 63, 140, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                            }}>
                                <Bot size={40} color="#7B3F8C" />
                            </div>
                            
                            <div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--primary)' }}>Ready to Deep Dive?</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '400px', margin: '0 auto' }}>
                                    If you are an individual professional looking to deeply understand next-generation technology and build real-world AI applications, we have tailored curriculums for you.
                                </p>
                            </div>
                            
                            <button 
                                onClick={() => navigate('/enquire')} 
                                className="btn btn-primary" 
                                style={{ 
                                    width: '100%', maxWidth: '300px', padding: '16px 24px', fontSize: '1.05rem', 
                                    justifyContent: 'center', marginTop: '16px' 
                                }}
                            >
                                Enquire Now <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .b2b-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-top: 50px; }
                
                @media (max-width: 1024px) {
                    .b2b-layout { grid-template-columns: 1fr; gap: 50px; }
                    .b2b-form-wrapper { order: -1; }
                }
            `}</style>
        </section>
    );
}

const inputStyle = {
    width: '100%', padding: '14px 16px', borderRadius: '10px', border: '1.5px solid var(--border)',
    fontSize: '0.9rem', fontFamily: 'inherit', transition: 'all 0.3s', outline: 'none',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.01)'
};
