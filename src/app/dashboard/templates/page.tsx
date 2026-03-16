import Link from 'next/link';
import { Play } from 'lucide-react';

export default function TemplatesPage() {
  const categories = ['All', 'Plumbing', 'Electrical', 'Sliding Window', 'Home Service'];

  const templates = [
    { id: 1, category: 'Plumbing', title: 'Emergency Leak Fix', img: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400&h=600' },
    { id: 2, category: 'Electrical', title: 'Home Rewiring Promo', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=600' },
    { id: 3, category: 'Sliding Window', title: 'Modern UPVC Windows', img: 'https://images.unsplash.com/photo-1541123437800-14138090fce5?auto=format&fit=crop&q=80&w=400&h=600' },
    { id: 4, category: 'Home Service', title: 'Diwali Cleaning Special', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=600' },
    { id: 5, category: 'Plumbing', title: 'Bathroom Renovation', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=400&h=600' },
    { id: 6, category: 'Electrical', title: 'AC Installation Deal', img: 'https://images.unsplash.com/photo-1558448373-196025e1a3fa?auto=format&fit=crop&q=80&w=400&h=600' }
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Templates Library</h1>
        <p className="text-gray-500">Choose from our professionally designed, AI-ready video templates.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
        {categories.map((cat, i) => (
          <button key={i} className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${i === 0 ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/20' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {templates.map((tpl) => (
          <div key={tpl.id} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-orange-900/10 border border-gray-100 aspect-[9/16] bg-gray-900 transition-all duration-300">
            <img src={tpl.img} alt={tpl.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition duration-300"></div>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur-md hover:bg-white w-14 h-14 rounded-full flex items-center justify-center transition shadow-xl scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-300">
                <Play className="h-5 w-5 text-brand-orange ml-1" />
              </button>
            </div>
            
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold px-3 py-1 rounded-full">{tpl.category}</span>
            </div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-lg font-bold text-white leading-tight mb-4">{tpl.title}</h3>
              <Link href="/dashboard/create" className="block w-full text-center bg-brand-orange hover:bg-brand-orange-dark text-white text-sm font-bold py-2.5 rounded-xl transition shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                Use Template
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
