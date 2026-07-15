/** Central site configuration — single source of truth for brand + contact data. */
export const site = {
  name: "Maison d'Avocats",
  legalName: "Maison d'Avocats — Avocats Associés",
  tagline: "Cabinet d'avocats d'affaires",
  description:
    "Cabinet d'avocats d'affaires à Paris. Conseil et contentieux en droit des sociétés, fusions-acquisitions, contentieux commercial et droit international. Une approche sur mesure, discrète et exigeante.",
  url: "https://www.maison-davocats.fr",
  locale: "fr_FR",
  contact: {
    email: "contact@maison-davocats.fr",
    phone: "+33 1 45 62 18 40",
    phoneHref: "+33145621840",
    address: {
      street: "22 Avenue Montaigne",
      postalCode: "75008",
      city: "Paris",
      country: "France",
      full: "22 Avenue Montaigne, 75008 Paris",
    },
    hours: [
      { day: "Lundi — Vendredi", value: "9h00 — 19h00" },
      { day: "Samedi", value: "Sur rendez-vous" },
      { day: "Dimanche", value: "Fermé" },
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
  // Mentions obligatoires (RIN art. 10.4 + LCEN/RGPD).
  // ⚠️ Valeurs [À COMPLÉTER] : voir SKIPPED-TASKS.md avant mise en ligne.
  legal: {
    barreau: "Barreau de Paris",
    structure: "Société d'avocats [forme à confirmer — ex. AARPI / SELAS]",
    rcs: "[RCS Paris — à compléter]",
    siren: "[SIREN — à compléter]",
    vat: "[N° TVA intracommunautaire — à compléter]",
    publicationDirector: "Éléonore Delacroix",
    host: {
      name: "[Hébergeur — ex. Vercel Inc. / OVHcloud — à compléter]",
      address: "[Adresse de l'hébergeur — à compléter]",
    },
    updatedAt: "juillet 2026",
  },
} as const;

export const navLinks = [
  { label: "Expertises", href: "#expertises" },
  { label: "Le Cabinet", href: "#cabinet" },
  { label: "Associés", href: "#associes" },
  { label: "Approche", href: "#approche" },
  { label: "Honoraires", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
