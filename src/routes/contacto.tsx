import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Monitor } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { Section, SectionHeading } from "@/components/site/blocks";
import { buildWhatsappMessage, CLIENT_TYPES, contactSchema, SERVICES } from "@/lib/contact";
import { addressLine, pageHead, SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () =>
    pageHead({
      title: "Agende una asesoría en Cali | MPG Insolvencias",
      description:
        "Agende una asesoría con abogados y contadores en insolvencia. Oficina en el Edificio Plaza Caicedo, Cali, y atención virtual. WhatsApp +57 311 6229310.",
      path: "/contacto",
      crumbs: [{ name: "Contacto", path: "/contacto" }],
    }),
  component: Page,
});

type Errors = Partial<Record<string, string>>;

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[15px] font-bold">{label}</label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1 text-[14px] text-destructive">{error}</p>}
    </div>
  );
}

function Page() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse({
      nombre: fd.get("nombre"),
      telefono: fd.get("telefono"),
      correo: fd.get("correo"),
      tipo: fd.get("tipo"),
      servicio: fd.get("servicio"),
      mensaje: fd.get("mensaje") ?? "",
      autorizacion: fd.get("autorizacion") === "on",
    });
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] ??= issue.message;
      setErrors(errs);
      const first = Object.keys(errs)[0];
      document.getElementById(first)?.focus();
      return;
    }
    setErrors({});
    window.open(whatsappLink(buildWhatsappMessage(parsed.data)), "_blank", "noopener,noreferrer");
  }

  const a = (k: string) => ({ "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-error` : undefined });

  return (
    <>
      <Section>
        <SectionHeading as="h1" label="CONTACTO" title="Agende una asesoría">
          <p>
            Complete el formulario y continúe la conversación por WhatsApp. Le responderemos para acordar la fecha
            de su asesoría, presencial en Cali o virtual.
          </p>
        </SectionHeading>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <form noValidate onSubmit={onSubmit} className="grid gap-6 rounded-[4px] bg-surface p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <Field id="nombre" label="Nombre" error={errors.nombre}>
                <input id="nombre" name="nombre" autoComplete="name" maxLength={100} className="field" {...a("nombre")} />
              </Field>
              <Field id="telefono" label="Teléfono" error={errors.telefono}>
                <input id="telefono" name="telefono" type="tel" autoComplete="tel" maxLength={20} className="field" {...a("telefono")} />
              </Field>
            </div>
            <Field id="correo" label="Correo electrónico" error={errors.correo}>
              <input id="correo" name="correo" type="email" autoComplete="email" maxLength={255} className="field" {...a("correo")} />
            </Field>
            <div className="grid gap-6 md:grid-cols-2">
              <Field id="tipo" label="Tipo de cliente" error={errors.tipo}>
                <select id="tipo" name="tipo" defaultValue="" className="field" {...a("tipo")}>
                  <option value="" disabled>Seleccione</option>
                  {CLIENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
              <Field id="servicio" label="Servicio de interés" error={errors.servicio}>
                <select id="servicio" name="servicio" defaultValue="" className="field" {...a("servicio")}>
                  <option value="" disabled>Seleccione</option>
                  {SERVICES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </Field>
            </div>
            <Field id="mensaje" label="Mensaje breve (opcional)" error={errors.mensaje}>
              <textarea id="mensaje" name="mensaje" rows={4} maxLength={600} className="field" {...a("mensaje")} />
            </Field>
            <div>
              <label className="flex items-start gap-3 text-[15px] leading-6">
                <input id="autorizacion" name="autorizacion" type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-primary" {...a("autorizacion")} />
                <span>
                  Autorizo el tratamiento de mis datos personales conforme a la Ley 1581 de 2012 y a la{" "}
                  <Link to="/politica-de-datos" className="font-bold text-primary underline">política de tratamiento de datos</Link>.
                </span>
              </label>
              {errors.autorizacion && <p id="autorizacion-error" className="mt-1 text-[14px] text-destructive">{errors.autorizacion}</p>}
            </div>
            <button type="submit" className="btn-primary justify-self-start">
              <MessageCircle className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              Enviar por WhatsApp
            </button>
          </form>

          <aside className="space-y-6">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div><p className="font-bold">WhatsApp y móvil</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{SITE.phoneDisplay}</a></div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div><p className="font-bold">Correo</p><a href={`mailto:${SITE.email}`} className="break-all text-primary hover:underline">{SITE.email}</a></div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div><p className="font-bold">Oficina</p><p className="text-text-muted">{addressLine}</p></div>
              </li>
              <li className="flex gap-3">
                <Monitor className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <div><p className="font-bold">Modalidad</p><p className="text-text-muted">Atención presencial y virtual</p></div>
              </li>
            </ul>
            <iframe
              title="Mapa de la oficina de MPG Insolvencias en el Edificio Plaza Caicedo, Cali"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Carrera 4 # 10-44, Edificio Plaza Caicedo, Cali, Valle del Cauca")}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-[4px] border border-line"
            />
          </aside>
        </div>
      </Section>
    </>
  );
}
