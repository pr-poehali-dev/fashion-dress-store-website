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
    color: "#1a0a1a",
    accent: "#b89acc",
    dresses: [
      { name: "Velvet Noir", price: "89 900 ₽", tag: "Хит", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/9f7da10c-0222-40d1-8d2a-f879b2700fc9.jpg" },
      { name: "Plum Reverie", price: "74 000 ₽", tag: "Новинка", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/eff36fd7-d585-4b9a-9b15-5df9e4bdc0d5.jpg" },
      { name: "Forest Emerald", price: "96 500 ₽", tag: "Эксклюзив", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/0767e410-966d-4f34-b88a-d5d681efb8fb.jpg" },
      { name: "Dark Bloom", price: "112 000 ₽", tag: "Премиум", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/b3bcb9c9-2a76-4f73-8056-d24eb5df97fe.jpg" },
    ],
  },
  {
    id: 2,
    title: "Golden Hour",
    subtitle: "Весна / Лето 2026",
    type: "Сезонные",
    desc: "Лёгкость предзакатного света. Молочные и золотые тона, струящиеся силуэты — для тех, кто живёт настоящим.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg",
    color: "#1a1200",
    accent: "#e8c97a",
    dresses: [
      { name: "Soleil Doré", price: "67 000 ₽", tag: "Тренд 2026", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/a7a2b75b-8d7a-459d-91af-21b654a698f4.jpg" },
      { name: "Ivory Bloom", price: "58 500 ₽", tag: "Новинка", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/62cd2341-03ee-4f87-9b75-2ced77b088a2.jpg" },
      { name: "Butter Maxi", price: "79 000 ₽", tag: "Хит", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/f7e51751-bbed-439b-9bbc-c45bf30be7d4.jpg" },
      { name: "Cream Midi", price: "54 000 ₽", tag: "Лето 2026", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/9e328035-eb9e-49fe-beb9-5dcd1e79d7e1.jpg" },
    ],
  },
  {
    id: 3,
    title: "La Femme Rouge",
    subtitle: "Тематическая · Страсть",
    type: "Тематические",
    desc: "Коллекция для тех, кто не боится быть замеченной. Алые, бордовые и пурпурные оттенки — сила и чувственность.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg",
    color: "#1a0500",
    accent: "#e84c4c",
    dresses: [
      { name: "Rouge Satin", price: "98 000 ₽", tag: "Эксклюзив", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/ca69858c-c519-4db9-870c-bcf2f74ff231.jpg" },
      { name: "Velvet Passion", price: "82 500 ₽", tag: "Хит", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/3cf3fa7d-83a6-40ac-8a98-9f3b7d065921.jpg" },
      { name: "Crimson Flow", price: "76 000 ₽", tag: "Новинка", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/ee86352f-1dae-4296-a226-e123d2e561f3.jpg" },
      { name: "Wine Couture", price: "119 000 ₽", tag: "Премиум", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/941ae61d-35e4-4d60-88c9-437704985ddd.jpg" },
    ],
  },
  {
    id: 4,
    title: "Celestial Blue",
    subtitle: "Тематическая · Небо",
    type: "Тематические",
    desc: "Вдохновлённая безграничностью. Сапфировые и полуночные тона с отливом жемчуга — для особых вечеров.",
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/1d6c0d4f-6439-4afc-bcb1-2d16f589cdcf.jpg",
    color: "#00071a",
    accent: "#7aa8e8",
    dresses: [
      { name: "Starlight Gown", price: "134 000 ₽", tag: "Эксклюзив", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/08a37bd0-6383-4e60-8c7f-560838232a32.jpg" },
      { name: "Royal Sapphire", price: "91 000 ₽", tag: "Хит", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8930bc27-4abc-4896-999a-34a89ba45c96.jpg" },
      { name: "Navy Constellation", price: "88 500 ₽", tag: "Новинка", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/d4f242db-3912-418e-ac8f-590f069cc444.jpg" },
      { name: "Indigo Cascade", price: "77 000 ₽", tag: "Тренд", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/ddee2f51-b138-4171-ad33-d83599c75738.jpg" },
    ],
  },
];

export default function Collections() {
  const [tab, setTab] = useState("Все");
  const [expanded, setExpanded] = useState<number | null>(null);

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

        <div className="space-y-6">
          {filtered.map((col) => {
            const isOpen = expanded === col.id;
            return (
              <div key={col.id} className="border border-[#2a2010] overflow-hidden transition-all duration-500">
                {/* Заголовок коллекции */}
                <div
                  className="group relative overflow-hidden cursor-pointer"
                  onClick={() => setExpanded(isOpen ? null : col.id)}
                >
                  <div className="aspect-[21/7] md:aspect-[21/6] overflow-hidden">
                    <img
                      src={col.img}
                      alt={col.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to right, ${col.color}f0 0%, ${col.color}aa 50%, transparent 100%)` }}
                  />
                  <div className="absolute inset-0 flex items-center px-8 md:px-12 justify-between">
                    <div>
                      <p className="text-[0.6rem] tracking-[0.3em] uppercase mb-2" style={{ color: col.accent }}>
                        {col.subtitle}
                      </p>
                      <h3 className="font-display text-3xl md:text-5xl text-ivory">{col.title}</h3>
                      <p className="text-[#9a8060] text-sm mt-2 max-w-sm hidden md:block leading-relaxed">{col.desc}</p>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-[0.6rem] tracking-[0.2em] text-[#5a4a30] uppercase">
                        {col.dresses.length} платья
                      </span>
                      <div
                        className="w-10 h-10 border flex items-center justify-center transition-all duration-300"
                        style={{ borderColor: col.accent, color: col.accent }}
                      >
                        <Icon name={isOpen ? "ChevronUp" : "ChevronDown"} size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Платья внутри коллекции */}
                {isOpen && (
                  <div className="bg-[#0a0a0a] border-t border-[#2a2010]">
                    <div className="p-6 md:p-8">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {col.dresses.map((dress, i) => (
                          <div key={i} className="group catalog-card relative overflow-hidden">
                            <div className="aspect-[3/4] overflow-hidden">
                              <img
                                src={dress.img}
                                alt={dress.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute top-3 left-3">
                              <span
                                className="text-[0.55rem] tracking-[0.15em] uppercase px-2 py-0.5 font-semibold"
                                style={{ background: col.accent, color: "#0d0d0d" }}
                              >
                                {dress.tag}
                              </span>
                            </div>
                            <div className="card-overlay absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d44] to-transparent flex flex-col justify-end p-4">
                              <h4 className="font-display text-lg text-ivory leading-tight">{dress.name}</h4>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm font-semibold" style={{ color: col.accent }}>
                                  {dress.price}
                                </span>
                                <button
                                  className="text-[0.55rem] tracking-[0.15em] uppercase px-3 py-1.5 transition-all"
                                  style={{ border: `1px solid ${col.accent}`, color: col.accent }}
                                  onMouseEnter={e => {
                                    (e.currentTarget as HTMLButtonElement).style.background = col.accent;
                                    (e.currentTarget as HTMLButtonElement).style.color = "#0d0d0d";
                                  }}
                                  onMouseLeave={e => {
                                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                                    (e.currentTarget as HTMLButtonElement).style.color = col.accent;
                                  }}
                                >
                                  Купить
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex justify-end">
                        <Link
                          to="/catalog"
                          className="text-xs tracking-[0.2em] uppercase flex items-center gap-2 transition-colors"
                          style={{ color: col.accent }}
                        >
                          Все платья коллекции <Icon name="ArrowRight" size={13} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="mt-20 border-y border-[#2a2010] py-6 overflow-hidden">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {["Haute Couture", "Luxury Fashion", "2025 · 2026", "Maison Collection", "Hand Crafted", "Exclusive Design",
              "Haute Couture", "Luxury Fashion", "2025 · 2026", "Maison Collection", "Hand Crafted", "Exclusive Design"].map((t, i) => (
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
