import { seasonsData } from '@/lib/data';
import Link from 'next/link';

export default function EpisodesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">مكتبة الميديا والحلقات</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">شاهد جميع الحلقات، التصفيات، وأبرز الكواليس من جميع مواسم البرنامج.</p>
      </div>

      <div className="space-y-24">
        {seasonsData.map((season) => (
          <div key={season.id}>
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <h2 className="text-3xl font-bold text-white">{season.title}</h2>
              <Link href={`/seasons/${season.id}`} className="text-[#D4AF37] hover:underline">تفاصيل الموسم</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((ep) => (
                <div key={ep} className="group cursor-pointer rounded-2xl overflow-hidden bg-[#12182B] border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                  <div className="aspect-video bg-gray-900 relative">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center pl-1 shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4l12 6-12 6z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-white mb-2">الحلقة {ep} - {season.title}</h3>
                    <p className="text-sm text-gray-400">تاريخ العرض: 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
