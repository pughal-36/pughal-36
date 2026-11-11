"use client";

import { caseStudies } from "@/content/caseStudies";
import type { projects } from "@/content/projects";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

type Project = (typeof projects)[number];
const beats = ["Problem", "Options", "Decision", "What I changed", "Outcome"] as const;

function PanelBody({ project }: { project: Project }) {
  const study = caseStudies[project.id as keyof typeof caseStudies];
  return <><SheetHeader><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">Case study</p><SheetTitle>{project.name}</SheetTitle><SheetDescription>{project.description}</SheetDescription></SheetHeader><div className="space-y-6">{beats.map((beat) => <div key={beat}><h3 className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">{beat}</h3><p className="text-sm leading-6 text-paper/75">{study[beat]}</p></div>)}</div></>;
}

export function CaseStudyPanel({ project, open, onOpenChange }: { project: Project | null; open: boolean; onOpenChange: (open: boolean) => void }) {
  if (!project) return null;
  return <><div className="hidden md:block"><Sheet open={open} onOpenChange={onOpenChange}><SheetContent><PanelBody project={project} /></SheetContent></Sheet></div><div className="md:hidden"><Drawer open={open} onOpenChange={onOpenChange}><DrawerContent><DrawerHeader><p className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">Case study</p><DrawerTitle>{project.name}</DrawerTitle><DrawerDescription>{project.description}</DrawerDescription></DrawerHeader><div className="space-y-6">{beats.map((beat) => <div key={beat}><h3 className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-paper/45">{beat}</h3><p className="text-sm leading-6 text-paper/75">{caseStudies[project.id as keyof typeof caseStudies][beat]}</p></div>)}</div></DrawerContent></Drawer></div></>;
}
