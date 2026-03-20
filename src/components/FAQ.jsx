import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        q: 'What courses do you offer?',
        a: 'We offer 6 core programs: Agentic AI Systems, Python & Data Science, Artificial Intelligence & Machine Learning, Cybersecurity Fundamentals, Cloud Computing (AWS/Azure), and Full Stack Web Development (MERN/Java). All are available online with optional hybrid classroom sessions.',
    },
    {
        q: 'Are courses online or offline?',
        a: 'All our courses are available in online mode with live instructor-led sessions via video conferencing. Select programs also offer a hybrid mode with weekend classroom access at our Pune centre. You can choose whichever format suits your schedule.',
    },
    {
        q: 'Do I get a certificate after completion?',
        a: 'Yes! Upon successfully completing your course or internship, you receive a Certificate of Completion from Swastik Software Solutions. The certificate includes your name, course, duration, and is accepted by 30+ partnered hiring companies.',
    },
    {
        q: 'Is the internship paid or unpaid?',
        a: 'Our internship programs are currently offered as learning-focused, unpaid internships. Instead of a stipend, you receive a Certificate of Completion, a Letter of Recommendation, hands-on project experience, mentorship, and placement assistance — more valuable for fresh graduates than a token stipend.',
    },
    {
        q: 'What is the internship duration?',
        a: 'We offer flexible internship durations of 1 month, 2 months, 3 months, and 6 months. You can choose the duration that aligns with your academic schedule or career goals. Longer durations offer deeper project exposure and stronger recommendation letters.',
    },
    {
        q: 'Can working professionals join?',
        a: 'Absolutely! We have a significant number of working professionals in our batches. We offer early morning, evening, and weekend batches specifically designed around a working professional\'s schedule. The self-paced components also allow you to learn at your own pace.',
    },
    {
        q: 'Is placement assistance guaranteed?',
        a: 'We provide strong placement support — including resume building, LinkedIn profile optimization, mock interview preparation, and referrals to our hiring partners. While we cannot guarantee placement (no ethical institute can), our 90%+ placement-within-6-months track record speaks for itself.',
    },
    {
        q: 'How do I enroll?',
        a: 'Enrollment is simple! Scroll to our Contact / Enquiry section on this page, fill in the form with your details and your course of interest, and one of our counsellors will reach out within 24 hours to guide you through the enrollment process, batch selection, and fee payment.',
    },
]

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState(null)

    const toggle = (i) => setOpenIdx(openIdx === i ? null : i)

    return (
        <section id="faq" className="section section-alt">
            <div className="container" style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto' }}>
                <div className="text-center" data-aos="fade-up">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-heading">Frequently Asked Questions</h2>
                    <div className="accent-line" style={{ margin: '0 auto 16px' }} />
                    <p className="section-sub">Everything you need to know before you enroll.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }} data-aos="fade-up" data-aos-delay="100">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                background: '#fff',
                                borderRadius: 12,
                                border: `1.5px solid ${openIdx === i ? 'var(--accent)' : 'var(--border)'}`,
                                overflow: 'hidden',
                                transition: 'border-color 0.25s',
                                boxShadow: openIdx === i ? '0 4px 20px rgba(201,168,76,0.12)' : 'var(--shadow-sm)',
                            }}
                        >
                            <button
                                onClick={() => toggle(i)}
                                aria-expanded={openIdx === i}
                                style={{
                                    width: '100%', textAlign: 'left',
                                    padding: '18px 20px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    gap: 16, background: 'none', cursor: 'pointer',
                                    fontFamily: 'inherit',
                                }}
                            >
                                <span style={{
                                    fontWeight: 600, fontSize: '0.975rem',
                                    color: openIdx === i ? 'var(--primary)' : 'var(--text-dark)',
                                    flex: 1,
                                }}>{faq.q}</span>
                                <div style={{
                                    width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                                    background: openIdx === i ? 'var(--accent)' : 'var(--bg-alt)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    transition: 'all 0.3s',
                                }}>
                                    <ChevronDown
                                        size={18}
                                        color={openIdx === i ? 'var(--primary)' : 'var(--text-secondary)'}
                                        style={{ transform: openIdx === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                                    />
                                </div>
                            </button>

                            <div style={{
                                maxHeight: openIdx === i ? 300 : 0,
                                overflow: 'hidden',
                                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}>
                                <div style={{ padding: '0 20px 18px', borderTop: '1px solid var(--border)' }}>
                                    <p style={{ paddingTop: 16, fontSize: '0.9rem', lineHeight: 1.75 }}>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
