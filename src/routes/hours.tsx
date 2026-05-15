import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, AlertCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/hours")({
  head: () => ({
    meta: [
      { title: `Hours — ${CLINIC.name}` },
      { name: "description", content: `Operating hours of ${CLINIC.name} in ${CLINIC.location}.` },
    ],
  }),
  component: HoursPage,
});

function HoursPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 pt-16 pb-20">
      <Reveal>
        <p className="text-sm font-medium text-accent">Operating hours</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          When we're <span className="text-gradient">open for you.</span>
        </h1>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 overflow-hidden rounded-3xl border bg-card shadow-[var(--shadow-soft)]">
          {CLINIC.hours.map((h, i) => (
            <div
              key={h.day}
              className={`flex items-center justify-between gap-4 px-6 py-5 ${
                i !== CLINIC.hours.length - 1 ? "border-b" : ""
              } transition-colors hover:bg-secondary/50`}
            >
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="font-medium">{h.day}</span>
              </div>
              <span className="text-sm text-muted-foreground md:text-base">{h.time}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={180}>
        <div
          className="mt-8 flex gap-4 rounded-2xl p-5 text-sm"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--teal) 12%, transparent), color-mix(in oklab, var(--primary) 6%, transparent))",
            border: "1px solid color-mix(in oklab, var(--teal) 25%, var(--border))",
          }}
        >
          <AlertCircle className="h-5 w-5 shrink-0 text-accent" />
          <p className="text-foreground">
            For emergencies outside operating hours, please proceed to the nearest
            hospital or contact local emergency services.
          </p>
        </div>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            <Phone className="h-4 w-4" /> Contact us
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
