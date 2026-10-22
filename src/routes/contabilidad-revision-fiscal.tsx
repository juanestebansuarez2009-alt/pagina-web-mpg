import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CtaBlock, ItemGrid, PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/contabilidad-revision-fiscal")({
  head: () =>
    pageHead({
      title: "Contabilidad y revisión fiscal en Cali | MPG Insolvencias",
      description:
        "Contabilidad al día, declaraciones tributarias, informes periódicos, cierres, gestión económica y revisión fiscal para empresas en Cali.",
      path: "/contabilidad-revision-fiscal",
      crumbs: [{ name: "Contabilidad y revisión fiscal", path: "/contabilidad-revision-fiscal" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero label="EMPRESAS" title="Contabilidad y revisión fiscal">
        <p>
          Información contable confiable para tomar decisiones y cumplir con sus obligaciones, en empresas de
          cualquier tamaño o sector.
        </p>
      </PageHero>
      <Section tone="surface">
        <SectionHeading label="SERVICIOS" title="Qué hacemos" />
        <ItemGrid
          items={[
            { title: "Asesoría contable y cumplimiento", text: "Aplicación de la normativa contable y tributaria que corresponde a su empresa." },
            { title: "Contabilidad al día", text: "Registros contables y declaraciones tributarias presentadas a tiempo." },
            { title: "Informes periódicos y cierres", text: "Balance, estado de resultados, cierre contable y cierre fiscal." },
            { title: "Gestión económica", text: "Revisión periódica del estado financiero, planes de viabilidad, presupuestos y apoyo en la búsqueda de financiación." },
            { title: "Revisión fiscal", text: "Control independiente sobre la información financiera y el cumplimiento de las obligaciones de la empresa." },
          ]}
        />
      </Section>
      <Section>
        <SectionHeading label="OTROS SERVICIOS" title="Apoyo jurídico para su empresa" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {["Constitución de sociedades", "Trámites registrales y notariales", "Contratos mercantiles"].map((s) => (
            <li key={s} className="flex items-start gap-3 rounded-[4px] bg-surface p-6 font-bold text-text">
              <Check className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </Section>
      <CtaBlock />
    </>
  );
}
