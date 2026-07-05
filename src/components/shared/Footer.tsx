import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0B1021] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#D4AF37]/50">
                <Image src="/logo.jpg" alt="الماهر شو" fill className="object-cover" />
              </div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">الماهر في القرآن</h2>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              البرنامج الأضخم لتنافس حفظة القرآن الكريم حول العالم. منصة تهدف لتعزيز دقة الحفظ وإتقان المتشابهات والارتباط الوثيق بكتاب الله.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg border-b border-[#D4AF37]/30 pb-2 inline-block">روابط سريعة</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors">عن البرنامج</Link></li>
              <li><Link href="/episodes" className="text-gray-400 hover:text-[#D4AF37] transition-colors">جميع الحلقات</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-[#D4AF37] transition-colors">أحدث الأخبار</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-[#D4AF37] transition-colors">الأسئلة الشائعة</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg border-b border-[#D4AF37]/30 pb-2 inline-block">تواصل معنا</h3>
            <ul className="space-y-4 text-gray-400">
              <li>البريد: <a href="mailto:almaherinfo6@gmail.com" className="hover:text-[#D4AF37] transition-colors" dir="ltr">almaherinfo6@gmail.com</a></li>
              <li>الهاتف: <a href="tel:+962772567297" className="hover:text-[#D4AF37] transition-colors" dir="ltr">+962 7 7256 7297</a></li>
              <li className="pt-4">
                <div className="flex gap-4">
                  {/* Social Icons Placeholders */}
                  <a href="#" className="w-10 h-10 relative hover:scale-110 transition-transform">
                    <Image src="/youtube.png" alt="YouTube" fill className="object-contain" />
                  </a>
                  <a href="#" className="w-10 h-10 relative hover:scale-110 transition-transform">
                    <Image src="/instagram.png" alt="Instagram" fill className="object-contain" />
                  </a>
                  <a href="#" className="w-10 h-10 relative hover:scale-110 transition-transform">
                    <Image src="/facebook.png" alt="Facebook" fill className="object-contain" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
          <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} برنامج الماهر في القرآن.</p>
        </div>
      </div>
    </footer>
  );
}
