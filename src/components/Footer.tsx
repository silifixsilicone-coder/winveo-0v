import Link from 'next/link';
import { Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-brand-orange p-1.5 rounded-md">
                <Video className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900">winveo.ai</span>
                <span className="text-[10px] text-gray-500 font-medium leading-none">AI Video Ads Creator for Local Businesses</span>
              </div>
            </Link>
            <p className="text-gray-500 max-w-sm">
              Generate high-quality video ads for your local business using AI. Perfect for plumbers, electricians, sliding window shops and service providers.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/#features" className="text-gray-500 hover:text-brand-orange transition">Features</Link></li>
              <li><Link href="/pricing" className="text-gray-500 hover:text-brand-orange transition">Pricing</Link></li>
              <li><Link href="/#examples" className="text-gray-500 hover:text-brand-orange transition">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-gray-500 hover:text-brand-orange transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-500 hover:text-brand-orange transition">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-brand-orange transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} winveo.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Links */}
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
