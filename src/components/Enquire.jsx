import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Enquire() {
    const navigate = useNavigate();

    // Ensure page loads at the top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh', background: 'var(--bg-secondary)' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Embedded Google Form Section */}
                <div data-aos="fade-up" style={{ maxWidth: '800px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                    <div className="text-center" style={{ marginBottom: '32px' }}>
                        <span className="section-label" style={{ background: 'rgba(123, 63, 140, 0.15)', color: '#7B3F8C' }}>Professional Deep Dive</span>
                        <h1 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--primary)' }}>Enquire Now</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Fill out your details below and we will get back to you with a curriculum tailored for your professional growth.</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', minHeight: '600px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfFgtkoICM8mjs4ISdjLIcG7a6t0M-WI21SWf-3AFW-BCdNmg/viewform?embedded=true" 
                            width="100%" 
                            height="800" 
                            frameBorder="0" 
                            marginHeight="0" 
                            marginWidth="0"
                            title="Advanced Training Inquiry Form"
                        >
                            Loading…
                        </iframe>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button onClick={() => navigate('/')} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}>
                            <ArrowLeft size={18} /> Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
