import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("inline-flex items-center rounded-full border border-paper/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60", className)} {...props} />;
}
