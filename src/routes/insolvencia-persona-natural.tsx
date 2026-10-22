import { createFileRoute } from "@tanstack/react-router";
import { CtaBlock, ItemGrid, PageHero, Section, SectionHeading, Steps } from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/insolvencia-persona-natural")({
  head: () =>
    pageHead({
      title: "Insolvencia de persona natural en Cali | MPG Insolvencias",
      description:
        "Negociación de deudas, convalidación de acuerdo privado y liquidación patrimonial según la Ley 1564 de 2012. Asesoría en Cali y virtual.",
      path: "/insolvencia-persona-natural",
      crumbs: [{ name: "Insolvencia de persona natural", path: "/insolvencia-persona-natural" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero label="PERSONA NATURAL" title="Insolvencia de persona natural en Cali">
        <p>
          Si sus deudas superan lo que puede pagar, la ley le permite negociar con todos sus acreedores a la vez,
          en un solo trámite y con reglas claras. No tiene que resolverlo solo ni acreedor por acreedor.
        </p>
        <p>
          Revisamos su situación con calma, le explicamos qué procedimiento aplica a su caso y lo acompañamos en
          cada etapa.
        </p>
      </PageHero>

      <Section tone="surface">
        <SectionHeading label="PROCEDIMIENTOS" title="Persona natural no comerciante">
          <p>
            La Ley 1564 de 2012, Código General del Proceso, regula tres procedimientos para quien no ejerce
            actividades mercantiles de forma habitual.
          </p>
        </SectionHeading>
        <ItemGrid
          items={[
            { title: "Negociación de deudas", text: "Usted presenta una propuesta de pago y la negocia con todos sus acreedores ante un centro de conciliación o una notaría. Mientras dura el trámite se suspenden los procesos de cobro en su contra." },
            { title: "Convalidación de acuerdo privado", text: "Si ya llegó a un acuerdo con la mayoría de sus acreedores, este procedimiento le da validez legal para que obligue también a los demás." },
            { title: "Liquidación patrimonial", text: "Cuando no es posible un acuerdo, un juez organiza la venta o adjudicación de sus bienes para pagar las deudas en el orden que fija la ley. Las obligaciones que no alcancen a pagarse pueden quedar extinguidas en los términos que la norma establece." },
            { title: "Persona natural comerciante", text: "Si usted ejerce actividades mercantiles, su caso se rige por la Ley 1116 de 2006, el régimen de insolvencia empresarial, con procesos de reorganización o liquidación judicial." },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading label="CÓMO TRABAJAMOS" title="Un proceso en cuatro pasos" />
        <Steps
          steps={[
            { title: "Análisis de su caso", text: "Revisamos sus deudas, ingresos, gastos y bienes para entender su situación real." },
            { title: "Definición de la ruta legal y contable", text: "Le explicamos qué procedimiento aplica y qué puede esperar de cada alternativa." },
            { title: "Preparación y radicación de la solicitud", text: "Elaboramos la solicitud con sus soportes contables y la radicamos ante la entidad competente." },
            { title: "Acompañamiento hasta el cierre", text: "Lo representamos en audiencias y le informamos en qué etapa está y qué sigue." },
          ]}
        />
      </Section>

      <CtaBlock text="Cuéntenos su situación. En la primera asesoría le explicamos si puede acogerse a la insolvencia y qué procedimiento conviene evaluar." />
    </>
  );
}
