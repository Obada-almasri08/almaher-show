export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">عن برنامج الماهر</h1>
        <div className="h-1 w-24 bg-[#D4AF37] mx-auto rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-white">الرؤية والرسالة</h2>
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
            <span className="text-[#D4AF37] text-2xl font-bold">صورة أو فيديو تعريفي</span>
          </div>
        </div>
      </div>

      <div className="bg-[#12182B]/40 rounded-3xl p-10 border border-white/5 mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">آلية المسابقة</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'التصفيات الأولية', desc: 'استقبال المشاركات عبر الموقع الإلكتروني وفرزها من قبل لجان مختصة.' },
            { step: '2', title: 'العروض المباشرة', desc: 'مواجهات مباشرة بين المشتركين أمام لجنة التحكيم المكونة من كبار القراء.' },
            { step: '3', title: 'الحلقة الختامية', desc: 'تتويج الفائز بلقب "الماهر" بجوائز قيمة في حفل قرآني مهيب.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 mx-auto bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl font-bold text-[#D4AF37] mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
