import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ChevronDown, Scale, User } from "lucide-react";
import { Isotipo } from "@/components/Logo";
import {
  CtaBlock,
  PhotoPlaceholder,
  Section,
  SectionHeading,
  SERVICE_CARDS,
  ServiceCard,
} from "@/components/site/blocks";
import { pageHead } from "@/lib/site";

const FAQ = [
  {
    q: "¿Quién puede acogerse a la insolvencia de persona natural no comerciante?",
    a: "La persona que no ejerce actividades mercantiles de forma habitual y que está en cesación de pagos, es decir, que ha dejado de pagar dos o más obligaciones a dos o más acreedores por más de 90 días, o tiene demandas de cobro en su contra. Este procedimiento está regulado en la Ley 1564 de 2012. En la asesoría revisamos si su caso cumple los requisitos.",
  },
  {
    q: "¿Qué diferencia hay entre reorganización y liquidación?",
    a: "La reorganización busca que la empresa siga operando mientras acuerda con sus acreedores un nuevo plan de pagos. La liquidación es el proceso en el que los bienes del deudor se venden o adjudican para pagar las deudas en el orden que fija la ley. La ruta adecuada depende de las cifras y de la viabilidad de cada caso.",
  },
  {
    q: "¿Pueden atenderme si no estoy en Cali?",
    a: "Sí. Atendemos de forma presencial en nuestra oficina de Cali y de forma virtual a personas y empresas en otras ciudades de Colombia.",
  },
  {
    q: "¿Qué documentos necesito para la primera asesoría?",
    a: "Le sugerimos traer una relación de sus deudas (acreedor, valor y fecha de vencimiento), sus ingresos y gastos mensuales, y una lista de sus bienes. Si es empresa, los estados financieros más recientes. Si no tiene todo, igual podemos empezar con la información disponible.",
  },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Abogados de insolvencia en Cali | MPG Insolvencias",
      description:
        "Abogados y contadores expertos en insolvencia de persona natural y empresarial en Cali. Atención presencial y virtual. Agende una asesoría.",
      path: "/",
      extraScripts: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
      ],
    }),
  component: Index,
});

const VALUES = [
  { t: "Rigor", d: "Cada afirmación se sustenta en la norma y en las cifras." },
  { t: "Claridad", d: "El proceso se explica en lenguaje simple." },
  { t: "Discreción", d: "Su situación se trata con confidencialidad." },
  { t: "Acompañamiento", d: "Usted sabe en qué etapa está y qué sigue." },
];

function Index() {
  return (
    <>
      <section className="bg-bg">
        <div className="container-site grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="accent-bar" aria-hidden="true" />
            <p className="t-label mt-4 text-text-muted">ABOGADOS Y CONTADORES EN INSOLVENCIA</p>
            <h1 className="t-h1 mt-3 text-primary">
              Una salida legal y ordenada a sus problemas financieros
            </h1>
            <p className="prose-mpg mt-6 text-text">
              Somos una firma que une el criterio jurídico y el contable en un mismo equipo. Acompañamos a
              personas y empresas en Cali y de forma virtual en toda Colombia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn-primary">Agenda una asesoría</Link>
              <a href="#servicios" className="btn-secondary">Ver servicios</a>
            </div>
          </div>
          <PhotoPlaceholder className="aspect-[4/3] w-full" />
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-site grid gap-6 py-16 md:grid-cols-2">
          {[
            { to: "/insolvencia-persona-natural", icon: User, t: "Soy persona natural", d: "Sus deudas superan lo que puede pagar y quiere conocer la salida que ofrece la ley." },
            { to: "/insolvencia-empresarial", icon: Building2, t: "Soy empresa", d: "Necesita reorganizar sus obligaciones y proteger la operación de su negocio." },
          ].map(({ to, icon: Icon, t, d }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col rounded-[4px] border border-line bg-bg p-8 transition-colors hover:border-primary md:p-10"
            >
              <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <span className="t-h2 mt-6 text-primary">{t}</span>
              <span className="mt-3 text-text-muted">{d}</span>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
                Conocer la ruta <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading label="NUESTRO DIFERENCIAL" title="Abogados y contadores trabajando en el mismo proceso">
            <p>
              Un proceso de insolvencia exige argumentos jurídicos y cifras consistentes. En MPG ambos equipos
              trabajan juntos sobre su caso, para que usted no tenga que coordinar asesores por separado.
            </p>
          </SectionHeading>
          <PhotoPlaceholder className="aspect-[16/10] w-full" />
        </div>
      </Section>

      <section id="servicios" className="scroll-mt-24 bg-surface">
        <div className="container-site reveal py-16 md:py-24">
          <SectionHeading label="SERVICIOS" title="Cómo podemos ayudarle" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICE_CARDS.map((s) => (
              <ServiceCard key={s.to} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary">
        <Isotipo variant="negative" className="pointer-events-none absolute -right-10 -top-16 h-[340px] w-auto opacity-10" />
        <div className="container-site relative grid gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="accent-bar-dark" aria-hidden="true" />
            <h2 className="t-h2 mt-4 text-bg">Más de 25 años de experiencia</h2>
            <p className="prose-mpg mt-4 text-bg">
              Un grupo de abogados y contadores con trayectoria en derecho concursal, contabilidad y finanzas.
            </p>
          </div>
          <div className="border-l-2 border-accent-on-dark pl-6">
            <Scale className="h-8 w-8 text-accent-on-dark" strokeWidth={1.5} aria-hidden="true" />
            <p className="t-h3 mt-4 text-bg">
              Experiencia como auxiliares de justicia (liquidador) en procesos concursales
            </p>
            <Link to="/procesos" className="mt-4 inline-flex items-center gap-2 font-bold text-accent-on-dark hover:underline">
              Ver procesos publicados <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading label="VALORES" title="Cómo trabajamos con usted" />
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
        <SectionHeading label="MARCO LEGAL" title="Marco legal en el que trabajamos" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-[4px] border border-line bg-bg p-8">
            <p className="t-label text-text-muted">EMPRESAS Y COMERCIANTES</p>
            <h3 className="t-h3 mt-3 text-primary">Ley 1116 de 2006</h3>
            <p className="mt-2 text-text-muted">Régimen de insolvencia empresarial: reorganización y liquidación judicial.</p>
          </article>
          <article className="rounded-[4px] border border-line bg-bg p-8">
            <p className="t-label text-text-muted">PERSONA NATURAL NO COMERCIANTE</p>
            <h3 className="t-h3 mt-3 text-primary">Ley 1564 de 2012</h3>
            <p className="mt-2 text-text-muted">Código General del Proceso, que regula la insolvencia de persona natural no comerciante.</p>
          </article>
        </div>
      </Section>

      <Section>
        <SectionHeading label="PREGUNTAS FRECUENTES" title="Resolvemos sus dudas iniciales" />
        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {FAQ.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-text [&::-webkit-details-marker]:hidden">
                <h3 className="text-[17px] leading-7">{f.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" strokeWidth={1.5} aria-hidden="true" />
              </summary>
              <p className="prose-mpg pb-6 text-text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <CtaBlock />
    </>
  );
}
