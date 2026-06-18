import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="relative z-20 space-y-8 max-w-4xl flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 mb-4 rounded-full overflow-hidden border-4 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <Image 
              src="/logo.jpg" 
              alt="شعار الماهر في القرآن" 
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1 className="sr-only">
            الماهر في القرآن
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            البرنامج الأضخم للتنافس بين حفظة كتاب الله في قوة الحفظ وإتقان المتشابهات. مسابقة قرآنية فريدة تعزز التمكن من القرآن الكريم.
          </p>
          <div className="pt-8">
            <Link 
              href="/seasons/season-3"
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-lg rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
            >
              اكتشف الموسم الأخير
            </Link>
          </div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">مواسم البرنامج</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((season) => (
            <Link 
              href={`/seasons/season-${season}`} 
              key={season} 
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 block"
            >
              {/* Glass Background */}
              <div className="absolute inset-0 bg-[#12182B]/60 backdrop-blur-xl border border-white/5 rounded-3xl transition-all duration-500 group-hover:bg-[#1A2235]/80 group-hover:border-[#D4AF37]/30" />
              
              <div className="relative p-10 h-[450px] flex flex-col justify-end z-10">
                {/* Glow Effect on Hover */}
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-[60px] group-hover:bg-[#D4AF37]/20 transition-all duration-500" />
                
                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                  الموسم {season === 1 ? 'الأول' : season === 2 ? 'الثاني' : 'الثالث'}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors text-lg leading-relaxed">
                  تعرف على لجنة التحكيم والمشاركين وأبرز اللحظات والمنافسات في هذا الموسم.
                </p>
                
                {/* Custom arrow indicator */}
                <div className="mt-8 flex items-center text-[#D4AF37] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span className="font-semibold ml-2">التفاصيل</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Summary Section */}
      <section className="py-24 bg-[#12182B]/30 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">عن <span className="text-[#D4AF37]">البرنامج</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                برنامج الماهر في القرآن هو المنصة الأولى للتنافس بين حفظة القرآن الكريم. نهدف إلى تعزيز دقة الحفظ والتمكن من الآيات المتشابهات، وتشجيع المتقنين على إبراز قدراتهم في استحضار الآيات في أجواء تنافسية فريدة.
              </p>
              <Link href="/about" className="inline-flex items-center text-[#D4AF37] hover:text-white font-bold transition-colors">
                اكتشف المزيد عن رؤيتنا &larr;
              </Link>
            </div>
            <div className="bg-[#0B1021] border border-[#D4AF37]/20 rounded-2xl h-72 flex items-center justify-center">
              <span className="text-gray-500">فيديو تعريفي قصير</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#D4AF37]/10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">هل أنت متقن لحفظ كتاب الله؟</h2>
          <p className="text-xl text-gray-300 mb-10">
            انضم إلينا في الموسم القادم وكن أنت الماهر القادم في القرآن.
          </p>
          <Link 
            href="/apply"
            className="inline-block px-12 py-4 bg-white text-black font-bold text-xl rounded-full hover:bg-[#D4AF37] transition-colors shadow-lg"
          >
            سجل الآن
          </Link>
        </div>
      </section>
    </main>
  );
}
