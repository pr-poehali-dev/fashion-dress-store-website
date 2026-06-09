import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/96bdddd4-3827-4112-809e-586192f67176.jpg";
const FEATURED = [
  {
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8548fa76-bb6e-4c1c-bb70-06b1855f6aa0.jpg",
    name: "Nocturne Velvet",
    price: "89 900 ₽",
    tag: "Новинка",
  },
  {
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg",
    name: "Ivory Reverie",
    price: "74 500 ₽",
    tag: "Тренд",
  },
  {
    img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg",
    name: "Crimson Sculpt",
    price: "96 000 ₽",
    tag: "Хит",
  },
];

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeUp();
  return <div ref={ref} className={`fade-up ${className}`}>{children}</div>;
}

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <img
          src={HERO_IMG}
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d55] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <FadeSection>
            <p className="text-[0.65rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-4">Коллекция 2025 · 2026</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-none text-ivory mb-6">
              Искусство <br />
              <span className="text-gold-gradient">быть собой</span>
            </h1>
            <p className="text-[#9a8060] text-sm md:text-base max-w-md mb-10 leading-relaxed">
              Платья, рождённые из вдохновения. Каждая деталь — это решение, каждый силуэт — это история.
            </p>
            <div className="flex items-center gap-5">
              <Link
                to="/catalog"
                className="px-8 py-3.5 bg-[#c9a84c] text-[#0d0d0d] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#e8c97a] transition-colors"
              >
                Смотреть каталог
              </Link>
              <Link
                to="/collections"
                className="text-xs tracking-[0.2em] uppercase text-[#c9b98c] hover:text-[#e8c97a] transition-colors flex items-center gap-2"
              >
                Коллекции <Icon name="ArrowRight" size={14} />
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Gold divider */}
      <div className="gold-line mx-6 md:mx-20" />

      {/* Тренды */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeSection className="text-center mb-14">
          <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-3">Актуально сейчас</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory">Главные тренды сезона</h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED.map((item, i) => (
            <FadeSection key={i}>
              <Link to="/catalog" className="group block catalog-card relative overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1 bg-[#c9a84c] text-[#0d0d0d] font-semibold">
                    {item.tag}
                  </span>
                </div>
                <div className="card-overlay absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl text-ivory">{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#c9a84c] font-semibold text-sm">{item.price}</span>
                    <span className="text-xs tracking-widest text-[#9a8060] uppercase flex items-center gap-1">
                      Смотреть <Icon name="ArrowRight" size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeSection>
          ))}
        </div>

        <FadeSection className="text-center mt-12">
          <Link
            to="/catalog"
            className="inline-block border border-[#c9a84c] text-[#c9a84c] px-10 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all"
          >
            Весь каталог
          </Link>
        </FadeSection>
      </section>

      {/* Banner */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/1d6c0d4f-6439-4afc-bcb1-2d16f589cdcf.jpg)` }}
        />
        <div className="absolute inset-0 bg-[#0d0d0dcc]" />
        <FadeSection className="relative z-10 text-center max-w-2xl mx-auto px-6">
          <p className="text-[0.6rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-5">Эксклюзивная коллекция</p>
          <h2 className="font-display text-5xl md:text-6xl text-ivory mb-6 leading-tight">
            «Вечер, который<br />запомнят все»
          </h2>
          <p className="text-[#9a8060] text-sm mb-10 leading-relaxed">
            Новая вечерняя коллекция — для тех, кто входит в комнату и меняет её атмосферу.
          </p>
          <Link
            to="/collections"
            className="inline-block px-10 py-4 bg-transparent border border-[#c9a84c] text-[#c9a84c] text-xs tracking-[0.25em] uppercase hover:bg-[#c9a84c] hover:text-[#0d0d0d] transition-all"
          >
            Открыть коллекцию
          </Link>
        </FadeSection>
      </section>

      {/* Статистика */}
      <section className="border-y border-[#2a2010]">
        <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "12+", label: "Лет на рынке" },
            { num: "2 400+", label: "Довольных клиенток" },
            { num: "4", label: "Коллекции в год" },
            { num: "100%", label: "Ручная работа" },
          ].map((s, i) => (
            <FadeSection key={i}>
              <p className="font-display text-4xl md:text-5xl text-gold-gradient mb-2">{s.num}</p>
              <p className="text-[0.65rem] tracking-[0.2em] text-[#7a6a50] uppercase">{s.label}</p>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* Философия */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeSection>
          <img
            src="https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8a2fe32d-b476-4bcb-be70-fc569b401f68.jpg"
            alt="about"
            className="w-full aspect-[4/5] object-cover"
          />
        </FadeSection>
        <FadeSection>
          <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-5">О нас</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory mb-6 leading-tight">
            Мода — это<br />язык без слов
          </h2>
          <div className="gold-line mb-6 w-24" />
          <p className="text-[#7a6a50] text-sm leading-loose mb-4">
            MAISON — это дом, где создаются платья для женщин, которые живут ярко. Мы верим, что одежда должна рассказывать историю своей хозяйки.
          </p>
          <p className="text-[#7a6a50] text-sm leading-loose mb-8">
            Каждое платье проходит через руки мастеров, каждая строчка — это акт уважения к той, кто будет его носить.
          </p>
          <Link
            to="/about"
            className="text-xs tracking-[0.2em] uppercase text-[#c9a84c] hover:text-[#e8c97a] transition-colors flex items-center gap-2"
          >
            Наша история <Icon name="ArrowRight" size={13} />
          </Link>
        </FadeSection>
      </section>

      <Footer />
    </div>
  );
}
