"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export const SheetPortal = Dialog.Portal;

export function SheetContent({ className, children, ...props }: React.ComponentProps<typeof Dialog.Content>) {
  return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm" /><Dialog.Content className={cn("fixed inset-y-0 right-0 z-50 flex w-full max-w-xl flex-col border-l border-paper/10 bg-ink p-6 shadow-2xl focus:outline-none", className)} {...props}>{children}<Dialog.Close className="absolute right-5 top-5 rounded-md p-2 text-paper/50 transition-colors hover:text-paper focus:outline-none focus:ring-2 focus:ring-amber"><X size={18} /><span className="sr-only">Close</span></Dialog.Close></Dialog.Content></Dialog.Portal>;
}

export const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mb-8 space-y-2", className)} {...props} />;
export const SheetTitle = ({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) => <Dialog.Title className={cn("font-sans text-2xl text-paper", className)} {...props} />;
export const SheetDescription = ({ className, ...props }: React.ComponentProps<typeof Dialog.Description>) => <Dialog.Description className={cn("text-sm leading-6 text-paper/60", className)} {...props} />;
