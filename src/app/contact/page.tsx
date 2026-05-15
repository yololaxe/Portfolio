"use client";

import { motion } from "framer-motion";
import PageShell from "@/components/PageShell";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const { t, lang } = useLanguage();
  const isFr = lang === "fr";

  const services = isFr
    ? [
        "Développement d'applications web sur mesure",
        "API, backends et outils internes",
        "Intégration IA, automatisation et data",
      ]
    : [
        "Custom web application development",
        "APIs, backends, and internal tools",
        "AI integration, automation, and data work",
      ];

  const mailSubject = encodeURIComponent(
    isFr ? "Demande de devis" : "Quote request"
  );
  const mailBody = encodeURIComponent(
    isFr
      ? "Bonjour Alban,%0D%0A%0D%0AJe vous contacte pour le projet suivant :%0D%0A%0D%0A- Société :%0D%0A- Besoin :%0D%0A- Délai souhaité :%0D%0A- Budget estimatif :%0D%0A%0D%0AMerci."
      : "Hello Alban,%0D%0A%0D%0AI am contacting you regarding the following project:%0D%0A%0D%0A- Company:%0D%0A- Need:%0D%0A- Desired timeline:%0D%0A- Estimated budget:%0D%0A%0D%0AThank you."
  );

  return (
    <div className="relative min-h-[100svh] px-4 pt-20 pb-12 text-slate-100 sm:px-6 bg-slate-950 font-sans overflow-hidden">
      <LanguageToggle />

      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute top-24 left-1/2 h-[360px] w-[760px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <PageShell className="relative z-10 mx-auto w-full max-w-5xl rounded-[32px] border-slate-800/80 p-8 shadow-2xl shadow-blue-900/10 glass-panel sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.contact.title}{" "}
              <span className="text-gradient-pro">{t.contact.titleHighlight}</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 rounded-3xl border border-blue-500/20 bg-blue-950/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">
                {isFr ? "Services" : "Services"}
              </p>
              <ul className="mt-5 space-y-3 text-slate-200">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`mailto:amoragny@gmail.com?subject=${mailSubject}&body=${mailBody}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500 shadow-lg shadow-blue-500/20"
              >
                {isFr ? "Demander un devis" : "Request a quote"}
              </a>
              <a
                href="mailto:amoragny@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-4 font-semibold text-slate-200 transition-colors hover:bg-slate-800"
              >
                amoragny@gmail.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {isFr ? "Contact direct" : "Direct contact"}
              </p>
              <a
                href="mailto:amoragny@gmail.com"
                className="mt-4 block text-2xl font-bold tracking-tight text-white transition-colors hover:text-blue-300"
              >
                amoragny@gmail.com
              </a>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {isFr
                  ? "Le plus simple pour une prise de contact rapide, un échange sur un besoin ou une demande de devis."
                  : "The simplest way to reach out quickly about a need, a project, or a quote request."}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/alban-moragny-758714291/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-xl border border-[#0A66C2]/30 bg-[#0A66C2]/10 px-4 py-3 font-semibold text-blue-300 transition-colors hover:bg-[#0A66C2]/20"
              >
                <LinkedinIcon />
                linkedin.com/in/alban-moragny-758714291
              </a>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {isFr
                  ? "Pour retrouver mon profil, mon parcours et me contacter aussi via LinkedIn."
                  : "To view my profile, background, and reach out through LinkedIn as well."}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                {isFr ? "Cadre" : "Scope"}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {isFr
                  ? "Prestations proposées via micro-entreprise, avec échange initial pour cadrer le besoin, estimer la charge et établir un devis."
                  : "Services offered through a sole proprietorship, with an initial discussion to define the need, estimate the workload, and prepare a quote."}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/pro"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-1"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            {t.contact.backButton}
          </Link>
        </div>
      </PageShell>
    </div>
  );
}
