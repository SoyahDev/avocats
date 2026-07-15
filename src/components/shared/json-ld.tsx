import { site } from "@/lib/site";
import { faqs } from "@/lib/data";

/** Structured data: LegalService + FAQPage for rich results & AI discoverability. */
export function JsonLd() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    priceRange: "€€€",
    image: `${site.url}/opengraph-image.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.street,
      postalCode: site.contact.address.postalCode,
      addressLocality: site.contact.address.city,
      addressCountry: "FR",
    },
    areaServed: "FR",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [site.social.linkedin, site.social.instagram],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
