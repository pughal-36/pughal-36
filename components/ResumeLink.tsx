import { Button } from "@/components/ui/button";

export function ResumeLink() {
  return <Button asChild variant="outline"><a href="/resume.pdf" download>Download resume</a></Button>;
}
