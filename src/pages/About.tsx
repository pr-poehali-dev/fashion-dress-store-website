import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon";

const TEAM = [
  { name: "Анна Морозова", role: "Главный дизайнер", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/456c190d-cb84-47e3-a323-29bb52cfc5ab.jpg" },
  { name: "Элен Дюваль", role: "Арт-директор", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/8a2fe32d-b476-4bcb-be70-fc569b401f68.jpg" },
  { name: "Карина Соль", role: "Мастер кроя", img: "https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/066be33c-ac8b-454b-9020-3eb38739f50a.jpg" },
];

const VALUES = [
  { icon: "Gem", title: "Исключительность", text: "Каждое платье существует в ограниченном тираже. Мы не тиражируем — мы создаём." },
  { icon: "Scissors", title: "Мастерство", text: "Более 200 часов ручной работы в каждом изделии. Это не производство — это ремесло." },
  { icon: "Leaf", title: "Этичность", text: "Только натуральные ткани, ответственные поставщики и безотходное производство." },
  { icon: "Star", title: "Наследие", text: "12 лет в haute couture. Наши платья хранятся в гардеробах, передаются по наследству." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />

      {/* Hero */}
      <div className="relative pt-28 pb-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[0.6rem] tracking-[0.4em] text-[#c9a84c] uppercase mb-5">Наша история</p>
            <h1 className="font-display text-6xl md:text-7xl text-ivory leading-none mb-8">
              О бренде<br /><span className="text-gold-gradient">MAISON</span>
            </h1>
            <div className="gold-line w-24 mb-8" />
            <p className="text-[#7a6a50] text-sm leading-loose max-w-lg">
              MAISON был основан в 2013 году в Москве — как ответ на запрос женщин, которые не хотят одеваться как все. Мы создавали платья для тех, кто знает: настоящая роскошь — это не логотип, а история за ним.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://cdn.poehali.dev/projects/7db9888b-27d0-4de7-ae93-69200325d658/files/96bdddd4-3827-4112-809e-586192f67176.jpg"
              alt="about hero"
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#c9a84c] p-6 hidden lg:block">
              <p className="font-display text-5xl text-[#0d0d0d] leading-none">12</p>
              <p className="text-[0.6rem] tracking-[0.2em] text-[#0d0d0d99] uppercase">лет<br />мастерства</p>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-line mx-6 md:mx-20 mt-8" />

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-12 text-center">Наш путь</p>
        <div className="relative border-l border-[#2a2010] pl-8 space-y-12">
          {[
            { year: "2013", text: "Первый ателье на Кутузовском. Три платья — и очередь из восьми клиенток." },
            { year: "2016", text: "Дебют на Московской Неделе Моды. Коллекция «Белая ночь» — продана полностью за 2 часа." },
            { year: "2019", text: "Открытие шоурума в центре Москвы. 500 постоянных клиенток по всей России." },
            { year: "2022", text: "Запуск онлайн-бутика. Доставка в 47 стран мира." },
            { year: "2025", text: "Новая эпоха. Коллекция «Midnight Garden» — самая смелая за всю историю бренда." },
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-10 top-1 w-4 h-4 border border-[#c9a84c] bg-[#0d0d0d] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#c9a84c]" />
              </div>
              <p className="text-[#c9a84c] text-xs tracking-[0.3em] uppercase mb-2">{item.year}</p>
              <p className="text-[#7a6a50] text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[#2a2010] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-4 text-center">Что нас отличает</p>
          <h2 className="font-display text-4xl md:text-5xl text-ivory text-center mb-14">Наши ценности</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={i} className="border border-[#2a2010] p-7 hover:border-[#c9a84c33] transition-colors">
                <div className="w-10 h-10 border border-[#3a3020] flex items-center justify-center mb-5">
                  <Icon name={v.icon as "Gem"} size={18} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-ivory text-sm tracking-wider uppercase mb-3">{v.title}</h3>
                <p className="text-[#5a4a30] text-xs leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-[0.6rem] tracking-[0.35em] text-[#c9a84c] uppercase mb-4 text-center">Люди бренда</p>
        <h2 className="font-display text-4xl md:text-5xl text-ivory text-center mb-14">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member, i) => (
            <div key={i} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl text-ivory mb-1">{member.name}</h3>
              <p className="text-[0.6rem] tracking-[0.25em] text-[#c9a84c] uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
