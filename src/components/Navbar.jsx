import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Deep Dive', href: '#corporate-training' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const location = useLocation()
    const navigate = useNavigate()
    const isRegistrationPage = location.pathname === '/register'

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const drawerRef = useRef(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Active link via IntersectionObserver
    useEffect(() => {
        const sections = navLinks.map(l => document.getElementById(l.href.slice(1))).filter(Boolean)
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -55% 0px' }
        )
        sections.forEach(s => observer.observe(s))
        return () => sections.forEach(s => observer.unobserve(s))
    }, [])

    // Close drawer on outside click
    useEffect(() => {
        const handler = (e) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) setMenuOpen(false)
        }
        if (menuOpen) document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [menuOpen])

    // Prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const handleNav = (href) => {
        setMenuOpen(false)
        const el = document.getElementById(href.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.4s ease',
                background: scrolled ? 'var(--primary)' : 'transparent',
                boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.18)' : 'none',
                height: 'var(--nav-height)',
            }}
            role="banner"
        >
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a 
                    href="/" 
                    onClick={(e) => {
                        e.preventDefault();
                        if (location.pathname !== '/') {
                            navigate('/');
                        } else {
                            handleNav('#home');
                        }
                    }} 
                    style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} 
                    aria-label="Swastik Software Solutions home"
                >
                    <img 
                        src="/logo.png" 
                        alt="Swastik Logo" 
                        style={{
                            width: 44, height: 44,
                            objectFit: 'contain',
                            display: 'block'
                        }}
                    />
                    <div style={{ lineHeight: 1.1 }}>
                        <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#fff', letterSpacing: '-0.01em' }}>Swastik</div>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Software Solutions</div>
                    </div>
                </a>

                {/* Desktop Nav */}
                {!isRegistrationPage && (
                    <nav aria-label="Primary navigation" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                        <ul style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="desktop-nav">
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => handleNav(link.href)}
                                        style={{
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'rgba(255,255,255,0.85)',
                                            fontWeight: activeSection === link.href.slice(1) ? 700 : 500,
                                            fontSize: '0.9rem',
                                            padding: '4px 0',
                                            borderBottom: activeSection === link.href.slice(1) ? '2px solid var(--accent)' : '2px solid transparent',
                                            transition: 'all 0.25s',
                                            fontFamily: 'inherit',
                                        }}
                                        aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="btn btn-primary desktop-nav" onClick={() => handleNav('#courses')} style={{ padding: '10px 22px', fontSize: '0.875rem' }}>
                            Enroll Now
                        </button>
                        {/* Hamburger */}
                        <button
                            className="hamburger-btn"
                            onClick={() => setMenuOpen(v => !v)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            style={{ color: '#fff', display: 'none', padding: 4, background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                            {menuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </nav>
                )}
            </div>

            {/* Mobile Drawer */}
            <div
                ref={drawerRef}
                style={{
                    position: 'fixed', top: 0, right: 0, bottom: 0, width: 280,
                    background: 'var(--primary)',
                    boxShadow: '-4px 0 24px rgba(0,0,0,0.3)',
                    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: '80px 24px 24px',
                    display: 'flex', flexDirection: 'column', gap: 8,
                    zIndex: 999,
                }}
                role="dialog"
                aria-label="Mobile navigation"
            >
                {navLinks.map(link => (
                    <button
                        key={link.href}
                        onClick={() => handleNav(link.href)}
                        style={{
                            border: 'none', cursor: 'pointer', textAlign: 'left',
                            color: activeSection === link.href.slice(1) ? 'var(--accent)' : 'rgba(255,255,255,0.88)',
                            fontWeight: activeSection === link.href.slice(1) ? 700 : 500,
                            fontSize: '1.05rem', padding: '12px 16px',
                            borderRadius: 8,
                            background: activeSection === link.href.slice(1) ? 'rgba(201,168,76,0.12)' : 'transparent',
                            fontFamily: 'inherit',
                            transition: 'all 0.2s',
                        }}
                    >
                        {link.label}
                    </button>
                ))}
                <button className="btn btn-primary" onClick={() => handleNav('#courses')} style={{ marginTop: 16 }}>
                    Enroll Now
                </button>
            </div>
            {/* Overlay */}
            {menuOpen && (
                <div
                    onClick={() => setMenuOpen(false)}
                    style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 998 }}
                />
            )}

            <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
        </header>
    )
}
