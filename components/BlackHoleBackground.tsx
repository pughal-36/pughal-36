"use client";

import { useEffect, useRef } from "react";

export function BlackHoleBackground() {
  const ref = useRef<HTMLPreElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let animation = 0;
    let last = 0;
    const render = (time: number) => {
      if (time - last > (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4 ? 90 : 45)) {
        last = time;
        const angle = frame * 0.025;
        element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        frame += 1;
      }
      animation = requestAnimationFrame(render);
    };
    animation = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animation);
  }, []);
  const rows = Array.from({ length: 19 }, (_, row) => Array.from({ length: 54 }, (_, col) => {
    const x = (col - 27) / 27;
    const y = (row - 9) / 9;
    const radius = Math.sqrt((x * 1.05) ** 2 + (y * 0.55) ** 2);
    return radius > 0.32 && radius < 0.98 ? (row + col) % 3 === 0 ? "@" : (row + col) % 2 === 0 ? "." : ":" : " ";
  }).join("")).join("\n");
  return <pre ref={ref} aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0 select-none font-mono text-[10px] leading-[1.25] tracking-[0.2em] text-paper/[0.12] transition-transform duration-75 md:text-xs">{rows}</pre>;
}
