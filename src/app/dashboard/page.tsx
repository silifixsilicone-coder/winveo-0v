import Link from 'next/link';
import { Video, Download, Share2, Play, Users, CreditCard, Film, Plus } from 'lucide-react';

export default function DashboardPage() {
  const recentVideos = [
    {
      id: 1,
      title: 'Plumbing Emergency Ad',
      date: 'Oct 24, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '15s',
    },
    {
      id: 2,
      title: 'Window Repair Promo',
      date: 'Oct 20, 2024',
      thumbnail: 'https://images.unsplash.com/photo-1541123437800-14138090fce5?auto=format&fit=crop&q=80&w=400&h=250',
      duration: '30s',
    }
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
        </div>
        <Link href="/dashboard/create" className="bg-brand-orange text-white px-5 py-2.5 rounded-xl font-medium hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30 flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Create New Video
        </Link>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { title: 'Total Videos Created', value: '12', icon: Film, color: 'text-orange-600', bg: 'bg-orange-50' },
          { title: 'Remaining Credits', value: '8', icon: CreditCard, color: 'text-brand-orange', bg: 'bg-orange-100/50' },
          { title: 'Active Plan', value: 'Starter Pack', icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-4 rounded-xl ${stat.bg}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-gray-500 font-medium text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Videos Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Recent Videos</h2>
          <Link href="/dashboard/videos" className="text-brand-orange font-medium text-sm hover:underline">View all</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentVideos.length > 0 ? (
            recentVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition group">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gray-900 w-full overflow-hidden">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
                  
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  
                  <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 scale-75 group-hover:scale-100">
                    <Play className="h-5 w-5 text-white ml-1" />
                  </button>
                </div>
                
                {/* Details & Actions */}
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 truncate">{video.title}</h3>
                  <p className="text-xs text-gray-500 mb-4">Created on {video.date}</p>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-medium text-sm transition flex items-center justify-center gap-1.5 border border-gray-200">
                      <Play className="h-4 w-4" /> View
                    </button>
                    <button className="bg-orange-50 hover:bg-orange-100 text-brand-orange p-2 px-3 rounded-lg font-medium text-sm transition flex items-center justify-center border border-orange-100">
                      <Download className="h-4 w-4" />
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 p-2 px-3 rounded-lg font-medium text-sm transition flex items-center justify-center border border-gray-200">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white rounded-2xl p-12 text-center border border-gray-200 border-dashed">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No videos yet</h3>
              <p className="text-gray-500 mb-6 max-w-sm mx-auto">Create your first professional video ad in just a few minutes using our AI builder.</p>
              <Link href="/dashboard/create" className="inline-flex bg-brand-orange text-white px-5 py-2.5 rounded-full font-medium hover:bg-brand-orange-dark transition shadow-lg shadow-brand-orange/30">
                Create First Video
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
