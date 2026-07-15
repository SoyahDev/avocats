import {
  Scale,
  Building2,
  Handshake,
  Globe2,
  ShieldCheck,
  Landmark,
  Gavel,
  Briefcase,
  Award,
  Users,
  Lock,
  Eye,
  Target,
  Compass,
} from "lucide-react";
import type {
  PracticeArea,
  Attorney,
  Testimonial,
  Stat,
  ProcessStep,
  Faq,
  Value,
  Insight,
} from "@/types";

export const practiceAreas: PracticeArea[] = [
  {
    id: "corporate",
    title: "Droit des sociétés",
    description:
      "Structuration, gouvernance et opérations sur le capital. Nous accompagnons dirigeants et actionnaires à chaque étape de la vie de l'entreprise.",
    icon: Building2,
    points: ["Constitution & pactes", "Gouvernance", "Opérations sur capital"],
    intro:
      "Du choix de la structure à la sortie des associés, nous sécurisons la vie juridique de l'entreprise et la relation entre ses dirigeants et ses actionnaires. Notre approche allie technicité et sens des affaires, au service de décisions durables.",
    services: [
      "Constitution, transformation et restructuration de sociétés",
      "Rédaction et négociation de pactes d'associés et d'actionnaires",
      "Gouvernance, secrétariat juridique et assemblées",
      "Augmentations de capital, cessions de titres et opérations complexes",
    ],
    referentId: "delacroix",
  },
  {
    id: "ma",
    title: "Fusions & acquisitions",
    description:
      "De l'audit à la négociation, une exécution rigoureuse des opérations de croissance externe, cessions et rapprochements stratégiques.",
    icon: Handshake,
    points: ["Due diligence", "Négociation", "Closing & intégration"],
    intro:
      "Nous conseillons dirigeants, groupes et fonds d'investissement sur leurs opérations de croissance externe, cessions et rapprochements. Une exécution méthodique, de l'audit préparatoire à l'intégration post-acquisition.",
    services: [
      "Audits d'acquisition (due diligence) et cartographie des risques",
      "Négociation et rédaction des protocoles et garanties",
      "Structuration juridique et fiscale de l'opération",
      "Closing, réalisation des conditions et suivi d'intégration",
    ],
    referentId: "delacroix",
  },
  {
    id: "litigation",
    title: "Contentieux commercial",
    description:
      "Une défense déterminée devant les juridictions civiles et commerciales, guidée par la recherche constante de la solution la plus favorable.",
    icon: Gavel,
    points: ["Contentieux des affaires", "Arbitrage", "Voies d'exécution"],
    intro:
      "Face à un litige à fort enjeu, nous conjuguons rigueur analytique et sens tactique du procès. De la stratégie précontentieuse à l'exécution des décisions, nous défendons vos intérêts avec constance.",
    services: [
      "Contentieux commerciaux et litiges entre associés",
      "Arbitrage interne et international",
      "Procédures d'urgence (référés, mesures conservatoires)",
      "Voies d'exécution et recouvrement",
    ],
    referentId: "armand",
  },
  {
    id: "international",
    title: "Droit international",
    description:
      "Conseil transfrontalier et coordination de dossiers multi-juridictionnels au sein de notre réseau de correspondants européens.",
    icon: Globe2,
    points: ["Contrats internationaux", "Investissements", "Réseau européen"],
    intro:
      "Pour les dossiers transfrontaliers, nous coordonnons un réseau éprouvé de correspondants européens et pilotons vos opérations multi-juridictionnelles avec une vision globale du risque.",
    services: [
      "Contrats commerciaux internationaux",
      "Implantations et investissements transfrontaliers",
      "Coordination de conseils étrangers",
      "Résolution de différends internationaux",
    ],
    referentId: "moreau",
  },
  {
    id: "compliance",
    title: "Conformité & risques",
    description:
      "Cartographie des risques, dispositifs anticorruption et protection des données. La conformité comme avantage concurrentiel.",
    icon: ShieldCheck,
    points: ["RGPD", "Anticorruption", "Cartographie des risques"],
    intro:
      "Nous transformons la contrainte réglementaire en avantage concurrentiel : dispositifs de conformité sur mesure, protection des données et prévention des risques, pensés pour être réellement appliqués.",
    services: [
      "Programmes anticorruption (loi Sapin II)",
      "Mise en conformité et gouvernance RGPD",
      "Cartographie et prévention des risques",
      "Formation des équipes et audits internes",
    ],
    referentId: "moreau",
  },
  {
    id: "realestate",
    title: "Immobilier & patrimoine",
    description:
      "Acquisitions, restructurations foncières et gestion patrimoniale pour investisseurs privés et institutionnels exigeants.",
    icon: Landmark,
    points: ["Transactions", "Baux commerciaux", "Structuration"],
    intro:
      "Nous accompagnons investisseurs institutionnels et familles dans leurs opérations immobilières et la structuration de leur patrimoine, avec une attention particulière portée à la fiscalité et à la transmission.",
    services: [
      "Acquisitions et cessions d'actifs immobiliers",
      "Baux commerciaux et gestion locative",
      "Structuration patrimoniale et transmission",
      "Restructurations foncières et montages",
    ],
    referentId: "lefevre",
  },
];

