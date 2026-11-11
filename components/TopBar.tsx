"use client";

import { ContactButton } from "@/components/ContactButton";
import { NameLabel } from "@/components/NameLabel";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

export const tabItems = [
  { value: "overview", label: "Overview" },
  { value: "experience", label: "Experience" },
  { value: "projects", label: "Projects" },
  { value: "stack", label: "Tech Stack" },
] as const;

export function TopBar() {
  return <header className="relative z-20 hidden h-16 shrink-0 items-center justify-between border-b border-paper/10 px-8 md:flex"><NameLabel /><nav aria-label="Primary navigation"><TabsList className="gap-8"><TabButtons /></TabsList></nav><ContactButton /></header>;
}

export function TabButtons() {
  return <>{tabItems.map((item) => <TabsTrigger key={item.value} value={item.value} className="relative py-2 text-xs text-paper/50 transition-colors hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber data-[state=active]:text-paper">{item.label}</TabsTrigger>)}</>;
}
