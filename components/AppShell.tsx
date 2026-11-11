"use client";

import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TopBar } from "@/components/TopBar";
import { BottomBar } from "@/components/BottomBar";
import { BlackHoleBackground } from "@/components/BlackHoleBackground";
import { OverviewPanel } from "@/components/OverviewPanel";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TechStackPanel } from "@/components/TechStackPanel";

export function AppShell() {
  const [tab, setTab] = useState("overview");
  return <main className="relative flex h-[100dvh] flex-col overflow-hidden bg-ink"><BlackHoleBackground /><Tabs value={tab} onValueChange={setTab} className="relative z-10 flex min-h-0 flex-1 flex-col"><TopBar /><BottomBar /><div className="min-h-0 flex-1"><TabsContent value="overview" className="h-full overflow-y-auto"><OverviewPanel /></TabsContent><TabsContent value="experience" className="h-full overflow-y-auto"><ExperienceTimeline /></TabsContent><TabsContent value="projects" className="h-full overflow-y-auto"><ProjectGrid /></TabsContent><TabsContent value="stack" className="h-full overflow-y-auto"><TechStackPanel /></TabsContent></div></Tabs></main>;
}