export const attorneys: Attorney[] = [
  {
    id: "delacroix",
    name: "Éléonore Delacroix",
    role: "Associée fondatrice",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
    specialties: ["Fusions-acquisitions", "Droit des sociétés"],
    bio: "Éléonore fonde la Maison après quinze années au sein de cabinets internationaux de premier plan. Elle conseille dirigeants et fonds d'investissement sur leurs opérations les plus stratégiques, avec une exigence constante de précision et de discrétion.",
    education: [
      "DEA Droit des affaires — Panthéon-Assas",
      "LL.M. — London School of Economics",
    ],
    languages: ["Français", "Anglais", "Italien"],
    experience: "18 ans d'expérience",
    email: "e.delacroix@maison-davocats.fr",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "armand",
    name: "Julien Armand",
    role: "Associé — Contentieux",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    specialties: ["Contentieux commercial", "Arbitrage"],
    bio: "Plaideur reconnu, Julien intervient dans les contentieux commerciaux les plus complexes et les procédures d'arbitrage international. Sa stratégie allie rigueur analytique et sens tactique du procès.",
    education: [
      "Master II Contentieux — Paris 1",
      "Certificat d'arbitrage international — CEPANI",
    ],
    languages: ["Français", "Anglais", "Espagnol"],
    experience: "15 ans d'expérience",
    email: "j.armand@maison-davocats.fr",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "moreau",
    name: "Camille Moreau",
    role: "Associée — International",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    specialties: ["Droit international", "Conformité"],
    bio: "Camille pilote les dossiers transfrontaliers et les programmes de conformité de groupes internationaux. Elle conjugue une vision globale du risque à une parfaite maîtrise des environnements réglementaires européens.",
    education: [
      "LL.M. International Business Law — Leiden",
      "Sciences Po Paris",
    ],
    languages: ["Français", "Anglais", "Néerlandais", "Allemand"],
    experience: "13 ans d'expérience",
    email: "c.moreau@maison-davocats.fr",
    linkedin: "https://www.linkedin.com/",
  },
  {
    id: "lefevre",
    name: "Antoine Lefèvre",
    role: "Counsel — Immobilier",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=900&q=80",
    specialties: ["Immobilier", "Patrimoine"],
    bio: "Antoine accompagne investisseurs institutionnels et familles dans leurs opérations immobilières et la structuration de leur patrimoine, avec une attention particulière portée à la fiscalité et à la transmission.",
    education: [
      "Master II Droit immobilier — Paris II",
      "Diplôme supérieur de notariat",
    ],
    languages: ["Français", "Anglais"],
    experience: "11 ans d'expérience",
    email: "a.lefevre@maison-davocats.fr",
    linkedin: "https://www.linkedin.com/",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Une rigueur et une disponibilité rares. La Maison a sécurisé notre acquisition la plus sensible avec une maîtrise remarquable des enjeux, sans jamais rien céder sur l'exigence.",
    author: "Hélène Vasseur",
    role: "Directrice Générale",
    company: "Groupe Vasseur",
  },
  {
    id: "t2",
    quote:
      "Un cabinet qui pense en stratège avant de penser en juriste. Leurs conseils ont dépassé le strict cadre juridique pour éclairer nos décisions les plus structurantes.",
    author: "Marc-Antoine Rey",
    role: "Président",
    company: "Rey Capital",
  },
  {
    id: "t3",
    quote:
      "Discrétion absolue, réactivité et une élégance dans la négociation qui font toute la différence. Nous ne confions plus nos dossiers sensibles qu'à eux.",
    author: "Sophie Lambert",
    role: "Secrétaire Générale",
    company: "Lambert Industries",
  },
  {
    id: "t4",
    quote:
      "Face à un contentieux à fort enjeu, leur sang-froid et la finesse de leur analyse ont été déterminants. Un partenaire de confiance sur le long terme.",
    author: "Thomas Bertrand",
    role: "Fondateur",
    company: "Bertrand & Associés",
  },
];

export const stats: Stat[] = [
  { value: 18, suffix: "+", label: "Années d'expérience" },
  { value: 640, suffix: "+", label: "Dossiers accompagnés" },
  { value: 6, suffix: "", label: "Langues de travail" },
  { value: 12, suffix: "", label: "Juridictions couvertes" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Consultation",
    description:
      "Un premier échange confidentiel pour comprendre vos enjeux, votre contexte et vos objectifs avec la plus grande attention.",
  },
  {
    step: "02",
    title: "Analyse",
    description:
      "Une étude approfondie du dossier, cartographie des risques et identification précise des leviers juridiques mobilisables.",
  },
  {
    step: "03",
    title: "Stratégie",
    description:
      "L'élaboration d'une feuille de route sur mesure, alignée sur vos priorités et arbitrée avec vous à chaque étape clé.",
  },
  {
    step: "04",
    title: "Représentation",
    description:
      "Une exécution déterminée, en conseil comme en contentieux, portée par une communication constante et transparente.",
  },
  {
    step: "05",
    title: "Résolution",
    description:
      "L'aboutissement du dossier et un accompagnement pérenne, pensé pour anticiper et sécuriser vos décisions futures.",
  },
];

