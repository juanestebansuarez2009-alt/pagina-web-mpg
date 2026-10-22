import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/Logo";

export const NAV = [
  { to: "/insolvencia-persona-natural", label: "Persona natural" },
  { to: "/insolvencia-empresarial", label: "Empresas" },
  { to: "/contabilidad-conjuntos-residenciales", label: "Conjuntos" },
  { to: "/contabilidad-revision-fiscal", label: "Contabilidad" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-surface focus:p-2"
      >
        Saltar al contenido
      </a>
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Link to="/" aria-label="MPG Insolvencias, ir al inicio" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-[15px] font-medium text-text hover:text-primary"
                  activeProps={{ className: "text-primary underline underline-offset-8 decoration-accent decoration-2" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contacto" className="btn-primary hidden sm:inline-flex">
            Agenda una asesoría
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-primary lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="menu-movil" aria-label="Menú móvil" className="border-t border-line bg-surface lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-[16px] font-medium text-text"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link to="/contacto" onClick={() => setOpen(false)} className="btn-primary w-full">
                Agenda una asesoría
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
