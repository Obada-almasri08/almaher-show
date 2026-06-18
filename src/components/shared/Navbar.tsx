import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const links = [
    { name: 'الرئيسية', path: '/' },
    { name: 'عن البرنامج', path: '/about' },
    { name: 'الحلقات', path: '/episodes' },
    { name: 'الأخبار', path: '/news' },
    { name: 'الأسئلة الشائعة', path: '/faq' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#0B1021]/80 backdrop-blur-lg border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/50">
              <Image 
                src="/logo.jpg" 
                alt="شعار الماهر شو" 
                fill 
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold text-[#D4AF37]">الماهر</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link 
              href="/apply"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              شارك معنا
            </Link>
          </div>

          {/* Mobile Menu Button (simplified for now) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
