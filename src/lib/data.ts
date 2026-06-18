import { Season } from '../types';

export const seasonsData: Season[] = [
  {
    id: "season-1",
    title: "الموسم الأول",
    year: 2022,
    description: "بداية التنافس القوي بين حفظة كتاب الله، لاختبار قوة الحفظ وإتقان المتشابهات.",
    coverImage: "/images/season1-cover.jpg",
    judges: [
      {
        id: "presenter-1",
        name: "أحمد النعلاوي",
        role: "مقدم البرنامج",
        imageUrl: "/presenter.jpg",
        bio: "الإعلامي المتألق ومقدم برنامج الماهر في القرآن، يرافق المشتركين في رحلتهم التنافسية."
      }
    ],
    participants: []
  },
  {
    id: "season-2",
    title: "الموسم الثاني",
    year: 2023,
    description: "استمرار مسيرة التنافس والتميز مع نخبة جديدة من المتقنين لحفظ كتاب الله.",
    coverImage: "/images/season2-cover.jpg",
    judges: [
      {
        id: "presenter-1",
        name: "أحمد النعلاوي",
        role: "مقدم البرنامج",
        imageUrl: "/presenter.jpg",
        bio: "الإعلامي المتألق ومقدم برنامج الماهر في القرآن، يرافق المشتركين في رحلتهم التنافسية."
      }
    ],
    participants: []
  },
  {
    id: "season-3",
    title: "الموسم الثالث",
    year: 2024,
    description: "الموسم القادم الذي نترقبه بشغف لمزيد من التنافس والإتقان.",
    coverImage: "/images/season3-cover.jpg",
    judges: [],
    participants: []
  }
];

export function getSeasonById(id: string): Season | undefined {
  return seasonsData.find(season => season.id === id);
}
