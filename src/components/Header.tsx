import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, HeartPulse } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Our Team" },
  { to: "/hours", label: "Hours" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-110"
            style={{ background: "var(--gradient-hero)" }}
          >
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-foreground">
              {CLINIC.shortName}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {CLINIC.location}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 btn-primary !px-4 !py-2 text-sm">
            Visit Us
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur animate-[fade-in_0.2s_ease-out]">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="py-3 text-sm text-foreground border-b last:border-0"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
