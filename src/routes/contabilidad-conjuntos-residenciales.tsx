import { createFileRoute } from "@tanstack/react-router";
import { CtaBlock, ItemGrid, PageHero, Section, SectionHeading } from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/contabilidad-conjuntos-residenciales")({
  head: () =>
    pageHead({
      title: "Contabilidad para conjuntos residenciales en Cali | MPG Insolvencias",
      description:
        "Contabilidad mensual, revisión fiscal, estados financieros para la asamblea y presupuestos para copropiedades en Cali.",
      path: "/contabilidad-conjuntos-residenciales",
      crumbs: [{ name: "Contabilidad para conjuntos residenciales", path: "/contabilidad-conjuntos-residenciales" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero label="PROPIEDAD HORIZONTAL" title="Contabilidad para conjuntos residenciales">
        <p>Contabilidad y revisión fiscal al día para que la administración rinda cuentas con soporte.</p>
        <p>
          Acompañamos a copropiedades regidas por la Ley 675 de 2001, de propiedad horizontal, con información
          financiera ordenada y oportuna.
        </p>
      </PageHero>
      <Section tone="surface">
        <SectionHeading label="INCLUYE" title="Qué recibe la copropiedad" />
        <ItemGrid
          items={[
            { title: "Contabilidad mensual de la copropiedad", text: "Registro de ingresos por cuotas de administración, gastos, cartera y conciliaciones bancarias." },
            { title: "Estados financieros para la asamblea", text: "Informes claros y soportados para presentar a los copropietarios." },
            { title: "Presupuestos anuales", text: "Elaboración del presupuesto de gastos e ingresos y cálculo de cuotas." },
            { title: "Apoyo al administrador y al consejo", text: "Acompañamiento en decisiones financieras y respuesta a requerimientos." },
          ]}
        />
      </Section>
      <CtaBlock text="Cuéntenos sobre su conjunto residencial y le presentamos una propuesta de servicio." />
    </>
  );
}
