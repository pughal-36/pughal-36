export const caseStudies = {
  vitals: {
    Problem: "Health information is useful only when the important signal is easy to find.",
    Options: "I compared a dense table, a card-heavy dashboard, and a quieter timeline-led view.",
    Decision: "The interface keeps the current state prominent and lets supporting context stay close without competing for attention.",
    "What I changed": "I shaped the layout around hierarchy first: readable values, clear trends, and deliberate empty space.",
    Outcome: "Vitals makes a complicated set of readings feel approachable without flattening the detail.",
  },
  brightloop: {
    Problem: "Subscription changes touch billing, access, and customer trust at the same time.",
    Options: "The system could hide complexity behind a wizard or expose every action in a single administrative surface.",
    Decision: "I chose a staged workspace where the next safe action is visible and the consequences remain close at hand.",
    "What I changed": "I organized plan state, customer context, and lifecycle actions into a consistent operational flow.",
    Outcome: "Brightloop gives teams a clearer path through recurring revenue decisions.",
  },
  flyrank: {
    Problem: "Small interface decisions become obvious when a component must survive real states and real users.",
    Options: "I worked through isolated demos, a shared component approach, and task-led prototypes.",
    Decision: "Each assignment stayed focused on the interaction contract before visual polish.",
    "What I changed": "I built accessible React components, failure-aware streaming states, motion studies, and audit recommendations.",
    Outcome: "The work became a practical loop of building, testing, noticing, and improving.",
  },
} as const;
