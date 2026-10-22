import { z } from "zod";

export const CLIENT_TYPES = ["Persona natural", "Empresa", "Conjunto residencial"] as const;
export const SERVICES = [
  "Insolvencia de persona natural",
  "Insolvencia empresarial",
  "Contabilidad para conjuntos residenciales",
  "Contabilidad y revisión fiscal",
  "Otro",
] as const;

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Escriba su nombre").max(100, "Máximo 100 caracteres"),
  telefono: z
    .string()
    .trim()
    .regex(/^[+\d][\d\s-]{6,19}$/, "Escriba un teléfono válido"),
  correo: z.string().trim().email("Escriba un correo válido").max(255),
  tipo: z.enum(CLIENT_TYPES, { errorMap: () => ({ message: "Seleccione el tipo de cliente" }) }),
  servicio: z.enum(SERVICES, { errorMap: () => ({ message: "Seleccione un servicio" }) }),
  mensaje: z.string().trim().max(600, "Máximo 600 caracteres").optional().default(""),
  autorizacion: z.literal(true, {
    errorMap: () => ({ message: "Debe autorizar el tratamiento de sus datos personales" }),
  }),
});

export type ContactData = z.infer<typeof contactSchema>;

export function buildWhatsappMessage(d: ContactData) {
  return [
    "Hola, quiero agendar una asesoría con MPG Insolvencias.",
    `Nombre: ${d.nombre}`,
    `Teléfono: ${d.telefono}`,
    `Correo: ${d.correo}`,
    `Tipo de cliente: ${d.tipo}`,
    `Servicio de interés: ${d.servicio}`,
    d.mensaje ? `Mensaje: ${d.mensaje}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}
