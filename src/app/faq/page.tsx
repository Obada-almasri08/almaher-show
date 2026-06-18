export default function FAQPage() {
  const faqs = [
    { q: 'متى يبدأ التسجيل للموسم القادم؟', a: 'يتم الإعلان عن موعد فتح باب التسجيل عبر صفحاتنا الرسمية على منصات التواصل الاجتماعي وفي قسم الأخبار بالموقع.' },
    { q: 'ما هي الشروط الأساسية للمشاركة؟', a: 'يجب أن يكون المتقدم متقناً لأحكام التلاوة والتجويد، ويمتلك صوتاً حسن الأداء. التفاصيل العمرية تحدد مع كل موسم.' },
    { q: 'هل يمكن المشاركة من خارج الأردن؟', a: 'حالياً، وفي هذا الموسم، المشاركة مقتصرة فقط على المقيمين داخل المملكة الأردنية الهاشمية.' },
    { q: 'كيف يتم اختيار المتأهلين؟', a: 'تمر عملية الاختيار بعدة مراحل تبدأ بفرز الفيديوهات المرسلة عبر الموقع، ثم مقابلات عن بعد، وصولاً إلى التصفيات النهائية المباشرة.' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">الأسئلة الشائعة</h1>
        <p className="text-xl text-gray-300">إجابات لأكثر الأسئلة التي تصلنا حول البرنامج.</p>
      </div>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#12182B]/60 border border-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <span className="text-[#D4AF37]">Q.</span> {faq.q}
            </h3>
            <p className="text-gray-300 leading-relaxed pl-8">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-[#12182B]/40 p-8 rounded-2xl border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-4">لم تجد إجابة لسؤالك؟</h3>
        <p className="text-gray-400 mb-6">يمكنك التواصل معنا مباشرة عبر البريد الإلكتروني وسنقوم بالرد عليك في أقرب وقت.</p>
        <a href="mailto:info@almahershow.com" className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition-colors font-bold">
          تواصل معنا
        </a>
      </div>
    </div>
  );
}
