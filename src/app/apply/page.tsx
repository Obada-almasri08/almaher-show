export default function ApplyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6">شارك معنا</h1>
        <p className="text-xl text-gray-300">سجل الآن وكن جزءاً من مسيرة الماهر في القرآن للموسم القادم.</p>
      </div>

      <div className="bg-[#12182B]/60 border border-white/5 rounded-3xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">استمارة التسجيل الإلكترونية</h2>
        
        <form className="space-y-6">
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 mb-6">
            <p className="text-[#D4AF37] text-sm text-center font-bold">
              ملاحظة هامة: التسجيل متاح حالياً للمقيمين داخل المملكة الأردنية الهاشمية فقط.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">الاسم الرباعي</label>
              <input type="text" className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="أدخل اسمك الكامل" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">تاريخ الميلاد</label>
              <input type="date" className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">الجنسية</label>
              <input type="text" className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" placeholder="أدخل جنسيتك" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">المحافظة</label>
              <select className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors">
                <option value="amman">العاصمة - عمان</option>
                <option value="irbid">إربد</option>
                <option value="zarqa">الزرقاء</option>
                <option value="mafraq">المفرق</option>
                <option value="jerash">جرش</option>
                <option value="ajloun">عجلون</option>
                <option value="balqa">البلقاء</option>
                <option value="madaba">مأدبا</option>
                <option value="karak">الكرك</option>
                <option value="tafilah">الطفيلة</option>
                <option value="maan">معان</option>
                <option value="aqaba">العقبة</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">رقم الهاتف (مع الرمز الدولي)</label>
              <input type="tel" className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" dir="ltr" placeholder="+000 0000 000" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">البريد الإلكتروني</label>
              <input type="email" className="w-full bg-[#0B1021] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors" dir="ltr" placeholder="email@example.com" />
            </div>
          </div>

          <div className="pt-6">
            <button type="button" className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
