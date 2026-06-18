import Link from 'next/link';

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: 'بدء التسجيل للموسم الرابع من الماهر شو قريباً',
      date: '15 أكتوبر 2025',
      summary: 'استعدوا للموسم الأضخم، حيث سيتم فتح باب التسجيل قريباً بمشاركة دولية واسعة.',
      category: 'إعلانات'
    },
    {
      id: 2,
      title: 'المتأهلون للنهائيات في الموسم الثالث يبهرون الحضور',
      date: '2 سبتمبر 2024',
      summary: 'في ليلة قرآنية مهيبة، قدم المتسابقون أداءً استثنائياً في الحلقة قبل الختامية.',
      category: 'أخبار الحلقات'
    },
    {
      id: 3,
      title: 'إطلاق النسخة الجديدة من موقع الماهر في القرآن',
      date: '10 أغسطس 2024',
      summary: 'بهدف تسهيل وصول المشاهدين للحلقات ومتابعة أحدث أخبار المشتركين.',
      category: 'تحديثات'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">المركز الإعلامي</h1>
        <p className="text-xl text-gray-300">أحدث الأخبار، التغطيات الصحفية، وكواليس البرنامج.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item) => (
          <div key={item.id} className="group rounded-2xl overflow-hidden bg-[#12182B] border border-white/5 hover:border-[#D4AF37]/30 transition-all flex flex-col h-full">
            <div className="aspect-video bg-gray-800 relative overflow-hidden">
              {/* Placeholder image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1021] to-[#1a2235]" />
              <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                {item.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-gray-500 text-sm mb-3">{item.date}</p>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {item.summary}
              </p>
              <div className="mt-auto">
                <Link href="#" className="text-[#D4AF37] hover:text-white font-medium flex items-center gap-2 transition-colors">
                  <span>اقرأ المزيد</span>
                  <span>&larr;</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
