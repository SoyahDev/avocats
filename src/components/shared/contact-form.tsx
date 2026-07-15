"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle } from "lucide-react";
import { contactSchema, contactSubjects, type ContactValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedButton } from "./animated-button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-1.5 pt-1.5 text-xs text-red-700"
        >
          <AlertCircle className="size-3" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-start gap-5 border border-gold-400/40 bg-card p-10"
      >
        <span className="grid size-14 place-items-center rounded-full bg-gold-400/15 text-gold-600">
          <Check className="size-7" />
        </span>
        <h3 className="font-serif text-2xl text-navy-900">Message bien reçu</h3>
        <p className="max-w-md leading-relaxed text-muted-foreground">
          Nous vous remercions de votre confiance. Un avocat de la Maison vous
          recontactera très prochainement.
        </p>
        <AnimatedButton
          variant="outline"
          size="sm"
          showArrow={false}
          onClick={() => setStatus("idle")}
        >
          Envoyer un autre message
        </AnimatedButton>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Nom complet *</Label>
          <Input id="name" placeholder="Jean Dupont" aria-invalid={!!errors.name} {...register("name")} />
          <FieldError message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="email">Adresse e-mail *</Label>
          <Input id="email" type="email" placeholder="jean@exemple.com" aria-invalid={!!errors.email} {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" placeholder="+33 6 12 34 56 78" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
        <div>
          <Label htmlFor="subject">Objet *</Label>
          <select
            id="subject"
            aria-invalid={!!errors.subject}
            className="h-12 w-full border-0 border-b border-navy-900/20 bg-transparent px-1 pb-2 pt-1 text-base text-navy-900 transition-colors duration-300 focus-visible:border-gold-400 focus-visible:outline-none"
            defaultValue=""
            {...register("subject")}
          >
            <option value="" disabled>
              Sélectionnez…
            </option>
            {contactSubjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError message={errors.subject?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="message">Votre message *</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Décrivez brièvement votre situation…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        <FieldError message={errors.message?.message} />
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm text-muted-foreground">
          <input
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-gold-500"
            {...register("consent")}
          />
          <span>
            J&apos;accepte que mes données soient traitées dans le cadre de ma
            demande, conformément à la politique de confidentialité.
          </span>
        </label>
        <FieldError message={errors.consent?.message} />
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <AnimatedButton
          type="submit"
          variant="primary"
          size="lg"
          disabled={status === "submitting"}
          showArrow={status !== "submitting"}
          className={cn(status === "submitting" && "opacity-80")}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Envoi en cours
            </>
          ) : (
            "Envoyer ma demande"
          )}
        </AnimatedButton>

        {status === "error" && (
          <p className="flex items-center gap-1.5 text-sm text-red-700">
            <AlertCircle className="size-4" />
            Une erreur est survenue. Merci de réessayer.
          </p>
        )}
      </div>
    </form>
  );
}
