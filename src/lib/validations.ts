import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Veuillez indiquer votre nom.")
    .max(80, "Nom trop long."),
  email: z.string().email("Adresse e-mail invalide."),
  phone: z
    .string()
    .max(30, "Numéro trop long.")
    .optional()
    .or(z.literal("")),
  subject: z.string().min(1, "Veuillez sélectionner un objet."),
  message: z
    .string()
    .min(10, "Votre message doit contenir au moins 10 caractères.")
    .max(2000, "Message trop long."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Votre consentement est requis." }),
  }),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const contactSubjects = [
  "Prise de rendez-vous",
  "Droit des sociétés",
  "Fusions & acquisitions",
  "Contentieux commercial",
  "Droit international",
  "Autre demande",
] as const;
