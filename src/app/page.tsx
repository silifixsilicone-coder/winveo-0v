import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Play, Sparkles, Zap, Video as VideoIcon, CheckCircle2, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-brand-orange opacity-20 blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            <span>AI Video Ads Creator for Local Businesses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Create Professional Video Ads <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-500">
              for Your Business in Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Generate high-quality video ads for your local business with <span className="text-brand-orange font-bold">winveo.ai</span>. Perfect for plumbers, electricians, sliding window shops and service providers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-orange-dark transition shadow-xl shadow-brand-orange/30 flex items-center justify-center gap-2">
              <VideoIcon className="h-5 w-5" />
              Create Your Video
            </Link>
            <Link href="#examples" className="bg-white text-brand-orange border border-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition flex items-center justify-center gap-2">
              <Play className="h-5 w-5 fill-brand-orange" />
              See Demo
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Three simple steps to generate stunning video advertisements for your business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Enter Business Details',
                desc: 'Tell us your business name, contact info, and select your services.',
                icon: <Zap className="h-8 w-8 text-brand-orange" />
              },
              {
                step: '2',
                title: 'Upload Media',
                desc: 'Upload your logo and a few photos of your previous work.',
                icon: <VideoIcon className="h-8 w-8 text-brand-orange" />
              },
              {
                step: '3',
                title: 'Generate & Share',
                desc: 'Our AI creates a professional video. Download and share it instantly.',
                icon: <Sparkles className="h-8 w-8 text-brand-orange" />
              }
            ].map((item, i) => (
              <div key={i} className="relative bg-white pt-10 px-8 pb-12 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="absolute -top-6 left-8 bg-brand-orange text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-brand-orange/30">
                  {item.step}
                </div>
                <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Videos */}
      <section id="examples" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See What You Can Create</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">AI-generated examples for local businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { type: 'Plumbing Service', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400&h=600' },
              { type: 'Electrician', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=600' },
              { type: 'Sliding Window', img: 'https://images.unsplash.com/photo-1541123437800-14138090fce5?auto=format&fit=crop&q=80&w=400&h=600' }
            ].map((video, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[9/16] bg-gray-900">
                <img src={video.img} alt={video.type} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-500 scale-105 group-hover:scale-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/30 backdrop-blur-md hover:bg-white/50 w-16 h-16 rounded-full flex items-center justify-center transition border border-white/40">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-2 inline-block">Template</span>
                  <h3 className="text-xl font-bold text-white">{video.type}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-brand-orange text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Automate your advertisement workflow.</h2>
              <p className="text-orange-50 text-xl mb-8">Stop paying expensive agencies. Our AI creates targeted, localized ads with professional voiceovers instantly.</p>
              
              <ul className="space-y-4">
                {[
                  'Realistic AI Voiceovers (Local Languages)',
                  'Professional Stock Footage & Template Styling',
                  'Instant Rendering & Export in 1080p HD',
                  'Customized for home service businesses'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-200" />
                    <span className="text-lg text-orange-50">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/signup" className="mt-10 inline-block bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition shadow-lg">
                Start Building Now
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 blur-[100px] opacity-30"></div>
              <div className="bg-orange-600 border border-orange-400 rounded-3xl p-8 relative shadow-2xl">
                <div className="space-y-6">
                  <div className="h-4 bg-orange-400/50 rounded-full w-3/4"></div>
                  <div className="h-4 bg-orange-400/50 rounded-full w-1/2"></div>
                  <div className="aspect-video bg-orange-700 rounded-xl border border-orange-500 flex items-center justify-center mt-6">
                    <VideoIcon className="h-16 w-16 text-orange-400" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-12 flex-1 bg-orange-400/50 rounded-lg"></div>
                    <div className="h-12 w-24 bg-white rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-gray-600 text-lg">Pay only for what you generate. No hidden fees.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Single Video', price: '₹500', credits: '1 Video Generation', popular: false },
              { title: 'Starter Pack', price: '₹2000', credits: '5 Video Generations', popular: true },
              { title: 'Pro Plan', price: '₹3500', credits: '10 Video Generations', popular: false }
            ].map((plan, i) => (
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
                    <span className="text-gray-600">All templates included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">No watermark</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0" />
                    <span className="text-gray-600">Commercial rights</span>
                  </li>
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold transition ${plan.popular ? 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/30' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by local businesses</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', role: 'Plumbing Services', text: 'Created my ad in 5 minutes. The Marathi voiceover was perfect. I got 3 new jobs just from sharing it on WhatsApp status!' },
              { name: 'Sanjay Kumar', role: 'Electrical Works', text: 'Much cheaper than hiring a video editor. The templates actually look professional for local service providers.' },
              { name: 'Praveen Desai', role: 'Window & Glass', text: 'winveo.ai understands our business. The visuals matching sliding windows and glass railings were spot on.' }
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex gap-1 text-amber-400 mb-6">
                  {Array.from({length: 5}).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
