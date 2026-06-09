import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const CATEGORIES = ["Все", "Тренды", "Советы", "Коллекции", "Образы"];

const POSTS = [
  {
    id: 1,
    title: "Главные тренды платьев 2025–2026: что носить этой осенью",
    category: "Тренды",
    date: "5 июня 2025",
    read: "6 мин",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8548fa76-bb6e-4c1c-bb70-06b1855f6aa0.jpg",
    desc: "Бархат возвращается с новой силой, молочные тона доминируют в коллекциях, а скульптурные плечи снова в игре. Разбираем ключевые тренды сезона.",
    featured: true,
  },
  {
    id: 2,
    title: "Как выбрать платье для вечернего выхода: полный гид",
    category: "Советы",
    date: "28 мая 2025",
    read: "8 мин",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/1d6c0d4f-6439-4afc-bcb1-2d16f589cdcf.jpg",
    desc: "Силуэт, ткань, аксессуары — три кита идеального вечернего образа. Мы собрали всё, что нужно знать перед важным выходом.",
    featured: false,
  },
  {
    id: 3,
    title: "Молочный тон: почему ivory — цвет года",
    category: "Тренды",
    date: "19 мая 2025",
    read: "4 мин",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg",
    desc: "От Valentino до отечественных домов — айвори захватил подиумы. Как носить этот тон и не выглядеть бесцветно.",
    featured: false,
  },
  {
    id: 4,
    title: "Коллекция Midnight Garden: за кулисами создания",
    category: "Коллекции",
    date: "10 мая 2025",
    read: "10 мин",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg",
    desc: "Как рождается коллекция? Главный дизайнер MAISON Анна Морозова рассказывает о вдохновении, материалах и решениях.",
    featured: false,
  },
  {
    id: 5,
    title: "5 образов для новогодней вечеринки 2026",
    category: "Образы",
    date: "2 мая 2025",
    read: "5 мин",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8a2fe32d-b476-4bcb-be70-fc569b401f68.jpg",
    desc: "Изумрудный, полуночно-синий или классический чёрный? Мы собрали пять безотказных образов для главного праздника года.",
    featured: false,
  },
];

export default function Blog() {
  const [cat, setCat] = useState("Все");

  const filtered = POSTS.filter((p) => cat === "Все" || p.category === cat);
  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      <div className="pt-28 pb-12 text-center border-b border-[#2a2010]">
        <p className="text-[0.6rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-3">Советы и тренды</p>
        <h1 className="font-display text-5xl md:text-6xl text-ivory">Блог</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`filter-tag ${cat === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Featured */}
        {featured && (
          <div className="group relative overflow-hidden mb-10">
            <div className="aspect-[21/9] md:aspect-[21/8] overflow-hidden">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d88] to-transparent flex items-end p-8 md:p-12">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1 bg-[#c9a84c] text-[#0d0d0d] font-semibold">
                    {featured.category}
                  </span>
                  <span className="text-[#5a4a30] text-xs">{featured.date} · {featured.read}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4 leading-tight">{featured.title}</h2>
                <p className="text-[#7a6a50] text-sm leading-relaxed mb-6 hidden md:block">{featured.desc}</p>
                <button className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e8c97a] flex items-center gap-2 transition-colors">
                  Читать статью <Icon name="ArrowRight" size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden mb-4">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.55rem] tracking-[0.15em] uppercase text-[#c9a84c]">{post.category}</span>
                <span className="text-[#3a2a10] text-xs">·</span>
                <span className="text-[#3a2a10] text-xs">{post.read}</span>
              </div>
              <h3 className="font-display text-xl text-ivory mb-2 leading-snug group-hover:text-[#e8c97a] transition-colors">
                {post.title}
              </h3>
              <p className="text-[#5a4a30] text-xs leading-relaxed line-clamp-2">{post.desc}</p>
              <p className="text-[#3a2a10] text-xs mt-3">{post.date}</p>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-[#4a3a20]">Статьи не найдены</p>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-20 border border-[#2a2010] p-10 md:p-16 text-center">
          <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-4">Будьте в курсе</p>
          <h3 className="font-display text-3xl md:text-4xl text-ivory mb-4">Тренды — прямо в ваш почтовый ящик</h3>
          <p className="text-[#5a4a30] text-sm mb-8">Новые коллекции, советы стилистов и закрытые предложения для подписчиков.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 bg-transparent border border-[#2a2010] px-4 py-3 text-ivory text-sm placeholder:text-[#3a2a10] focus:outline-none focus:border-[#c9a84c] transition-colors"
            />
            <button className="px-6 py-3 bg-[#c9a84c] text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e8c97a] transition-colors whitespace-nowrap">
              Подписаться
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
