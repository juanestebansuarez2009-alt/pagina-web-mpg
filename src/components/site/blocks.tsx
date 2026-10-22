import { Link } from "@tanstack/react-router";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Isotipo } from "@/components/Logo";
import { whatsappLink } from "@/lib/site";

export function SectionHeading({
  label,
  title,
  as: Tag = "h2",
  dark,
  children,
}: {
  label?: string;
  title: string;
  as?: "h1" | "h2";
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <span className={dark ? "accent-bar-dark" : "accent-bar"} aria-hidden="true" />
      {label && (
        <p className={`t-label mt-4 ${dark ? "text-accent-on-dark" : "text-text-muted"}`}>{label}</p>
      )}
      <Tag className={`${Tag === "h1" ? "t-h1" : "t-h2"} mt-3 ${dark ? "text-bg" : "text-primary"}`}>
        {title}
      </Tag>
      {children && (
        <div className={`prose-mpg mt-4 ${dark ? "text-bg" : "text-text-muted"}`}>{children}</div>
      )}
    </div>
  );
}

export function PageHero({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-bg">
      <div className="container-site py-16 md:py-24">
        <SectionHeading as="h1" label={label} title={title}>
          <div className="space-y-4 text-text">{children}</div>
        </SectionHeading>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contacto" className="btn-primary">Agenda una asesoría</Link>
        </div>
      </div>
    </section>
  );
}

export function Section({ children, tone = "bg" }: { children: ReactNode; tone?: "bg" | "surface" }) {
  return (
    <section className={tone === "surface" ? "bg-surface" : "bg-bg"}>
      <div className="container-site reveal py-16 md:py-24">{children}</div>
    </section>
  );
}

export function Steps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s, i) => (
        <li key={s.title} className="border-t border-line pt-6">
          <span className="block text-[48px] font-extrabold leading-none tracking-[-0.02em] text-primary" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="t-h3 mt-4 text-text">{s.title}</h3>
          <p className="mt-2 text-text-muted">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

export function ItemGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="mt-12 grid gap-6 md:grid-cols-2">
      {items.map((it) => (
        <li key={it.title} className="rounded-[4px] border-t-2 border-accent bg-surface p-6 md:p-8">
          <h3 className="t-h3 text-primary">{it.title}</h3>
          <p className="mt-3 text-text-muted">{it.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function CtaBlock({
  title = "Agende una asesoría",
  text = "Cuéntenos su situación. Revisamos su caso con criterio jurídico y contable y le explicamos las alternativas que la ley ofrece.",
  button = "Agenda una asesoría",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Isotipo variant="negative" className="pointer-events-none absolute -bottom-16 -right-10 h-[360px] w-auto opacity-10" />
      <div className="container-site relative py-16 md:py-24">
        <SectionHeading title={title} dark>
          <p>{text}</p>
        </SectionHeading>
        <Link to="/contacto" className="btn-on-dark mt-8">{button}</Link>
      </div>
    </section>
  );
}

export function PhotoPlaceholder({ label = "Foto del equipo / oficina", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Espacio reservado: ${label}`}
      className={`flex items-center justify-center gap-2 rounded-[4px] border border-line bg-bg text-text-muted ${className}`}
    >
      <Camera className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
      <span className="t-label">{label}</span>
    </div>
  );
}

export function ServiceCard({ to, title, text }: { to: string; title: string; text: string }) {
  return (
    <article className="flex flex-col rounded-[4px] border-t-2 border-accent bg-surface p-6 md:p-8">
      <h3 className="t-h3 text-primary">{title}</h3>
      <p className="mt-3 flex-1 text-text-muted">{text}</p>
      <Link to={to} className="mt-6 inline-flex items-center gap-2 font-bold text-primary hover:underline">
        Ver servicio <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        <span className="sr-only">: {title}</span>
      </Link>
    </article>
  );
}

export const SERVICE_CARDS = [
  { to: "/insolvencia-persona-natural", title: "Insolvencia de persona natural", text: "Negociación de deudas, convalidación de acuerdo privado y liquidación patrimonial bajo la Ley 1564 de 2012." },
  { to: "/insolvencia-empresarial", title: "Insolvencia empresarial", text: "Reorganización y liquidación judicial bajo la Ley 1116 de 2006, ante la Superintendencia de Sociedades." },
  { to: "/contabilidad-conjuntos-residenciales", title: "Contabilidad para conjuntos residenciales", text: "Contabilidad mensual, estados financieros para la asamblea y presupuestos de la copropiedad." },
  { to: "/contabilidad-revision-fiscal", title: "Contabilidad y revisión fiscal", text: "Contabilidad al día, declaraciones tributarias, cierres, informes periódicos y revisión fiscal." },
];

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola, quisiera información sobre una asesoría con MPG Insolvencias.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp (abre en una pestaña nueva)"
      className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-[4px] bg-primary text-bg hover:bg-primary-dark"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
    </a>
  );
}
