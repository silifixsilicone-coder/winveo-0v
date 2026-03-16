'use client';

import Link from 'next/link';
import { Video, Menu, X, LayoutDashboard, LogOut } from 'lucide-react';
import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand-orange p-2 rounded-lg shadow-lg shadow-brand-orange/20">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 tracking-tight leading-none">winveo.ai</span>
                <span className="text-[10px] text-gray-500 font-medium">AI Video Ads Creator</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#how-it-works" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">How it works</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-brand-orange font-medium transition-colors">Pricing</Link>
            
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard" className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 flex items-center gap-2">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <button onClick={handleLogout} className="text-gray-600 hover:text-red-600 font-medium transition-colors flex items-center gap-1">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-gray-600 flex hover:text-brand-orange font-medium transition-colors">Log in</Link>
                  <Link href="/signup" className="bg-brand-orange text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30">Sign up</Link>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50">How it works</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50">Pricing</Link>
          
          {user ? (
            <>
              <Link href="/dashboard" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-brand-orange text-white text-center mt-4">Dashboard</Link>
              <button 
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="w-full text-center px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-red-50"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-orange hover:bg-orange-50">Log in</Link>
              <Link href="/signup" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium bg-brand-orange text-white text-center mt-4">Sign up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
