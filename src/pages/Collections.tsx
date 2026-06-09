import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const TABS = ["Все", "Сезонные", "Тематические"];

const COLLECTIONS = [
  {
    id: 1,
    title: "Midnight Garden",
    subtitle: "Осень / Зима 2025",
    type: "Сезонные",
    desc: "Тёмная романтика глубокого леса. Бархат, шёлк и невесомые вышивки — для тех, кто ищет красоту в тени.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8548fa76-bb6e-4c1c-bb70-06b1855f6aa0.jpg",
    count: 14,
    color: "#1a0a1a",
  },
  {
    id: 2,
    title: "Golden Hour",
    subtitle: "Весна / Лето 2026",
    type: "Сезонные",
    desc: "Лёгкость предзакатного света. Молочные и золотые тона, струящиеся силуэты — для тех, кто живёт настоящим.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg",
    count: 11,
    color: "#1a1200",
  },
  {
    id: 3,
    title: "La Femme Rouge",
    subtitle: "Тематическая · Страсть",
    type: "Тематические",
    desc: "Коллекция для тех, кто не боится быть замеченной. Алые, бордовые и пурпурные оттенки — сила и чувственность.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg",
    count: 9,
    color: "#1a0a00",
  },
  {
    id: 4,
    title: "Celestial Blue",
    subtitle: "Тематическая · Небо",
    type: "Тематические",
    desc: "Вдохновлённая безграничностью. Сапфировые и полуночные тона с отливом жемчуга — для особых вечеров.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/1d6c0d4f-6439-4afc-bcb1-2d16f589cdcf.jpg",
    count: 12,
    color: "#00071a",
  },
];

export default function Collections() {
  const [tab, setTab] = useState("Все");

  const filtered = COLLECTIONS.filter((c) => tab === "Все" || c.type === tab);

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      <div className="pt-28 pb-12 text-center border-b border-[#2a2010]">
        <p className="text-[0.6rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-3">Наши работы</p>
        <h1 className="font-display text-5xl md:text-6xl text-ivory">Коллекции</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-2 mb-12 flex-wrap">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`filter-tag ${tab === t ? "active" : ""}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((col) => (
            <div key={col.id} className="group relative overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={col.img}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ background: `linear-gradient(to top, ${col.color}ee 0%, ${col.color}88 40%, transparent 100%)` }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-[0.6rem] tracking-[0.3em] text-[#c9a84c] uppercase mb-2">{col.subtitle}</p>
                <h3 className="font-display text-3xl md:text-4xl text-ivory mb-3">{col.title}</h3>
                <p className="text-[#9a8060] text-sm leading-relaxed mb-5 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-400 -translate-y-2 group-hover:translate-y-0">
                  {col.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.65rem] tracking-[0.2em] text-[#7a6a50] uppercase">{col.count} платьев</span>
                  <Link
                    to="/catalog"
                    className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e8c97a] flex items-center gap-2 transition-colors"
                  >
                    Смотреть <Icon name="ArrowRight" size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 border-y border-[#2a2010] py-6 overflow-hidden">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {["Haute Couture", "Luxury Fashion", "2025 · 2026", "Maison Collection", "Hand Crafted", "Exclusive Design"].concat(
              ["Haute Couture", "Luxury Fashion", "2025 · 2026", "Maison Collection", "Hand Crafted", "Exclusive Design"]
            ).map((t, i) => (
              <span key={i} className="text-[0.65rem] tracking-[0.3em] text-[#3a2a10] uppercase">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <Footer />
    </div>
  );
}
