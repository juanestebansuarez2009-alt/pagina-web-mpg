import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, FileText } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/blocks";
import { procesos, type Documento } from "@/data/procesos";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/procesos")({
  head: () =>
    pageHead({
      title: "Procesos concursales: publicaciones del liquidador | MPG Insolvencias",
      description:
        "Documentos de los procesos concursales en los que MPG actúa como liquidador, para consulta de acreedores e interesados.",
      path: "/procesos",
      crumbs: [{ name: "Procesos concursales", path: "/procesos" }],
    }),
  component: Page,
});

function DocList({ title, docs }: { title: string; docs: Documento[] }) {
  return (
    <div>
      <h3 className="t-label text-text-muted">{title}</h3>
      <ul className="mt-3 divide-y divide-line border-y border-line">
        {docs.map((d) => (
          <li key={d.nombre} className="flex min-h-[44px] items-center justify-between gap-4 py-2 text-[15px]">
            {d.url ? (
              <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
                <FileText className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                {d.nombre}
                <span className="sr-only">(PDF, abre en una pestaña nueva)</span>
              </a>
            ) : (
              <>
                <span className="inline-flex items-center gap-2 text-text-muted" aria-disabled="true">
                  <FileText className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                  {d.nombre}
                </span>
                <span className="shrink-0 text-[13px] text-text-muted">Disponible próximamente</span>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Page() {
  return (
    <Section>
      <SectionHeading as="h1" label="AUXILIAR DE JUSTICIA" title="Procesos concursales">
        <p>
          Publicación de documentos de los procesos en los que MPG actúa como liquidador, para consulta de
          acreedores e interesados.
        </p>
      </SectionHeading>
      <div className="mt-12 space-y-4">
        {procesos.map((p) => (
          <details key={p.id} className="group rounded-[4px] border-t-2 border-accent bg-surface">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 md:p-8 [&::-webkit-details-marker]:hidden">
              <div>
                <h2 className="t-h3 text-primary">{p.nombre}</h2>
                <p className="mt-1 text-[15px] text-text-muted">
                  {p.tipo} · {p.identificacion} · {p.etapa}
                </p>
              </div>
              <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={1.5} aria-hidden="true" />
            </summary>
            <div className="space-y-8 px-6 pb-8 md:px-8">
              <dl className="grid gap-4 text-[15px] sm:grid-cols-2">
                <div><dt className="font-bold">Domicilio</dt><dd className="text-text-muted">{p.domicilio}</dd></div>
                <div><dt className="font-bold">Liquidador</dt><dd className="text-text-muted">{p.liquidador}</dd></div>
              </dl>
              <div className="grid gap-8 lg:grid-cols-2">
                <DocList title="Actuaciones" docs={p.actuaciones} />
                <DocList title="Circularización de entidades oficiales" docs={p.circularizacion} />
              </div>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
