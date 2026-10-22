// Datos editables de los procesos concursales en los que MPG actúa como liquidador.
// Para publicar un documento, pegue la URL del PDF en el campo `url`.
// Si `url` está vacío, el enlace se muestra deshabilitado como "Disponible próximamente".

export type Documento = { nombre: string; url: string };

export type Proceso = {
  id: string;
  nombre: string;
  identificacion: string;
  tipo: string;
  etapa: string;
  domicilio: string;
  liquidador: string;
  actuaciones: Documento[];
  circularizacion: Documento[];
};

export const procesos: Proceso[] = [
  {
    id: "fabricas-unidas-well",
    nombre: "FABRICAS UNIDAS WELL S.A.S.",
    identificacion: "NIT 900.870.035-4",
    tipo: "Sociedad",
    etapa: "Admisión a Liquidación Simplificada",
    domicilio: "Calle 27 No. 22-03 Piso 3, El Centro, Tuluá, Valle",
    liquidador: "Mónica Pipicano Gutiérrez, auxiliar de justicia",
    actuaciones: [
      { nombre: "Auto de admisión", url: "" }, // TODO: cargar PDF
      { nombre: "Aviso de admisión", url: "" }, // TODO: cargar PDF
      { nombre: "Garantías mobiliarias", url: "" }, // TODO: cargar PDF
      { nombre: "Póliza de cumplimiento", url: "" }, // TODO: cargar PDF
      { nombre: "Presentación de póliza", url: "" }, // TODO: cargar PDF
      { nombre: "Presentación de formulario de ejecución concursal", url: "" }, // TODO: cargar PDF
    ],
    circularizacion: [
      { nombre: "Cámara de Comercio", url: "" }, // TODO: cargar PDF
      { nombre: "Instrumentos Públicos", url: "" }, // TODO: cargar PDF
      { nombre: "Ministerio del Trabajo", url: "" }, // TODO: cargar PDF
      { nombre: "Municipio de Cali / EMCALI / Promoambiental", url: "" }, // TODO: cargar PDF
      { nombre: "SENA / ICBF / UGPP", url: "" }, // TODO: cargar PDF
      { nombre: "Secretaría de Tránsito de Cali", url: "" }, // TODO: cargar PDF
      { nombre: "DIAN", url: "" }, // TODO: cargar PDF
      { nombre: "Fiduciarias", url: "" }, // TODO: cargar PDF
      { nombre: "Fondos de seguridad social", url: "" }, // TODO: cargar PDF
      { nombre: "Juzgados", url: "" }, // TODO: cargar PDF
      { nombre: "Notarías", url: "" }, // TODO: cargar PDF
      { nombre: "Supersociedades", url: "" }, // TODO: cargar PDF
      { nombre: "TransUnion", url: "" }, // TODO: cargar PDF
    ],
  },
  {
    id: "ingrid-guadalupe-egred-angulo",
    nombre: "INGRID GUADALUPE EGRED ANGULO",
    identificacion: "C.C. 31922445",
    tipo: "Persona natural comerciante",
    etapa: "Admisión a Liquidación Simplificada",
    domicilio: "Av. 9N No. 66-10, Cali",
    liquidador: "Mónica Pipicano Gutiérrez, auxiliar de justicia",
    actuaciones: [
      { nombre: "Auto de admisión", url: "" }, // TODO: cargar PDF
      { nombre: "Aviso de admisión", url: "" }, // TODO: cargar PDF
      { nombre: "Garantías mobiliarias", url: "" }, // TODO: cargar PDF
      { nombre: "Póliza de cumplimiento", url: "" }, // TODO: cargar PDF
      { nombre: "Presentación de póliza", url: "" }, // TODO: cargar PDF
      { nombre: "Presentación de formulario de ejecución concursal", url: "" }, // TODO: cargar PDF
    ],
    circularizacion: [
      { nombre: "Cámara de Comercio", url: "" }, // TODO: cargar PDF
      { nombre: "Instrumentos Públicos", url: "" }, // TODO: cargar PDF
      { nombre: "Ministerio del Trabajo", url: "" }, // TODO: cargar PDF
      { nombre: "Municipio de Cali / EMCALI / Promoambiental", url: "" }, // TODO: cargar PDF
      { nombre: "SENA / ICBF / UGPP", url: "" }, // TODO: cargar PDF
      { nombre: "Secretaría de Tránsito de Cali", url: "" }, // TODO: cargar PDF
      { nombre: "DIAN", url: "" }, // TODO: cargar PDF
      { nombre: "Fiduciarias", url: "" }, // TODO: cargar PDF
      { nombre: "Fondos de seguridad social", url: "" }, // TODO: cargar PDF
      { nombre: "Juzgados", url: "" }, // TODO: cargar PDF
      { nombre: "Notarías", url: "" }, // TODO: cargar PDF
      { nombre: "Supersociedades", url: "" }, // TODO: cargar PDF
      { nombre: "TransUnion", url: "" }, // TODO: cargar PDF
    ],
  },
];
