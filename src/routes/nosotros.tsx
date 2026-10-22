import { createFileRoute } from "@tanstack/react-router";
import { CtaBlock, PageHero, PhotoPlaceholder, Section, SectionHeading } from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/nosotros")({
  head: () =>
    pageHead({
      title: "Nosotros: abogados y contadores en Cali | MPG Insolvencias",
      description:
        "Grupo multidisciplinario de abogados y contadores con más de 25 años de experiencia y trayectoria como auxiliares de justicia en procesos concursales.",
      path: "/nosotros",
      crumbs: [{ name: "Nosotros", path: "/nosotros" }],
    }),
  component: Page,
});

// Tarjetas editables del equipo: reemplace nombre, cargo y foto cuando estén disponibles.
const TEAM = Array.from({ length: 4 }, () => ({ nombre: "Nombre", cargo: "Cargo" }));

const VALUES = [
  { t: "Rigor", d: "Cada afirmación se sustenta en la norma y en las cifras." },
  { t: "Claridad", d: "El proceso se explica en lenguaje simple." },
  { t: "Discreción", d: "Su situación se trata con confidencialidad." },
  { t: "Acompañamiento", d: "Usted sabe en qué etapa está y qué sigue." },
];

function Page() {
  return (
    <>
      <PageHero label="NOSOTROS" title="Un equipo de abogados y contadores">
        <p>
          MPG es un grupo multidisciplinario de abogados y contadores con más de 25 años de experiencia en el
          sector.
        </p>
      </PageHero>
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading label="PROPÓSITO" title="Una salida legal, clara y ordenada">
            <p>
              Damos a personas y empresas una salida legal, clara y ordenada a sus problemas financieros, con el
              respaldo conjunto de abogados y contadores.
            </p>
            <p className="mt-4">
              Contamos con experiencia como auxiliares de justicia, en calidad de liquidador, en procesos
              concursales. Esa práctica nos da una visión completa de cómo se desarrolla cada etapa.
            </p>
          </SectionHeading>
          <PhotoPlaceholder className="aspect-[4/3] w-full" />
        </div>
      </Section>
      <Section>
        <SectionHeading label="VALORES" title="Lo que guía nuestro trabajo" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <li key={v.t} className="border-t-2 border-accent pt-6">
              <h3 className="t-h3 text-primary">{v.t}</h3>
              <p className="mt-2 text-text-muted">{v.d}</p>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface">
        <SectionHeading label="EQUIPO" title="Nuestro equipo" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <li key={i}>
              <PhotoPlaceholder label="Foto del equipo" className="aspect-[4/5] w-full" />
              <h3 className="t-h3 mt-4 text-primary">{m.nombre}</h3>
              <p className="text-text-muted">{m.cargo}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBlock />
    </>
  );
}
