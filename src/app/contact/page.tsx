import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Winveo.ai helps local businesses quickly create professional promotional videos for marketing and advertising. Have questions? We're here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <Mail className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Email Support</p>
                  <a href="mailto:support@winveo.ai" className="text-brand-orange hover:underline font-medium">
                    support@winveo.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="bg-white p-3 rounded-xl shadow-sm">
                  <MessageSquare className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Business Description</p>
                  <p className="text-gray-500 text-sm">
                    Dedicated AI solutions for plumbers, electricians, UPVC window shops, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-900/5 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition bg-gray-50 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition bg-gray-50 focus:bg-white resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-brand-orange text-white font-bold py-4 px-6 rounded-xl hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 flex justify-center items-center gap-2">
                <Send className="h-5 w-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
