import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${CLINIC.name}` },
      { name: "description", content: `Visit, call, or email ${CLINIC.name} in ${CLINIC.location}.` },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: MapPin, label: "Address", value: CLINIC.address },
    { icon: Phone, label: "Phone", value: CLINIC.phone },
    { icon: Mail, label: "Email", value: CLINIC.email },
    { icon: Clock, label: "Hours", value: "Mon–Fri · 8AM–5PM" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20">
      <Reveal>
        <p className="text-sm font-medium text-accent">Get in touch</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Visit our <span className="text-gradient">clinic.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Drop by during operating hours or reach out — we're happy to help.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.label} className="card-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <it.icon className="h-5 w-5" />
                </span>
                <div className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                  {it.label}
                </div>
                <div className="mt-1 font-medium">{it.value}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <MapEmbed height={460} />
        </Reveal>
      </div>
    </section>
  );
}
