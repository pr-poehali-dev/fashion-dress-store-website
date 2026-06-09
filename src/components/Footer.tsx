import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2010] bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="flex flex-col leading-none mb-4">
            <span className="font-display text-3xl text-gold-gradient tracking-widest">MAISON</span>
            <span className="text-[0.55rem] tracking-[0.35em] text-[#9a8060] uppercase">Haute Couture</span>
          </Link>
          <p className="text-[#7a6a50] text-sm leading-relaxed max-w-xs">
            Каждое платье — это история о женщине, которая знает себе цену. Мы создаём не одежду — мы создаём образ.
          </p>
          <div className="flex gap-4 mt-6">
            {["Instagram", "Youtube", "Twitter"].map((s) => (
              <button key={s} className="w-9 h-9 border border-[#2a2010] flex items-center justify-center text-[#7a6a50] hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all">
                <Icon name={s === "Instagram" ? "Instagram" : s === "Youtube" ? "Youtube" : "Twitter"} size={15} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-5">Навигация</p>
          <div className="flex flex-col gap-3">
            {[
              { href: "/catalog", label: "Каталог" },
              { href: "/collections", label: "Коллекции" },
              { href: "/about", label: "О бренде" },
              { href: "/blog", label: "Блог" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="text-[#7a6a50] hover:text-[#c9b98c] text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#c9a84c] mb-5">Связь</p>
          <div className="flex flex-col gap-3 text-sm text-[#7a6a50]">
            <span className="flex items-center gap-2"><Icon name="Phone" size={13} /> +7 (495) 123-45-67</span>
            <span className="flex items-center gap-2"><Icon name="Mail" size={13} /> hello@maison.ru</span>
            <span className="flex items-center gap-2"><Icon name="MapPin" size={13} /> Москва, Кутузовский пр., 5</span>
          </div>
        </div>
      </div>

      <div className="gold-line" />
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[#4a3a20] text-xs tracking-wider">© 2025 MAISON. Все права защищены.</p>
        <p className="text-[#4a3a20] text-xs tracking-wider">Политика конфиденциальности</p>
      </div>
    </footer>
  );
}
