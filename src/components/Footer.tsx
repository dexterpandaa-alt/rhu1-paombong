
import { HeartPulse, MapPin, Phone, Mail, ArrowUpRight, Facebook } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <HeartPulse className="h-5 w-5" />
            </span>
            <span className="font-display font-semibold">{CLINIC.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Compassionate community healthcare for the people of {CLINIC.location} —
            preventive, primary, and family medicine under one roof.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-1.5 text-sm">
            {[
              { href: "/#about", label: "About" },
              { href: "/#services", label: "Services" },
              { href: "/#team", label: "Our Team" },
              { href: "/#hours", label: "Hours" },
              { href: "/#contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 rounded-md px-2 py-1 -mx-2 text-foreground/80 underline-offset-4 hover:bg-accent/10 hover:text-accent hover:underline transition"
                >
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" />{CLINIC.address}</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" />{CLINIC.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" />{CLINIC.email}</li>
            <li>
              <a href={CLINIC.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-accent transition">
                <Facebook className="h-4 w-4 text-accent" />facebook.com/RHU Paombong
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</span>
          <span>Serving the community of {CLINIC.location}.</span>
        </div>
      </div>
    </footer>
  );
}
