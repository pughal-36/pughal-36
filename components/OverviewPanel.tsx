import { aboutText, socialLinks } from "@/content/about";
import { ResumeLink } from "@/components/ResumeLink";

export function OverviewPanel() {
  return <section className="mx-auto flex h-full max-w-2xl flex-col justify-center gap-8 px-6 py-20 md:px-12"><p className="max-w-xl text-xl leading-relaxed text-paper md:text-2xl">{aboutText}</p><div className="flex flex-col items-start gap-4"><ResumeLink /><div className="flex gap-5 font-mono text-xs text-paper/60">{socialLinks.map((link) => <a className="focus-ring transition-colors hover:text-amber" href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>)}</div></div></section>;
}
