import { experience } from "@/content/experience";
import { Separator } from "@/components/ui/separator";

export function ExperienceTimeline() {
  return <section className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 py-20 md:px-12"><div className="grid grid-cols-[auto_1fr] gap-5"><div className="mt-2 h-2 w-2 rounded-full bg-amber shadow-[0_0_16px_hsl(var(--amber))]" /><div><div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between"><div><h2 className="text-2xl text-paper">{experience.title}</h2><p className="text-paper/60">{experience.organization}</p></div><time className="font-mono text-xs text-paper/50">{experience.dates}</time></div><Separator className="mb-5" /><p className="max-w-xl text-sm leading-7 text-paper/65">{experience.summary}</p></div></div></section>;
}
