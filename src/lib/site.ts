export const SITE = {
  name: "MPG Insolvencias",
  phoneDisplay: "+57 311 6229310",
  phoneE164: "+573116229310",
  whatsapp: "573116229310",
  email: "monicapipicano@hotmail.com",
  address: {
    street: "Carrera 4 No. 10-44, Edificio Plaza Caicedo, piso 9, oficina 918",
    city: "Cali",
    region: "Valle del Cauca",
    country: "CO",
  },
};

export const addressLine = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "AccountingService"],
  name: SITE.name,
  description:
    "Firma multidisciplinaria de abogados y contadores expertos en insolvencia de persona natural y empresarial, contabilidad y revisión fiscal.",
  telephone: SITE.phoneE164,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  areaServed: [
    { "@type": "City", name: "Cali" },
    { "@type": "AdministrativeArea", name: "Valle del Cauca" },
    { "@type": "Country", name: "Colombia" },
  ],
};

type Crumb = { name: string; path: string };

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  crumbs?: Crumb[];
  extraScripts?: object[];
  noindex?: boolean;
}) {
  const scripts: { type: string; children: string }[] = [];
  if (opts.crumbs?.length) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Inicio", path: "/" }, ...opts.crumbs].map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: c.path,
        })),
      }),
    });
  }
  for (const s of opts.extraScripts ?? []) {
    scripts.push({ type: "application/ld+json", children: JSON.stringify(s) });
  }
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: opts.path },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      ...(opts.noindex ? [{ name: "robots", content: "noindex" }] : []),
    ],
    links: [{ rel: "canonical", href: opts.path }],
    scripts,
  };
}
