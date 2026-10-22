import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/blocks";
import { addressLine, pageHead, SITE } from "@/lib/site";

export const Route = createFileRoute("/politica-de-datos")({
  head: () =>
    pageHead({
      title: "Política de tratamiento de datos personales | MPG Insolvencias",
      description: "Política de tratamiento de datos personales de MPG Insolvencias conforme a la Ley 1581 de 2012.",
      path: "/politica-de-datos",
      crumbs: [{ name: "Política de tratamiento de datos", path: "/politica-de-datos" }],
    }),
  component: Page,
});

const SECTIONS = [
  { t: "1. Responsable del tratamiento", d: `MPG Insolvencias, con domicilio en ${addressLine}. Correo: ${SITE.email}. Teléfono: ${SITE.phoneDisplay}.` },
  { t: "2. Marco normativo", d: "Esta política se expide en cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios, que regulan la protección de datos personales en Colombia." },
  { t: "3. Datos que recolectamos", d: "Nombre, teléfono, correo electrónico, tipo de cliente y la información que usted comparta voluntariamente sobre su situación para recibir asesoría." },
  { t: "4. Finalidades", d: "Atender su solicitud de asesoría, contactarlo, prestar los servicios contratados y cumplir obligaciones legales." },
  { t: "5. Derechos del titular", d: "Usted puede conocer, actualizar, rectificar y solicitar la supresión de sus datos, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio." },
  { t: "6. Procedimiento para consultas y reclamos", d: `Puede ejercer sus derechos escribiendo a ${SITE.email}. Las consultas se atenderán en los plazos previstos por la ley.` },
  { t: "7. Vigencia", d: "Esta política rige desde su publicación. Fecha pendiente de definir en la revisión legal." },
];

function Page() {
  return (
    <Section>
      <SectionHeading as="h1" label="LEY 1581 DE 2012" title="Política de tratamiento de datos personales">
        <p className="rounded-[4px] border border-line bg-surface p-4 text-text">
          Borrador para revisión legal. Este texto es una estructura base y debe ser revisado y aprobado antes de
          su publicación definitiva.
        </p>
      </SectionHeading>
      <div className="prose-mpg mt-12 space-y-8">
        {SECTIONS.map((s) => (
          <section key={s.t}>
            <h2 className="t-h3 text-primary">{s.t}</h2>
            <p className="mt-2 text-text">{s.d}</p>
          </section>
        ))}
      </div>
    </Section>
  );
}
