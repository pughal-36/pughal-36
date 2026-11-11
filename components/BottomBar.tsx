"use client";

import { ContactButton } from "@/components/ContactButton";
import { NameLabel } from "@/components/NameLabel";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabItems } from "@/components/TopBar";

export function BottomBar() {
  return <><div className="fixed left-0 right-0 top-0 z-20 flex h-[calc(3.5rem+env(safe-area-inset-top))] items-center justify-between border-b border-paper/10 bg-ink/80 px-4 pt-[env(safe-area-inset-top)] backdrop-blur-md md:hidden"><NameLabel /><ContactButton /></div><nav aria-label="Mobile navigation" className="fixed bottom-0 left-0 right-0 z-20 border-t border-paper/10 bg-ink/90 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur-md md:hidden"><TabsList className="grid h-14 w-full grid-cols-4"><>{tabItems.map((item) => <TabsTrigger key={item.value} value={item.value} className="focus-ring flex h-full flex-col items-center justify-center gap-1 text-[10px] text-paper/50 data-[state=active]:text-amber"><span className="font-mono text-[9px]">{String(tabItems.indexOf(item) + 1).padStart(2, "0")}</span>{item.label}</TabsTrigger>)}</TabsList></nav></>;
}
