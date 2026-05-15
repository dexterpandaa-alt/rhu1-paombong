import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope, Syringe, Baby, HeartPulse, Activity, ShieldCheck, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rural Health Unit — Paombong, Bulacan" },
      { name: "description", content: "Community-centered healthcare in Paombong, Bulacan. Primary care, immunization, maternal & child health, and more." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Walk-in primary care for all ages." },
  { icon: Syringe, title: "Immunization", desc: "Free vaccines for infants, children, and adults." },
  { icon: Baby, title: "Maternal & Child", desc: "Prenatal, postnatal, and well-baby care." },
  { icon: HeartPulse, title: "Chronic Disease", desc: "Hypertension, diabetes, and lifestyle care." },
  { icon: Activity, title: "Laboratory Services", desc: "Basic diagnostics and screening." },
  { icon: ShieldCheck, title: "Public Health", desc: "Sanitation, dengue, and disease surveillance." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--teal) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--primary) 0, transparent 40%)",
          }}
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-16 md:grid-cols-2 md:items-center md:pt-16 md:pb-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                Open today · {CLINIC.location}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-4xl font-700 leading-[1.05] md:text-6xl">
                Caring for our <span className="text-gradient">community</span>,
                one family at a time.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
                {CLINIC.name} provides accessible, compassionate primary
                healthcare to the people of {CLINIC.location} — from your first
                check-up to lifelong wellness.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/services" className="btn-primary">
                  Our Services <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  <MapPin className="h-4 w-4" /> Find Us
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Mon–Fri · 8AM–5PM
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  DOH-recognized
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-30 blur-2xl"
              style={{ background: "var(--gradient-hero)" }}
            />
            <div className="relative overflow-hidden rounded-3xl border shadow-[var(--shadow-glow)]">
              <img
                src={heroImg}
                alt="Rural Health Unit clinic exterior in Paombong"
                width={1600}
                height={1100}
                className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-[var(--shadow-soft)] animate-[float_6s_ease-in-out_infinite]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs text-muted-foreground">Serving since</div>
                <div className="font-semibold">The community</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {[
            { k: "10K+", v: "Patients served" },
            { k: "15+", v: "Health programs" },
            { k: "20+", v: "Trained staff" },
            { k: "100%", v: "Community-focused" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent">What we offer</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
                Healthcare that meets you where you are.
              </h2>
            </div>
            <Link to="/services" className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card-soft h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-5 pb-10">
        <Reveal>
          <div className="mb-6">
            <p className="text-sm font-medium text-accent">Visit us</p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
              Right at the heart of {CLINIC.location}.
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <MapEmbed />
        </Reveal>
      </section>
    </>
  );
}
