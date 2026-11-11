"use client";

import { useRef, useState } from "react";
import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudyPanel } from "@/components/CaseStudyPanel";

export function ProjectGrid() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const close = (open: boolean) => { setSelected(open ? selected : null); if (!open && selected) cardRefs.current[selected.id]?.focus(); };
  return <section className="mx-auto flex h-full max-w-5xl flex-col justify-center overflow-y-auto px-6 py-20 md:px-12"><div className="grid gap-4 md:grid-cols-3">{projects.map((project, index) => <button ref={(element) => { cardRefs.current[project.id] = element; }} className="focus-ring group flex min-h-56 flex-col items-start justify-between rounded-lg border border-paper/10 bg-paper/[0.03] p-5 text-left transition-colors hover:border-amber/60 hover:bg-paper/[0.06]" key={project.id} onClick={() => setSelected(project)}><div className="flex w-full items-start justify-between"><Badge>0{index + 1}</Badge><span className="font-mono text-xs text-paper/30 transition-colors group-hover:text-amber">↗</span></div><div><h2 className="mb-3 text-lg leading-snug text-paper">{project.name}</h2><p className="text-sm leading-6 text-paper/55">{project.summary}</p></div></button>)}</div><CaseStudyPanel project={selected} open={Boolean(selected)} onOpenChange={close} /><Button asChild variant="ghost" className="mt-5 self-start px-0 font-mono text-xs text-paper/50 hover:bg-transparent hover:text-amber"><a href="https://github.com/pughal-36" target="_blank" rel="noreferrer">View more work ↗</a></Button></section>;
}
