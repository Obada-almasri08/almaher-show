import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
      
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">عن برنامج الماهر</h1>
        <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded-full opacity-50" />
      </div>

      {/* Vision and Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">نبذة عن البرنامج</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            برنامج "الماهر في القرآن" هو المنصة التنافسية الأولى لحفظة كتاب الله من مختلف أنحاء العالم، حيث يتنافسون في قوة الحفظ والتمكن من الآيات المتشابهات وسرعة الاستحضار.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            نهدف إلى تشجيع حفاظ القرآن الكريم على الإتقان التام والتثبيت، واختبار قدراتهم في أجواء تنافسية فريدة تبرز مكانة الحافظ المتقن لكتاب الله.
          </p>
        </div>
        <div className="bg-[#12182B]/60 border border-white/5 rounded-3xl p-8 relative overflow-hidden h-80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#D4AF37]/20 rounded-full blur-[80px]" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <span className="text-[#D4AF37] text-2xl font-bold">الماهر في القرآن</span>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center text-white">فريق العمل</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          
          {/* Presenter */}
          <div className="bg-[#12182B]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-colors p-6 text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37] mb-4">
              <Image src="/presenter.jpg" alt="أحمد النعلاوي" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">أحمد النعلاوي</h3>
            <p className="text-[#D4AF37]">مقدم البرنامج</p>
          </div>

          {/* Director */}
          <div className="bg-[#12182B]/60 border border-white/10 rounded-2xl overflow-hidden hover:border-[#D4AF37]/50 transition-colors p-6 text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-[#D4AF37] mb-4">
              <Image src="/director.jpg" alt="أسامة مصلح" fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">أسامة مصلح</h3>
            <p className="text-[#D4AF37]">مخرج البرنامج</p>
          </div>

        </div>
      </div>

      {/* Seasons Overview */}
      <div className="bg-[#12182B]/40 rounded-3xl p-10 border border-white/5">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">مواسم البرنامج</h2>
        <div className="space-y-8">
          
          <div className="flex flex-col md:flex-row gap-6 items-center p-6 bg-[#0B1021] rounded-2xl border border-white/5">
            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">مواسم البطولات</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                مواسم خاصة تشهد أقوى التنافسات على مستوى عالٍ، حيث يتوج فيها الفائز بلقب البطولة وتكريمه على إتقانه المتميز.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-4 bg-[#12182B]/60 p-3 rounded-xl border border-[#D4AF37]/30">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]">
                    <Image src="/winner3.jpg" alt="مالك الجمال" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">مالك الجمال</h4>
                    <p className="text-sm text-[#D4AF37]">بطل الموسم الثالث</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[#12182B]/60 p-3 rounded-xl border border-[#D4AF37]/30">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]">
                    <Image src="/winner5.jpg" alt="محمد غانم" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">محمد غانم</h4>
                    <p className="text-sm text-[#D4AF37]">بطل الموسم الخامس</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-center p-6 bg-[#0B1021] rounded-2xl border border-white/5">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">المواسم الودية</h3>
              <p className="text-gray-400 leading-relaxed">
                مواسم ذات طابع تنافسي ودي، تهدف لتعزيز الأجواء الأخوية واستعراض مهارات الحفظ وإتقان المتشابهات.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h2 className="text-3xl font-bold mb-10 text-center text-white">للتواصل</h2>
        <div className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-6 justify-center">
          
          <div className="bg-[#12182B]/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col items-center flex-1 hover:bg-[#12182B] transition-colors">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 text-[#D4AF37] text-xl">
              ✉️
            </div>
            <h3 className="text-lg font-bold text-white mb-2">البريد الإلكتروني</h3>
            <a href="mailto:almaherinfo6@gmail.com" className="text-gray-300 hover:text-[#D4AF37] transition-colors" dir="ltr">almaherinfo6@gmail.com</a>
          </div>

          <div className="bg-[#12182B]/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col items-center flex-1 hover:bg-[#12182B] transition-colors">
            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-4 text-[#D4AF37] text-xl">
              📞
            </div>
            <h3 className="text-lg font-bold text-white mb-2">رقم الهاتف</h3>
            <a href="tel:+962772567297" className="text-gray-300 hover:text-[#D4AF37] transition-colors" dir="ltr">+962 7 7256 7297</a>
          </div>

        </div>
      </div>

    </div>
  );
}