export const faqs: Faq[] = [
  {
    question: "Comment se déroule le premier rendez-vous ?",
    answer:
      "Le premier entretien est un moment d'écoute confidentiel, en cabinet ou en visioconférence. Nous prenons le temps de comprendre votre situation avant de vous présenter une approche claire, un calendrier et une estimation d'honoraires transparente.",
  },
  {
    question: "Comment sont fixés vos honoraires ?",
    answer:
      "Nos honoraires sont définis en toute transparence dès l'ouverture du dossier, par convention écrite. Selon la nature de la mission, ils peuvent être forfaitaires, au temps passé ou associés à un honoraire de résultat. Aucune surprise ne vous sera jamais présentée.",
  },
  {
    question: "Intervenez-vous en dehors de Paris et à l'international ?",
    answer:
      "Oui. Nous accompagnons nos clients sur l'ensemble du territoire et, pour les dossiers transfrontaliers, nous coordonnons un réseau éprouvé de correspondants au sein des principales juridictions européennes.",
  },
  {
    question: "Quel est votre délai de réponse ?",
    answer:
      "La réactivité fait partie de notre exigence. Toute sollicitation reçoit une première réponse sous 24 heures ouvrées, et chaque dossier bénéficie d'un interlocuteur associé dédié tout au long de la mission.",
  },
  {
    question: "Comment garantissez-vous la confidentialité ?",
    answer:
      "La confidentialité est au cœur de notre déontologie. Le secret professionnel protège l'intégralité de nos échanges, et nos dispositifs internes de sécurité de l'information respectent les standards les plus élevés.",
  },
];

export const values: Value[] = [
  {
    title: "Expérience",
    description:
      "Près de deux décennies au service des opérations et contentieux les plus exigeants.",
    icon: Award,
  },
  {
    title: "Résultats",
    description:
      "Une approche orientée vers l'issue la plus favorable, mesurée et assumée.",
    icon: Target,
  },
  {
    title: "Accompagnement sur mesure",
    description:
      "Un associé dédié et une relation de proximité, à chaque étape du dossier.",
    icon: Users,
  },
  {
    title: "Expertise internationale",
    description:
      "Une maîtrise des environnements transfrontaliers et un réseau européen.",
    icon: Globe2,
  },
  {
    title: "Confidentialité",
    description:
      "Le secret professionnel et la discrétion comme principes intangibles.",
    icon: Lock,
  },
  {
    title: "Transparence",
    description:
      "Une information claire, des honoraires lisibles et aucune zone d'ombre.",
    icon: Eye,
  },
];

export const timeline = [
  {
    year: "2007",
    title: "Les fondations",
    description:
      "Éléonore Delacroix pose les premières pierres d'une pratique exigeante du droit des affaires.",
  },
  {
    year: "2012",
    title: "L'essor du contentieux",
    description:
      "L'arrivée de Julien Armand structure un pôle contentieux et arbitrage de premier plan.",
  },
  {
    year: "2017",
    title: "Dimension internationale",
    description:
      "Ouverture d'un desk international et déploiement d'un réseau de correspondants européens.",
  },
  {
    year: "2024",
    title: "La Maison aujourd'hui",
    description:
      "Un cabinet à taille humaine, référent sur ses expertises, fidèle à son exigence fondatrice.",
  },
] as const;

export const whyChooseIcons = { Briefcase, Scale, Compass };

/**
 * ⚠️ CONTENU D'EXEMPLE — titres et dates fictifs, à remplacer par de vraies
 * notes juridiques. Voir SKIPPED-TASKS.md (§8).
 */
export const insights: Insight[] = [
  {
    slug: "reforme-droit-des-suretes",
    title: "Réforme du droit des sûretés : ce que les dirigeants doivent anticiper",
    excerpt:
      "Panorama des évolutions récentes et de leurs conséquences pratiques sur le financement et la garantie des opérations.",
    category: "Droit des sociétés",
    date: "2026-05-12",
    dateLabel: "12 mai 2026",
  },
  {
    slug: "clauses-earn-out-ma",
    title: "Clauses d'earn-out : sécuriser le prix dans les opérations de M&A",
    excerpt:
      "Comment structurer un complément de prix équilibré et limiter le risque de contentieux post-acquisition.",
    category: "Fusions & acquisitions",
    date: "2026-03-28",
    dateLabel: "28 mars 2026",
  },
  {
    slug: "conformite-rgpd-2026",
    title: "Conformité RGPD : les points de vigilance pour 2026",
    excerpt:
      "Les priorités de contrôle et les bonnes pratiques pour transformer la conformité en avantage durable.",
    category: "Conformité & risques",
    date: "2026-02-04",
    dateLabel: "4 février 2026",
  },
];
