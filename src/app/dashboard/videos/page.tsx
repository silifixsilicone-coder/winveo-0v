import Link from 'next/link';
import { Play, Download, Share2, MoreVertical, Plus } from 'lucide-react';

export default function MyVideosPage() {
  const videos = [
    {
      id: 1,
      title: 'Plumbing Emergency Ad',
      business: 'Sharma Plumbing',
      date: 'Oct 24, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '15s'
    },
    {
      id: 2,
      title: 'Window Repair Promo',
      business: 'Desai Glass Works',
      date: 'Oct 20, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1541123437800-14138090fce5?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '30s'
    },
    {
      id: 3,
      title: 'Electrical Services Local',
      business: 'Kumar Electricians',
      date: 'Oct 15, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '20s'
    },
    {
      id: 4,
      title: 'House Painting Diwali Offer',
      business: 'Colors Pro',
      date: 'Oct 10, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '15s'
    }
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Videos</h1>
          <p className="text-gray-500">Manage and share all your generated advertisements.</p>
        </div>
        <Link href="/dashboard/create" className="bg-brand-orange text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Create New
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
            {/* Thumbnail */}
            <div className="relative aspect-video bg-gray-900 w-full overflow-hidden">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              
              <div className="absolute top-3 right-3">
                <button className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/60 transition">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                {video.duration}
              </div>
              
              <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 scale-75 group-hover:scale-100">
                <Play className="h-5 w-5 text-white ml-1" />
              </button>
            </div>
            
            {/* Details & Actions */}
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-1 truncate">{video.title}</h3>
              <p className="text-sm font-medium text-brand-orange mb-2">{video.business}</p>
              <p className="text-xs text-gray-500 mb-5">Generated on {video.date}</p>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-orange-50 hover:bg-orange-100 text-brand-orange py-2.5 rounded-xl font-medium text-sm transition flex items-center justify-center gap-2 border border-orange-200">
                  <Download className="h-4 w-4" /> Download
                </button>
                <button className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 py-2.5 rounded-xl font-medium text-sm transition flex items-center justify-center gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
