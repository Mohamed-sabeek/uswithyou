import React from 'react'

const LegalSection = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">{title}</h2>
    <div className="text-gray-600 dark:text-brown-300 leading-relaxed text-base space-y-4 font-normal">
      {children}
    </div>
  </section>
)

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-brown-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Privacy <span className="text-yellow-500 dark:text-gold italic">Policy</span>
          </h1>
          <p className="text-gray-600 dark:text-brown-400 text-sm italic">Protecting your digital footprint with transparency.</p>
        </header>

        <LegalSection title="1. Introduction">
          <p>
            At UsWithYou, we prioritize the privacy and security of our clients and visitors. This Privacy Policy outlines our practices regarding the collection, use, and protection of your personal information when you interact with our portfolio and services.
          </p>
          <p>
            By accessing our website, you acknowledge and agree to the terms outlined in this policy.
          </p>
        </LegalSection>

        <LegalSection title="2. Information We Collect">
          <p>
            We collect information that you voluntarily provide when engaging with our studio, such as when you submit an inquiry through our contact forms or reach out via email. This may include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Identification: Name and professional title</li>
            <li>Contact: Email address and phone number</li>
            <li>Project Details: Any specific requirements or goals provided in your messages</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How We Use Your Information">
          <p>
            The data we collect is used exclusively to facilitate our collaboration and improve your experience. Specifically, we use it to:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Process and respond to project inquiries</li>
            <li>Provide ongoing maintenance and technical support</li>
            <li>Maintain clear professional communication regarding project milestones</li>
            <li>Enhance our digital services and website performance</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. No Data Sharing">
          <p>
            Your trust is our most valuable asset. We do not sell, trade, or rent your personal identification information to third parties. We only share information when strictly necessary to deliver our services or when required by law.
          </p>
        </LegalSection>

        <LegalSection title="5. Cookies & Tracking">
          <p>
            We use a minimal set of cookies to analyze traffic and optimize website performance. These small data files help us understand how you interact with our content so we can provide a smoother browsing experience. You can choose to disable cookies through your browser settings if preferred.
          </p>
        </LegalSection>

        <LegalSection title="6. Your Rights">
          <p>
            You maintain full control over your data. You have the right to request access to the personal information we hold, ask for corrections, or request the permanent deletion of your data from our records at any time.
          </p>
        </LegalSection>

        <LegalSection title="7. Data Security">
          <p>
            We implement industry-standard security protocols to safeguard your information from unauthorized access. While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the internet is 100% secure.
          </p>
        </LegalSection>

        <LegalSection title="8. Contact Us">
          <p>
            For any questions regarding this policy or your data rights, please reach out to our team:
          </p>
          <p className="text-yellow-500 dark:text-gold font-bold tracking-wide">uswithyou.team@gmail.com</p>
        </LegalSection>

        <div className="mt-20 pt-8 border-t border-gray-100 dark:border-white/5 text-xs text-gray-600 dark:text-brown-400 italic">
          Last updated: April 13, 2026
        </div>
      </div>
    </div>
  )
}
