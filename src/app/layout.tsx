import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import './globals.css';

const cairo = Cairo({ 
  subsets: ['latin', 'arabic'], 
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'الماهر شو | Almaher Show',
  description: 'البرنامج الأضخم لاكتشاف أجمل الأصوات في تلاوة القرآن الكريم. تجربة روحانية تنير القلوب.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-[#0B1021] text-white antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
