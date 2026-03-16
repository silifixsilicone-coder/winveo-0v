'use client';

import { useState } from 'react';
import { UploadCloud, Video, Play, CheckCircle2, Loader2, Download, Share2 } from 'lucide-react';
import Link from 'next/link';

export default function CreateVideoPage() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Form State
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  
  const servicesList = [
    'Glass Railing', 'UPVC Window', 'French Door', 'Aluminium Door', 
    'Sliding Window', 'Pipe Repair', 'Electrical Wiring', 'House Painting'
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate API generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setIsDone(true);
    }, 4000);
  };

  if (isGenerating) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-orange rounded-full blur-[50px] opacity-30 animate-pulse"></div>
          <div className="w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center relative z-10 border border-orange-100">
            <Loader2 className="h-10 w-10 text-brand-orange animate-spin" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-2">Generating your AI video...</h2>
        <p className="text-gray-500 max-w-sm text-center">We are applying templates, matching voiceovers, and rendering your high-quality ad.</p>
        
        <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-8 overflow-hidden">
          <div className="bg-brand-orange h-2.5 rounded-full animate-[progress_4s_ease-in-out_forwards]" style={{width: '0%'}}></div>
        </div>
      </div>
    );
  }

  if (isDone) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your video is ready!</h1>
          <p className="text-gray-500">Preview your generated AI advertisement below.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative group mb-6">
            <img src="https://images.unsplash.com/photo-1541123437800-14138090fce5?auto=format&fit=crop&q=80&w=800&h=450" alt="Generated Video Preview" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/30 backdrop-blur-md hover:bg-white/50 w-20 h-20 rounded-full flex items-center justify-center transition border border-white/40 shadow-lg group-hover:scale-110">
                <Play className="h-8 w-8 text-white ml-2" />
              </button>
            </div>
            {/* Watermark/Logo preview */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold shadow opacity-80">
              {businessName || 'Your Logo'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex-1 max-w-xs bg-brand-orange text-white font-bold py-3 px-6 rounded-xl hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 flex justify-center items-center gap-2">
              <Download className="h-5 w-5" />
              Download Video HD
            </button>
            <button className="flex-1 max-w-xs bg-green-50 text-green-700 border border-green-200 font-bold py-3 px-6 rounded-xl hover:bg-green-100 transition flex justify-center items-center gap-2">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Share on WhatsApp
            </button>
            <button onClick={() => { setIsDone(false); setStep(1); }} className="flex-1 max-w-xs bg-white text-gray-700 border border-gray-200 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition flex justify-center items-center gap-2">
              Create Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Build Video Ad</h1>
        <p className="text-gray-500">Provide details about your business to generate a custom AI video ad.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200 border-dashed bg-gray-50">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex-1 py-4 text-center font-bold text-sm border-r border-gray-200 last:border-0 ${step === s ? 'text-brand-orange bg-white border-b-2 border-b-brand-orange' : 'text-gray-400'}`}>
              Step {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleGenerate} className="p-8">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-xl font-bold mb-4">Business Details</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
                  <input required value={businessName} onChange={(e) => setBusinessName(e.target.value)} type="text" placeholder="e.g. Sharma Plumbing" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input required type="text" placeholder="e.g. Pune" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                  <select required value={businessType} onChange={(e) => setBusinessType(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-gray-50 focus:bg-white appearance-none">
                    <option value="" disabled>Select category</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Sliding Window Shop">Sliding Window Shop</option>
                    <option value="Painter">Painter</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="Interior Designer">Interior Designer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Services Offered</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {servicesList.map((service) => (
                    <label key={service} className="flex items-center gap-2 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition has-[:checked]:bg-orange-50 has-[:checked]:border-orange-200 has-[:checked]:ring-1 has-[:checked]:ring-brand-orange">
                      <input type="checkbox" className="w-4 h-4 text-brand-orange rounded border-gray-300 focus:ring-brand-orange transition" />
                      <span className="text-sm font-medium text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-xl font-bold mb-4">Video Settings & Media</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Video Length</label>
                  <div className="flex bg-gray-100 p-1 rounded-xl">
                    <button type="button" className="flex-1 py-2 text-sm font-bold bg-white text-gray-900 rounded-lg shadow-sm">10s</button>
                    <button type="button" className="flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">20s</button>
                    <button type="button" className="flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">30s</button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition bg-gray-50">
                    <option>English</option>
                    <option>Marathi</option>
                    <option>Hindi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Voice Type</label>
                  <div className="flex bg-gray-100 p-1 rounded-xl">
                    <button type="button" className="flex-1 py-2 text-sm font-bold bg-white text-gray-900 rounded-lg shadow-sm">Male</button>
                    <button type="button" className="flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900">Female</button>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Logo</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer text-center group">
                    <UploadCloud className="h-8 w-8 text-brand-orange mb-2 group-hover:scale-110 transition" />
                    <p className="text-sm font-medium text-gray-900">Click to upload logo</p>
                    <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Work Photos (Max 5)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition cursor-pointer text-center group">
                    <UploadCloud className="h-8 w-8 text-brand-orange mb-2 group-hover:scale-110 transition" />
                    <p className="text-sm font-medium text-gray-900">Click to upload photos</p>
                    <p className="text-xs text-gray-500">Showcase your best work</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <h2 className="text-xl font-bold mb-4">Choose a Template</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="relative rounded-xl overflow-hidden border-2 cursor-pointer transition group border-transparent hover:border-orange-400 focus-within:border-brand-orange bg-gray-900 aspect-video">
                    <input type="radio" name="template" className="absolute opacity-0 inset-0 z-20 cursor-pointer" defaultChecked={idx === 1} />
                    <img src={`https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=250&random=${idx}`} alt={`Template ${idx}`} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition" />
                    <div className="absolute inset-0 bg-black/30"></div>
                    
                    <div className="absolute bottom-2 left-3 z-10">
                      <p className="text-white font-bold text-sm">Theme {idx}</p>
                    </div>
                    
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 border-white/50 z-10 flex items-center justify-center group-has-[:checked]:bg-brand-orange group-has-[:checked]:border-brand-orange">
                      <CheckCircle2 className="w-3 h-3 text-white opacity-0 group-has-[:checked]:opacity-100" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition">
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <button type="button" onClick={() => setStep(step + 1)} className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg shrink-0">
                Continue
              </button>
            ) : (
              <button type="submit" className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 shrink-0 flex items-center gap-2">
                <Video className="h-5 w-5" />
                Generate Video
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
