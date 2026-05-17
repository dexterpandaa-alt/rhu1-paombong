import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, HeartPulse, CalendarCheck } from "lucide-react";
import { CLINIC } from "@/lib/clinic";
import { openAppointment } from "@/components/AppointmentDialog";

const NAV = [
  { hash: "home", label: "Home" },
  { hash: "about", label: "About" },
  { hash: "services", label: "Services" },
  { hash: "team", label: "Our Team" },
  { hash: "hours", label: "Hours" },
  { hash: "contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy on home
  useEffect(() => {
    if (!onHome) return;
    const ids = NAV.map((n) => n.hash);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive((e.target as HTMLElement).id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [onHome]);

  const linkHref = (hash: string) => (hash === "home" ? "/" : `/#${hash}`);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b shadow-[0_4px_20px_-12px_rgba(12,35,64,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: "var(--gradient-hero)" }}
          >
            <HeartPulse className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-semibold text-foreground text-sm">
              {CLINIC.shortName}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {CLINIC.location}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((n) => {
            const isActive = onHome && active === n.hash;
            return (
              <a
                key={n.hash}
                href={linkHref(n.hash)}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
                {isActive && (
                  <span
                    className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                )}
              </a>
            );
          })}
          <button onClick={openAppointment} className="ml-3 btn-primary !px-4 !py-2 text-sm">
            <CalendarCheck className="h-4 w-4" /> Book Visit
          </button>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border p-2 text-foreground transition-transform active:scale-95"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl animate-[fade-in_0.2s_ease-out]">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {NAV.map((n) => {
              const isActive = onHome && active === n.hash;
              return (
                <a
                  key={n.hash}
                  href={linkHref(n.hash)}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm border-b last:border-0 transition-colors ${
                    isActive ? "text-accent font-medium" : "text-foreground"
                  }`}
                >
                  {n.label}
                </a>
              );
            })}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 mb-2 text-sm"
            >
              Visit Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
