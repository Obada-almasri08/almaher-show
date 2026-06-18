import { getSeasonById } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function SeasonPage({ params }: { params: Promise<{ seasonId: string }> }) {
  const { seasonId } = await params;
  const season = getSeasonById(seasonId);

  if (!season) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1021] text-white pb-24">
      {/* Header Section */}
      <div className="relative py-24 px-4 overflow-hidden border-b border-white/5 bg-[#12182B]/30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link href="/" className="inline-block mb-8 text-[#D4AF37] hover:text-white transition-colors">
            &rarr; العودة للرئيسية
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-[#D4AF37] mb-6">{season.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {season.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        {/* Judges Section */}
        {season.judges.length > 0 && (
          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              فريق البرنامج
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {season.judges.map((judge) => (
                <div key={judge.id} className="group relative rounded-2xl overflow-hidden bg-[#12182B]/50 border border-white/5 hover:border-[#D4AF37]/30 transition-all p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all">
                    <img src={judge.imageUrl} alt={judge.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{judge.name}</h3>
                  <p className="text-[#D4AF37] mb-4">{judge.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{judge.bio}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Participants Section */}
        {season.participants.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              المشاركون
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {season.participants.map((participant) => (
                <div key={participant.id} className="group rounded-2xl overflow-hidden bg-[#12182B]/40 border border-white/5 hover:bg-[#1A2235]/80 hover:border-[#D4AF37]/30 transition-all cursor-pointer">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img src={participant.imageUrl} alt={participant.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1021] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-[#D4AF37] text-sm mb-1">{participant.country}</p>
                      <h3 className="text-xl font-bold text-white">{participant.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {season.participants.length === 0 && season.judges.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            <p className="text-xl">سيتم إضافة تفاصيل هذا الموسم قريباً...</p>
          </div>
        )}
      </div>
    </main>
  );
}
