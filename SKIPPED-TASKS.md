# Tâches reportées — à compléter par le cabinet

Ce document liste tout ce qui a été **volontairement laissé de côté** lors de la passe « démo client » parce que cela nécessite de **vraies informations, des identifiants, ou une décision de votre part**. Chaque point indique le fichier concerné et ce qu'il faut fournir.

> Tout ce qui suit a été soit remplacé par un **contenu d'exemple clairement marqué** `[À COMPLÉTER]`, soit laissé fonctionnel mais non connecté. Rien ici n'est bloquant pour une démonstration ; tout l'est pour une mise en ligne réelle.

---

## 🔴 Bloquant avant mise en ligne

### 1. Formulaire de contact — aucun e-mail n'est envoyé
- **Fichier :** `src/app/api/contact/route.ts`
- **État actuel :** le formulaire valide les données puis renvoie `{ ok: true }` **sans rien envoyer**. En démo, l'utilisateur voit bien l'écran de confirmation, mais **aucune demande n'est transmise**.
- **À faire :** créer un compte chez un fournisseur d'e-mail (ex. **Resend**, Postmark) ou brancher votre CRM, ajouter la clé API dans `.env.local` (`RESEND_API_KEY=…`), et remplacer le `// TODO` par l'envoi réel + une adresse de réception.

### 2. Données légales de la structure (Mentions légales / RGPD)
- **Fichiers :** `src/lib/site.ts` (bloc `legal`), `src/app/mentions-legales/page.tsx`, `src/app/politique-confidentialite/page.tsx`, `src/app/cookies/page.tsx`
- **État actuel :** pages créées avec la structure réglementaire française, mais les champs sensibles sont des **placeholders** `[À COMPLÉTER]`.
- **À fournir :**
  - Forme d'exercice exacte (AARPI / SELAS / SELARL / association…) — actuellement supposée.
  - **RCS**, **SIREN/SIRET**, **n° de TVA intracommunautaire**.
  - **Directeur de la publication** (nom).
  - **Hébergeur** : raison sociale + adresse + téléphone (ex. Vercel, OVH…).
  - Barreau d'affiliation exact (supposé **Barreau de Paris** d'après l'adresse) et, le cas échéant, n° au tableau de l'Ordre / CARPA.
  - Validation du texte des trois pages par un avocat / le référent déontologie.

### 3. Bandeau cookies — connecter le refus/acceptation aux scripts réels
- **Fichier :** `src/components/shared/cookie-consent.tsx`, `src/components/shared/consent-map.tsx`
- **État actuel :** le bandeau enregistre le choix et **conditionne le chargement de Google Maps** au consentement (conforme RGPD pour la démo). Il n'y a pas d'autres traceurs.
- **À faire si vous ajoutez de l'analytics** (Google Analytics, Meta, etc.) : ne charger ces scripts qu'après consentement, via le même hook `useCookieConsent`.

---

## 🟠 Crédibilité — nécessite votre contenu réel

### 4. Réalisations / dossiers représentatifs
- **Fichiers :** `src/lib/data.ts` (`practiceAreas[].services`), pages `src/app/expertises/[id]/page.tsx`
- **État actuel :** chaque expertise affiche des **exemples d'intervention génériques** (types de missions), **pas de dossiers nommés**. C'est volontaire — les mentions de dossiers réels doivent être factuelles et non trompeuses (RIN art. 10).
- **À fournir :** vos interventions marquantes, décrites de façon factuelle et, si besoin, anonymisée (« Acquisition transfrontalière dans le secteur X »).

### 5. Classements & distinctions (Chambers, Legal 500, etc.)
- **État actuel :** **aucun classement affiché** (on ne peut pas en inventer).
- **À fournir :** vos classements/récompenses réels — ce sont les signaux de confiance n°1 des cabinets premium. À intégrer dans le hero et/ou une section dédiée.

### 6. Profils avocats — barreau & pages dédiées
- **Fichier :** `src/lib/data.ts` (`attorneys`), `src/components/shared/attorney-card.tsx`
- **État actuel :** fiches riches (bio, formation, langues, expérience) affichées dans un tiroir dépliable. Le **barreau** affiché est « Barreau de Paris » par défaut.
- **À faire (reporté) :** pages avocat dédiées `/associes/[id]` (non créées pour limiter la démo) ; vérifier années/formations réelles ; ajouter admissions au barreau exactes.

### 7. Témoignages & taux de satisfaction — décision déontologique
- **Fichiers :** `src/components/sections/testimonials.tsx`, `src/lib/data.ts` (`testimonials`, `stats`)
- **État actuel :** **conservés tels quels pour la démo** (visuellement valorisants).
- **⚠️ À décider avant mise en ligne :** en France, les **témoignages clients**, la mention « Client vérifié » et un **« taux de satisfaction 96 % »** sont en tension avec le **RIN art. 10** (pas de comparatif, pas de promesse de résultat, communication *digne et modérée*). Les cabinets premium français (Bredin Prat, Gide) n'en affichent pas. **Recommandation :** remplacer par des faits neutres (langues, juridictions, années) et des classements. Non modifié car c'est votre décision de marque.

### 8. Actualités / publications — contenu réel
- **Fichiers :** `src/lib/data.ts` (`insights`), `src/app/actualites/page.tsx`
- **État actuel :** section + page d'index avec **articles d'exemple** (titres génériques, dates fictives, marqués comme exemples).
- **À faire :** rédiger de vraies notes juridiques ; créer les pages article `/actualites/[slug]` (non créées).

---

## 🟡 Portée — projets plus lourds (reportés)

### 9. Site bilingue FR / EN
- **État actuel :** site **FR uniquement**. Un cabinet parisien à clientèle internationale est généralement bilingue.
- **À faire :** internationalisation (ex. `next-intl` ou route groups) + traduction du contenu.

### 10. Section Carrières / Recrutement
- **État actuel :** absente. Standard chez les cabinets de ce niveau.
- **À faire :** page carrières + offres.

### 11. (Optionnel) Sobriété visuelle — retirer les effets décoratifs
- **Fichiers :** `custom-cursor.tsx`, `preloader.tsx`, `mouse-glow.tsx`, overlays `grain`
- **État actuel :** **conservés** (ils impressionnent en démo).
- **Recommandation (votre choix) :** pour une image « conseil sérieux » plutôt que « luxe/mode », ces effets pourraient être retirés (gain aussi en performance et accessibilité — le curseur personnalisé masque le curseur natif). À arbitrer après retour client.

---

## Cohérence de marque à trancher
- Le code nomme le cabinet **« Maison Delacroix »** (`src/lib/site.ts` → `site.name`) alors que votre brief parle de **« Maison d'Avocats »**. À aligner (logo, `<title>`, préchargement, données structurées).
