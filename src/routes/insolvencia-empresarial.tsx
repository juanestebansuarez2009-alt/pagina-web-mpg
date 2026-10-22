import { createFileRoute } from "@tanstack/react-router";
import { CtaBlock, ItemGrid, PageHero, Section, SectionHeading, Steps } from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/insolvencia-empresarial")({
  head: () =>
    pageHead({
      title: "Insolvencia empresarial y reorganización en Cali | MPG Insolvencias",
      description:
        "Reorganización empresarial, liquidación judicial y planes de viabilidad bajo la Ley 1116 de 2006, con acompañamiento ante la Superintendencia de Sociedades.",
      path: "/insolvencia-empresarial",
      crumbs: [{ name: "Insolvencia empresarial", path: "/insolvencia-empresarial" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero label="EMPRESAS" title="Insolvencia empresarial y reorganización">
        <p>
          La Ley 1116 de 2006 establece el procedimiento por el cual empresas y personas naturales comerciantes
          pueden pagar las deudas acumuladas con sus acreedores y proteger su establecimiento como fuente de
          ingresos y empleo.
        </p>
        <p>Analizamos las cifras de su empresa y definimos la ruta jurídica que corresponde.</p>
      </PageHero>

      <Section tone="surface">
        <SectionHeading label="SERVICIOS" title="Qué hacemos por su empresa" />
        <ItemGrid
          items={[
            { title: "Reorganización empresarial", text: "Mantener la operación mientras se reestructuran las obligaciones mediante un acuerdo con los acreedores." },
            { title: "Liquidación judicial", text: "Proceso ordenado de realización de activos para pagar a los acreedores según la prelación legal, cuando la empresa no es viable." },
            { title: "Planes de viabilidad y flujo de caja", text: "Proyecciones financieras que sustentan la propuesta de pago y demuestran la capacidad de la empresa." },
            { title: "Acompañamiento ante la Superintendencia de Sociedades", text: "Radicación, seguimiento y representación en las etapas del proceso concursal." },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading label="CÓMO TRABAJAMOS" title="Del diagnóstico a la confirmación del acuerdo" />
        <Steps
          steps={[
            { title: "Diagnóstico financiero y jurídico", text: "Revisamos estados financieros, pasivos y causales de insolvencia." },
            { title: "Definición de la estrategia", text: "Determinamos si procede la reorganización o la liquidación y preparamos el plan." },
            { title: "Solicitud ante la Superintendencia", text: "Preparamos y radicamos la solicitud con todos sus anexos contables." },
            { title: "Negociación y seguimiento", text: "Acompañamos la calificación de créditos, la negociación y la ejecución del acuerdo." },
          ]}
        />
      </Section>

      <CtaBlock
        title="Evaluamos si su empresa cumple los requisitos"
        text="Revisamos sus cifras y le explicamos qué alternativa ofrece la Ley 1116 de 2006 para su caso."
      />
    </>
  );
}
