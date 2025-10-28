"use client";
import { useEffect, useRef, useState } from "react";

type Side = "top" | "bottom" | "left" | "right";

export default function Tooltip({
  text,
  side = "top",
  width = 280, // px — keeps it wider than tall
}: {
  text: string;
  side?: Side;
  width?: number;
}) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDoc = (e: MouseEvent) => {
      if (!btnRef.current) return;
      if (!btnRef.current.parentElement?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onDoc);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onDoc);
    };
  }, []);

  // Positioning
  const pos =
    side === "top"
      ? "-top-2 -translate-y-full left-1/2 -translate-x-1/2"
      : side === "bottom"
      ? "top-7 left-1/2 -translate-x-1/2"
      : side === "left"
      ? "right-[calc(100%+8px)] top-1/2 -translate-y-1/2"
      : "left-[calc(100%+8px)] top-1/2 -translate-y-1/2";

  const arrow =
    side === "top"
      ? "bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900/90"
      : side === "bottom"
      ? "top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900/90"
      : side === "left"
      ? "left-full top-1/2 -translate-y-1/2 border-l-gray-900/90"
      : "right-full top-1/2 -translate-y-1/2 border-r-gray-900/90";

  return (
    <span className="relative inline-flex items-center">
      <button
        ref={btnRef}
        type="button"
        aria-label="More info"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="inline-flex items-center justify-center w-5 h-5 text-[11px] font-semibold
                   rounded-full border bg-white hover:bg-gray-50 focus:outline-none
                   focus:ring-2 focus:ring-offset-1 focus:ring-black/40 cursor-help"
      >
        i
      </button>

      {/* Bubble */}
      <span
        role="tooltip"
        className={`pointer-events-none absolute z-50 ${pos}
                    px-3 py-2 rounded-md text-[12px] leading-relaxed text-white
                    bg-gray-900/90 shadow-lg transition-opacity duration-100
                    ${open ? "opacity-100" : "opacity-0"}`}
        style={{ width }}  // fixed wide box → short lines, not tall
      >
        <span className="block whitespace-normal break-words text-pretty">{text}</span>
        {/* arrow */}
        <span
          className={`absolute w-0 h-0 border-8 border-transparent ${arrow}`}
          aria-hidden="true"
        />
      </span>
    </span>
  );
}