"use client";

import { Button } from "@/components/ui/button";

const subject = encodeURIComponent("Your portfolio, and a quick conversation?");
const body = encodeURIComponent("Hi Pughal,\n\nI came across your portfolio and was impressed by how clearly you explain your decisions, especially on Vitals and Brightloop. I'd like to discuss a possible opportunity. Would you be available for a short call this week?\n\nBest regards");

export function ContactButton() {
  return <Button asChild size="sm"><a href={`mailto:pughal7755@gmail.com?subject=${subject}&body=${body}`}>Start a conversation</a></Button>;
}
