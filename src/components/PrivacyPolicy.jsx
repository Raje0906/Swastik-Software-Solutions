import React from 'react';

export default function PrivacyPolicy() {
    return (
        <main className="container" style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '80vh', color: 'var(--text-secondary)' }}>
            <h1 style={{ color: 'var(--primary)', fontSize: '2.5rem', marginBottom: '24px', fontFamily: 'Poppins, sans-serif' }}>Privacy Policy</h1>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                <strong>Effective Date:</strong> March 2026
            </p>
            
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                At Swastik Software Solutions, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, enroll in our courses, or apply for our internships.
            </p>

            <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us. This includes names, phone numbers, email addresses, educational background, and resume/CV details.
            </p>

            <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px', lineHeight: '1.7' }}>
                <li>To facilitate account creation and logon process.</li>
                <li>To send administrative information to you.</li>
                <li>To fulfill and manage your course registrations, internship applications, and inquiries.</li>
                <li>To improve our services and educational offerings.</li>
            </ul>

            <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>3. Information Sharing</h2>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes. We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
            </p>

            <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>4. Security of Your Information</h2>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginTop: '32px', marginBottom: '16px' }}>5. Contact Us</h2>
            <p style={{ marginBottom: '24px', lineHeight: '1.7' }}>
                If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:swastiksoftwaretech@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>swastiksoftwaretech@gmail.com</a>.
            </p>
        </main>
    );
}
