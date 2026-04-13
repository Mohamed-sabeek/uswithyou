import React from 'react'

const LegalSection = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight">{title}</h2>
    <div className="text-gray-600 dark:text-brown-300 leading-relaxed text-base space-y-4 font-normal">
      {children}
    </div>
  </section>
)

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white dark:bg-brown-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900 dark:text-white">
            Terms of <span className="text-gold italic">Service</span>
          </h1>
          <p className="text-gray-500 dark:text-brown-400 text-sm italic">Defining our professional commitment and your experience.</p>
        </header>

        <LegalSection title="1. Introduction">
          <p>
            By accessing UsWithYou, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </LegalSection>

        <LegalSection title="2. Use of Website">
          <p>
            Permission is granted to temporarily access the materials on our website for personal, non-commercial transitory viewing only. You must not:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained on the site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. Intellectual Property">
          <p>
            The visual interfaces, graphics, design, compilation, information, data, computer code, products, software, and all other elements of our services are protected by intellectual property and other laws. All such materials are the property of UsWithYou or our third-party licensors.
          </p>
        </LegalSection>

        <LegalSection title="4. External Links Disclaimer">
          <p>
            UsWithYou has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by our studio. Use of any such linked website is at the user's own risk.
          </p>
        </LegalSection>

        <LegalSection title="5. Limitation of Liability">
          <p>
            In no event shall UsWithYou or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>
        </LegalSection>

        <LegalSection title="6. Changes to Terms">
          <p>
            UsWithYou may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </LegalSection>

        <LegalSection title="7. Contact Information">
          <p>
            If you have questions regarding these terms, please contact us at:
          </p>
          <p className="text-gold font-bold tracking-wide">uswithyou.team@gmail.com</p>
        </LegalSection>

        <div className="mt-20 pt-8 border-t border-white/5 text-xs text-brown-400 italic">
          Last updated: April 13, 2026
        </div>
      </div>
    </div>
  )
}
