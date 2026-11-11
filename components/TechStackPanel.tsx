import { skillGroups } from "@/content/skills";
import { Separator } from "@/components/ui/separator";

export function TechStackPanel() {
  return <section className="mx-auto flex h-full max-w-4xl flex-col justify-center overflow-y-auto px-6 py-20 md:px-12"><div className="grid gap-8 sm:grid-cols-2">{skillGroups.map((group, index) => <div key={group.name}><h2 className="mb-4 text-sm text-paper">{group.name}</h2><div className="flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs leading-6 text-paper/55">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>{index < skillGroups.length - 1 && <Separator className="mt-7 sm:hidden" />}</div>)}</div></section>;
}
