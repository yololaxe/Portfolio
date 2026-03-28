export type Experience = {
  id: string;
  titre: string;
  organisation: string;
  periode: string; // "Avr 2024 — Juil 2025"
  lieux?: string;
  tags?: string[];
  resume: string;
  liens?: { label: string; href: string }[];
};

export const experiences: Experience[] = [
  {
    id: 'metropole-mtp',
    titre: 'App factures énergétiques',
    organisation: 'Métropole de Montpellier',
    periode: '2025',
    tags: ['Django', 'React', 'PostgreSQL'],
    resume:
      'Dév API, pages privées, rôles, logs, recherche backend; CI/CD, tests.',
    liens: [{ label: 'Notes projet', href: 'https://...' }],
  },
  // Ajoute ici le reste
];
