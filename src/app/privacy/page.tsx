import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
        <div className="space-y-8 text-white/70 font-body leading-relaxed bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <p>
            At AST Solutions, we are committed to protecting the privacy and security of our clients. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our premium transport services.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, contact details, payment information, and travel itineraries when you book a ride or communicate with our support team.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
          <p>
            The information we collect is strictly used to provide, maintain, and improve our transport services. This includes processing payments, sending trip confirmations, and providing customer support. We do not sell your personal data to third parties.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Data Security</h2>
          <p>
            We implement industry-standard encryption and security measures to protect your data against unauthorized access, alteration, or destruction. Your trust is our highest priority.
          </p>
        </div>
      </div>
    </main>
  );
}
