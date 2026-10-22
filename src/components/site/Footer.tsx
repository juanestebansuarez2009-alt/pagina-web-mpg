import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";
import { addressLine, SITE } from "@/lib/site";
import { NAV } from "./Header";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-bg">
      <div className="container-site grid gap-12 py-16 md:grid-cols-3">
        <div>
          <Logo variant="negative" />
          <p className="mt-6 max-w-xs text-[15px] leading-6">
            Abogados y contadores en insolvencia. Atención presencial en Cali y virtual en toda Colombia.
          </p>
        </div>
        <nav aria-label="Pie de página">
          <p className="t-label text-accent-on-dark">Sitio</p>
          <ul className="mt-4 space-y-2 text-[15px]">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:underline">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/procesos" className="hover:underline">Procesos concursales</Link></li>
            <li><Link to="/politica-de-datos" className="hover:underline">Política de tratamiento de datos</Link></li>
          </ul>
        </nav>
        <div>
          <p className="t-label text-accent-on-dark">Contacto</p>
          <ul className="mt-4 space-y-3 text-[15px] leading-6">
            <li className="flex gap-3">
              <Phone className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <a href={`tel:${SITE.phoneE164}`} className="hover:underline">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:underline">{SITE.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <span>{addressLine}</span>
            </li>
          </ul>
          {/* Redes sociales: espacio preparado, oculto hasta que la firma tenga perfiles. */}
          <div hidden aria-hidden="true" data-social-links />
        </div>
      </div>
      <div className="border-t border-bg/15">
        <p className="container-site py-6 text-[14px]">© 2026 MPG Insolvencias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
