import React from 'react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
        <div className="space-y-8 text-white/70 font-body leading-relaxed bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <p>
            Welcome to AST Solutions. By accessing our website or utilizing our transport services, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Service Agreement</h2>
          <p>
            AST Solutions provides premium ground transportation services. All bookings are subject to vehicle availability and driver scheduling. We reserve the right to upgrade your assigned vehicle to a higher category at no additional cost.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Cancellations & Refunds</h2>
          <p>
            Cancellations made up to 24 hours prior to the scheduled pickup time will receive a full refund. Cancellations made within 24 hours may be subject to a cancellation fee equivalent to the base fare.
          </p>
          
          <h2 className="text-2xl font-display font-bold text-white mt-8 mb-4">Passenger Conduct</h2>
          <p>
            For the safety and comfort of all, smoking and the consumption of alcohol are strictly prohibited in all our vehicles. Passengers are responsible for any damages caused to the vehicle interior during the journey.
          </p>
        </div>
      </div>
    </main>
  );
}
