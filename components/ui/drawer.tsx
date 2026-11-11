"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Drawer = Dialog.Root;
export const DrawerTrigger = Dialog.Trigger;
export const DrawerClose = Dialog.Close;

export function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof Dialog.Content>) {
  return <Dialog.Portal><Dialog.Overlay className="fixed inset-0 z-40 bg-ink/70 backdrop-blur-sm" /><Dialog.Content className={cn("fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl border-t border-paper/10 bg-ink p-6 shadow-2xl focus:outline-none", className)} {...props}>{children}<Dialog.Close className="absolute right-5 top-5 rounded-md p-2 text-paper/50 transition-colors hover:text-paper focus:outline-none focus:ring-2 focus:ring-amber"><X size={18} /><span className="sr-only">Close</span></Dialog.Close></Dialog.Content></Dialog.Portal>;
}

export const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => <div className={cn("mb-8 space-y-2", className)} {...props} />;
export const DrawerTitle = ({ className, ...props }: React.ComponentProps<typeof Dialog.Title>) => <Dialog.Title className={cn("font-sans text-2xl text-paper", className)} {...props} />;
export const DrawerDescription = ({ className, ...props }: React.ComponentProps<typeof Dialog.Description>) => <Dialog.Description className={cn("text-sm leading-6 text-paper/60", className)} {...props} />;
