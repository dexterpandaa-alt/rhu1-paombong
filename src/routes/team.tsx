import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: `Our Team — ${CLINIC.name}` },
      { name: "description", content: "Meet the doctors, nurses, midwives, and health workers serving Paombong, Bulacan." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Municipal Health Officer", role: "Physician · Head of RHU" },
  { name: "Public Health Nurse", role: "Nursing & Patient Care" },
  { name: "Rural Health Midwife", role: "Maternal & Child Health" },
  { name: "Medical Technologist", role: "Laboratory Services" },
  { name: "Sanitation Inspector", role: "Public Health & Hygiene" },
  { name: "Barangay Health Workers", role: "Community Outreach" },
];

function TeamPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20">
      <Reveal>
        <p className="text-sm font-medium text-accent">Our team</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          The people behind <span className="text-gradient">your care.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A dedicated team of medical professionals, midwives, and community health
          workers serving {CLINIC.location} every day.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={i * 70}>
            <div className="card-soft h-full text-center">
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-primary-foreground"
                style={{ background: "var(--gradient-hero)" }}
              >
                <UserRound className="h-9 w-9" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
              <p className="mt-1 text-sm text-accent">{m.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
