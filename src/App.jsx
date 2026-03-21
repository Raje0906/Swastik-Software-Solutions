import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import Internship from './components/Internship'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CorporateTraining from './components/CorporateTraining'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Registration from './components/Registration'
import Enquire from './components/Enquire'

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Courses />
      <CorporateTraining />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}

import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
