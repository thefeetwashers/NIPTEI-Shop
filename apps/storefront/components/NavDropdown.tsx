"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

// Header / collection dropdown. Looks exactly like the old CSS <details>
// dropdown (same .nav-dropdown / .nav-summary / .nav-menu classes), but
// behaves like a real menu: only one open at a time (the parent holds the
// shared state in controlled mode), closes on Escape and on click outside,
// and closes when a menu link is clicked.
export default function NavDropdown({
  title,
  align = "left",
  tone = "dark",
  open: controlledOpen,
  onToggle,
  onClose,
  children,
}: {
  title: string;
  align?: "left" | "right";
  tone?: "dark" | "light";
  open?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
  children: ReactNode;
}) {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = controlledOpen ?? internalOpen;
  const close = useCallback(() => {
    if (onClose) onClose();
    else setInternalOpen(false);
  }, [onClose]);
  const toggle = () => {
    if (onToggle) onToggle();
    else setInternalOpen((o) => !o);
  };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button type="button" className={tone === "light" ? "nav-summary light" : "nav-summary"} aria-expanded={open} aria-haspopup="true" onClick={toggle}>
        {title}
      </button>
      {open ? (
        <div className="nav-menu" style={align === "right" ? { left: "auto", right: 0 } : undefined} onClick={close}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
