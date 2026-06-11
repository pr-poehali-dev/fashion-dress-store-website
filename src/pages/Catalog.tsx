import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const STYLES = ["Все", "Летние", "Вечерние", "Коктейльные", "Повседневные", "Свадебные", "Деловые"];
const SIZES = ["Все", "XS", "S", "M", "L", "XL"];

const DRESSES = [
  { id: 7, name: "Soleil en Points", price: 58000, style: "Летние", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/cd3cda5f-f0ca-417b-9e43-876d4d7fe7fa.jpg", tag: "Лето 2026", trend: "Горошек · Жёлтое кружево" },
  { id: 8, name: "Dentelle Dorée", price: 72000, style: "Летние", sizes: ["S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/10a37d71-507a-40e5-ac79-997104ffeddb.jpg", tag: "Тренд 2025", trend: "Кружево · Горошек миди" },
  { id: 9, name: "Golden Pois Maxi", price: 84500, style: "Летние", sizes: ["XS", "S", "M"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/38e7382d-fac0-4af3-adef-d80cdc844884.jpg", tag: "Новинка", trend: "Макси · Шёлк · Горошек" },
  { id: 10, name: "Pois Cocktail", price: 49000, style: "Летние", sizes: ["S", "M", "L", "XL"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/caff969c-95a3-476c-8660-de5d22b302cc.jpg", tag: "Хит лета", trend: "Горошек · Жёлтое кружево" },
  { id: 1, name: "Nocturne Velvet", price: 89900, style: "Вечерние", sizes: ["S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8548fa76-bb6e-4c1c-bb70-06b1855f6aa0.jpg", tag: "Новинка", trend: "Бархат 2025" },
  { id: 2, name: "Ivory Reverie", price: 74500, style: "Повседневные", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg", tag: "Тренд", trend: "Молочный тон" },
  { id: 11, name: "Ice Slip", price: 44000, style: "Повседневные", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/5174842f-d6a6-47d5-ad47-9de0cf0f6e9d.jpg", tag: "Тренд 2026", trend: "Ice Blue · Шёлк-слип" },
  { id: 12, name: "Cacao Drape", price: 51000, style: "Повседневные", sizes: ["S", "M", "L", "XL"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/e4d03c3d-6c30-4a3e-b13f-1cd1b1630eb1.jpg", tag: "Хит 2026", trend: "Шоколад · Драпировка" },
  { id: 13, name: "White Shift", price: 38000, style: "Повседневные", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/c4ca67ec-39d1-4b02-a520-fcb54599d115.jpg", tag: "Новинка", trend: "Белый оверсайз · 2026" },
  { id: 14, name: "Camel Cowl", price: 59000, style: "Повседневные", sizes: ["S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/2d5e56c8-d231-4aa4-a684-db35f3fa7683.jpg", tag: "Эксклюзив", trend: "Кэмел · Хомут 2026" },
  { id: 3, name: "Crimson Sculpt", price: 96000, style: "Вечерние", sizes: ["S", "M"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg", tag: "Хит", trend: "Скульптурность" },
  { id: 4, name: "Midnight Cascade", price: 112000, style: "Вечерние", sizes: ["S", "M", "L", "XL"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/1d6c0d4f-6439-4afc-bcb1-2d16f589cdcf.jpg", tag: "Эксклюзив", trend: "Сапфир 2025" },
  { id: 5, name: "Emerald Ascent", price: 67000, style: "Коктейльные", sizes: ["XS", "S", "M"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8a2fe32d-b476-4bcb-be70-fc569b401f68.jpg", tag: "Тренд", trend: "Зелёный 2025" },
  { id: 6, name: "Ivory Couture", price: 145000, style: "Свадебные", sizes: ["XS", "S", "M", "L"], img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/96bdddd4-3827-4112-809e-586192f67176.jpg", tag: "Премиум", trend: "Купюрная драпировка" },
];

export default function Catalog() {
  const [style, setStyle] = useState("Все");
  const [size, setSize] = useState("Все");
  const [maxPrice, setMaxPrice] = useState(150000);
  const [liked, setLiked] = useState<number[]>([]);

  const filtered = DRESSES.filter((d) => {
    if (style !== "Все" && d.style !== style) return false;
    if (size !== "Все" && !d.sizes.includes(size)) return false;
    if (d.price > maxPrice) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      {/* Header */}
      <div className="pt-28 pb-12 text-center border-b border-[#2a2010]">
        <p className="text-[0.6rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-3">Наши платья</p>
        <h1 className="font-display text-5xl md:text-6xl text-ivory">Каталог</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-10 space-y-5">
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] text-[#7a6a50] uppercase mb-3">Стиль</p>
            <div className="flex flex-wrap gap-2">
              {STYLES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStyle(s)}
                  className={`filter-tag ${style === s ? "active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.25em] text-[#7a6a50] uppercase mb-3">Размер</p>
            <div className="flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`filter-tag ${size === s ? "active" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.25em] text-[#7a6a50] uppercase mb-3">
              Цена до: <span className="text-[#c9a84c]">{maxPrice.toLocaleString("ru-RU")} ₽</span>
            </p>
            <input
              type="range"
              min={30000}
              max={150000}
              step={5000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <p className="text-[0.6rem] tracking-[0.2em] text-[#4a3a20] uppercase mb-8">
          Найдено: {filtered.length} {filtered.length === 1 ? "платье" : filtered.length < 5 ? "платья" : "платьев"}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((d) => (
            <div key={d.id} className="group catalog-card relative overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="text-[0.6rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#c9a84c] text-[#0d0d0d] font-semibold">
                  {d.tag}
                </span>
              </div>
              <button
                onClick={() => setLiked((prev) => prev.includes(d.id) ? prev.filter((x) => x !== d.id) : [...prev, d.id])}
                className="absolute top-4 right-4 w-8 h-8 bg-[#0d0d0d99] flex items-center justify-center"
              >
                <Icon
                  name="Heart"
                  size={15}
                  className={liked.includes(d.id) ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#7a6a50]"}
                />
              </button>
              <div className="card-overlay absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d44] to-transparent flex flex-col justify-end p-5">
                <p className="text-[0.55rem] tracking-[0.2em] text-[#c9a84c] uppercase mb-1">{d.trend}</p>
                <h3 className="font-display text-xl text-ivory mb-1">{d.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#c9a84c] font-semibold text-sm">{d.price.toLocaleString("ru-RU")} ₽</span>
                  <div className="flex gap-1">
                    {d.sizes.map((s) => (
                      <span key={s} className="text-[0.5rem] border border-[#3a3020] text-[#7a6a50] px-1.5 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>
                <button className="mt-3 w-full py-2.5 bg-[#c9a84c] text-[#0d0d0d] text-xs tracking-[0.2em] uppercase font-semibold hover:bg-[#e8c97a] transition-colors">
                  В корзину
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-3xl text-[#4a3a20] mb-3">Ничего не найдено</p>
            <p className="text-[#3a2a10] text-sm">Попробуйте изменить фильтры</p>
            <button
              onClick={() => { setStyle("Все"); setSize("Все"); setMaxPrice(150000); }}
              className="mt-6 text-xs tracking-[0.2em] uppercase text-[#c9a84c] border border-[#c9a84c] px-6 py-2.5 hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}