import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/collections", label: "Коллекции" },
  { href: "/about", label: "О бренде" },
  { href: "/blog", label: "Блог" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d0d0dcc] backdrop-blur-md border-b border-[#2a2010]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl lg:text-3xl text-gold-gradient tracking-widest">MAISON</span>
          <span className="text-[0.55rem] tracking-[0.35em] text-[#9a8060] uppercase">Haute Couture</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link ${location.pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="text-[#c9b98c] hover:text-[#e8c97a] transition-colors">
            <Icon name="Search" size={18} />
          </button>
          <button className="text-[#c9b98c] hover:text-[#e8c97a] transition-colors">
            <Icon name="Heart" size={18} />
          </button>
          <button className="text-[#c9b98c] hover:text-[#e8c97a] transition-colors">
            <Icon name="ShoppingBag" size={18} />
          </button>
        </div>

        <button
          className="lg:hidden text-[#c9b98c]"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0d0d0d] border-t border-[#2a2010] px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link text-base ${location.pathname === l.href ? "active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
