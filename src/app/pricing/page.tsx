import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    { title: 'Single Video', price: '₹500', credits: '1 Video Generation', popular: false },
    { title: 'Starter Pack', price: '₹2000', credits: '5 Video Generations', popular: true },
    { title: 'Pro Plan', price: '₹3500', credits: '10 Video Generations', popular: false }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Simple, transparent pricing</h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Pay only for the videos you generate. No monthly subscriptions, no hidden fees. Buy credits and use them whenever you want.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`relative bg-white rounded-3xl p-8 border ${plan.popular ? 'border-brand-orange shadow-xl shadow-brand-orange/10' : 'border-gray-200 shadow-sm'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-medium text-gray-500 mb-4">{plan.title}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600 font-medium">{plan.credits}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">All premium templates</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">AI Voiceovers in 3 languages</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">No watermark in HD export</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">Full Commercial rights</span>
                  </li>
                </ul>
                <Link href="/login" className={`block w-full text-center py-4 rounded-xl font-bold transition ${plan.popular ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
