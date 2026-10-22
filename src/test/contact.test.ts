import { describe, expect, it } from "vitest";
import { buildWhatsappMessage, contactSchema } from "@/lib/contact";
import { whatsappLink } from "@/lib/site";

const valid = {
  nombre: "Ana Pérez",
  telefono: "3001234567",
  correo: "ana@correo.com",
  tipo: "Persona natural",
  servicio: "Insolvencia de persona natural",
  mensaje: "",
  autorizacion: true,
};

describe("formulario de contacto", () => {
  it("exige la autorización de tratamiento de datos", () => {
    expect(contactSchema.safeParse({ ...valid, autorizacion: false }).success).toBe(false);
  });
  it("acepta datos completos", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });
  it("envía a WhatsApp +57 311 6229310", () => {
    const d = contactSchema.parse(valid);
    expect(whatsappLink(buildWhatsappMessage(d))).toMatch(/^https:\/\/wa\.me\/573116229310\?text=/);
  });
});
