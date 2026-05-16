import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Stethoscope, Syringe, Baby, HeartPulse, Activity, ShieldCheck,
  Pill, Microscope, Users, Bandage, Brain, Leaf,
  MapPin, Clock, Phone, Mail, Heart, Target, Eye, Award, AlertCircle,
  UserRound, Sparkles, ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import aboutImg from "@/assets/about-care.jpg";
import { Reveal } from "@/components/Reveal";
import { MapEmbed } from "@/components/MapEmbed";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rural Health Unit — Paombong, Bulacan" },
      { name: "description", content: "Compassionate community healthcare in Paombong, Bulacan. Primary care, immunization, maternal & child health, lab services, and more." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Walk-in primary care for all ages, including check-ups and treatment." },
  { icon: Syringe, title: "Immunization", desc: "Free DOH-aligned vaccines for infants, children, and adults." },
  { icon: Baby, title: "Maternal & Child Health", desc: "Prenatal, postnatal, family planning, and well-baby care." },
  { icon: HeartPulse, title: "Chronic Disease Care", desc: "Hypertension, diabetes, and lifestyle condition management." },
  { icon: Activity, title: "Laboratory Services", desc: "Basic diagnostics — blood tests, urinalysis, screening." },
  { icon: ShieldCheck, title: "Public Health", desc: "Sanitation, vector control, and disease surveillance." },
  { icon: Pill, title: "Pharmacy", desc: "Essential medicines under government health programs." },
  { icon: Microscope, title: "TB & DOTS", desc: "TB screening, DOTS treatment, and follow-up care." },
  { icon: Users, title: "Senior Citizen Care", desc: "Dedicated check-ups and support for our elders." },
  { icon: Bandage, title: "Minor Treatments", desc: "First-aid, wound care, and outpatient procedures." },
  { icon: Brain, title: "Mental Health", desc: "Initial consultation and referral for wellness." },
  { icon: Leaf, title: "Nutrition Program", desc: "Counseling and supplemental feeding for at-risk groups." },
];

const team: { name: string; role: string; image?: string }[] = [
  { name: "Municipal Health Officer", role: "Physician · Head of RHU" },
  { name: "Public Health Nurse", role: "Nursing & Patient Care" },
  { name: "Rural Health Midwife", role: "Maternal & Child Health" },
  { name: "Medical Technologist", role: "Laboratory Services" },
  { name: "Sanitation Inspector", role: "Public Health & Hygiene" },
  { name: "Barangay Health Workers", role: "Community Outreach" },
];

const values = [
  { icon: Heart, title: "Compassion", desc: "Every patient treated with empathy and respect." },
  { icon: Award, title: "Excellence", desc: "Evidence-based, quality care for every visit." },
  { icon: Target, title: "Community", desc: "Healthcare that listens to local needs." },
];

function HomePage() {
  return (
    <>
      <ScrollProgress />

      {/* ===== HERO / HOME ===== */}
      <section id="home" className="relative overflow-hidden scroll-mt-20">
        {/* animated gradient orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl animate-[float_9s_ease-in-out_infinite]"
            style={{ background: "radial-gradient(circle, var(--teal-soft), transparent 60%)" }}
          />
          <div
            className="absolute -bottom-32 -right-24 h-[460px] w-[460px] rounded-full opacity-30 blur-3xl animate-[float_11s_ease-in-out_infinite]"
            style={{ background: "radial-gradient(circle, var(--primary), transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            }}
          />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-20 md:grid-cols-2 md:items-center md:pt-16 md:pb-28">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-accent">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Open today · {CLINIC.location}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[2.5rem] font-bold leading-[1.05] md:text-6xl">
                Caring for our{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">community,</span>
                  <svg className="absolute -bottom-2 left-0 h-2 w-full" viewBox="0 0 200 8" preserveAspectRatio="none" aria-hidden>
                    <path d="M2 5 Q 50 1 100 5 T 198 5" stroke="currentColor" className="text-accent" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                one family at a time.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
                {CLINIC.name} delivers accessible, compassionate primary
                healthcare to the people of {CLINIC.location} — from your first
                check-up to lifelong wellness.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="btn-primary group">
                  Our Services{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-ghost">
                  <MapPin className="h-4 w-4" /> Find Us
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  Clinic open 24/7 · Doctor Mon–Fri 8–5
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-accent" />
                  DOH-recognized
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-accent" />
                  Free essential care
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            {/* Morphing animated blob behind the hero image */}
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 opacity-70 blur-2xl animate-[morph_14s_ease-in-out_infinite]"
              style={{ background: "var(--gradient-hero)" }}
            />
            {/* Slow rotating dashed ring */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-full animate-[spin-slow_28s_linear_infinite] opacity-40"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0 60%, color-mix(in oklab, var(--teal) 60%, transparent) 75%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle, transparent 58%, black 60%, black 64%, transparent 66%)",
              }}
            />
            <div className="relative overflow-hidden border shadow-[var(--shadow-glow)] animate-[morph_18s_ease-in-out_infinite]"
                 style={{ borderRadius: "42% 58% 63% 37% / 48% 42% 58% 52%" }}>
              <img
                src={heroImg}
                alt="Rural Health Unit clinic exterior in Paombong"
                width={1600}
                height={1100}
                className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-3 md:-left-5 flex items-center gap-3 rounded-2xl border bg-card/95 backdrop-blur px-4 py-3 shadow-[var(--shadow-soft)] animate-[float_6s_ease-in-out_infinite]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <HeartPulse className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground">Trusted by</div>
                <div className="text-sm font-semibold">10,000+ families</div>
              </div>
            </div>
            <div className="absolute -top-3 right-4 hidden md:flex items-center gap-2 rounded-full border bg-card/95 backdrop-blur px-3 py-1.5 shadow-[var(--shadow-soft)]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium">Open 24/7</span>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center pb-6">
          <a href="#about" aria-label="Scroll" className="text-muted-foreground hover:text-accent transition-colors">
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="border-y bg-secondary/40 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
          {[
            { k: "10K+", v: "Patients served" },
            { k: "15+", v: "Health programs" },
            { k: "20+", v: "Trained staff" },
            { k: "100%", v: "Community-focused" },
          ].map((s, i) => (
            <Reveal key={s.v} delay={i * 80} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient md:text-4xl">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-20">
        <Reveal>
          <p className="text-sm font-medium tracking-wide uppercase text-accent">About us</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl max-w-3xl">
            A health unit built around{" "}
            <span className="text-gradient">our people.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-4 -z-10 rounded-[2rem] opacity-25 blur-2xl"
                style={{ background: "var(--gradient-hero)" }}
              />
              <div className="overflow-hidden rounded-[2rem] border shadow-[var(--shadow-soft)]">
                <img
                  src={aboutImg}
                  alt="Healthcare worker at Rural Health Unit Paombong"
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-lg text-muted-foreground">
              For decades, {CLINIC.name} has served families across {CLINIC.location} —
              championing preventive care, public health, and dignity for every patient
              who walks through our doors.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="card-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Target className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">Our Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To provide accessible, equitable, and quality primary healthcare
                  that empowers every Paombongueño to live a healthier life.
                </p>
              </div>
              <div className="card-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A healthy, thriving community where every family receives compassionate
                  care and the tools to prevent illness before it begins.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-2 sm:gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card-soft h-full group p-3 sm:p-6 text-center sm:text-left">
                <span className="mx-auto sm:mx-0 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <v.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <h3 className="mt-2 sm:mt-5 font-display text-sm sm:text-lg font-semibold">{v.title}</h3>
                <p className="mt-1 sm:mt-2 text-[11px] leading-snug sm:text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section
        id="services"
        className="relative scroll-mt-20"
        style={{
          background:
            "linear-gradient(180deg, transparent 0, color-mix(in oklab, var(--teal) 6%, var(--background)) 30%, color-mix(in oklab, var(--teal) 6%, var(--background)) 70%, transparent 100%)",
        }}
      >
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium tracking-wide uppercase text-accent">What we offer</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl max-w-2xl">
                  Comprehensive care, <span className="text-gradient">close to home.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Twelve programs spanning preventive, primary, and public health —
                most offered free of charge.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 6) * 60}>
                <div className="card-soft h-full group relative overflow-hidden">
                  <div
                    className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                    style={{ background: "var(--teal)" }}
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-base md:text-lg font-semibold truncate">{s.title}</h3>
                  </div>
                  <p className="relative mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section id="team" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-20">
        <Reveal>
          <p className="text-sm font-medium tracking-wide uppercase text-accent">Our team</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl max-w-3xl">
            The people behind <span className="text-gradient">your care.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            A dedicated team of medical professionals, midwives, and community
            health workers serving {CLINIC.location} every day.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 70}>
              <div className="card-soft h-full text-center group">
                <div className="relative mx-auto h-24 w-24">
                  <div
                    className="absolute inset-0 rounded-full opacity-40 blur-md transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: "var(--gradient-hero)" }}
                  />
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      loading="lazy"
                      className="relative mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-card shadow-[var(--shadow-soft)] transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full text-primary-foreground transition-transform duration-500 group-hover:scale-105"
                      style={{ background: "var(--gradient-hero)" }}
                    >
                      <UserRound className="h-10 w-10" />
                    </div>
                  )}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{m.name}</h3>
                <p className="mt-1 text-sm text-accent">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== HOURS ===== */}
      <section id="hours" className="relative scroll-mt-20 bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <p className="text-sm font-medium tracking-wide uppercase text-accent">Operating hours</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
              When we're <span className="text-gradient">open for you.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Walk in during operating hours. For emergencies outside these
              times, please proceed to the nearest hospital.
            </p>

            <div
              className="mt-8 flex gap-3 rounded-2xl p-4 text-sm"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--teal) 12%, transparent), color-mix(in oklab, var(--primary) 6%, transparent))",
                border: "1px solid color-mix(in oklab, var(--teal) 25%, var(--border))",
              }}
            >
              <AlertCircle className="h-5 w-5 shrink-0 text-accent" />
              <p className="text-foreground">
                Emergencies outside our hours: contact local emergency services
                or proceed to the nearest hospital.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3">
            <div className="overflow-hidden rounded-3xl border bg-card shadow-[var(--shadow-soft)]">
              {CLINIC.hours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex items-center justify-between gap-4 px-6 py-5 ${
                    i !== CLINIC.hours.length - 1 ? "border-b" : ""
                  } transition-colors hover:bg-secondary/60`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Clock className="h-4 w-4" />
                    </span>
                    <span className="font-medium">{h.day}</span>
                  </div>
                  <span className="text-sm text-muted-foreground md:text-base">{h.time}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CONTACT + MAP ===== */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-20">
        <Reveal>
          <p className="text-sm font-medium tracking-wide uppercase text-accent">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl max-w-3xl">
            Visit our <span className="text-gradient">clinic.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Right at the heart of {CLINIC.location}. Drop by during operating
            hours — we're happy to help.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-2">
            <div className="grid gap-4">
              {[
                { icon: MapPin, label: "Address", value: CLINIC.address },
                { icon: Phone, label: "Phone", value: CLINIC.phone },
                { icon: Mail, label: "Email", value: CLINIC.email },
                { icon: Clock, label: "Hours", value: "Clinic 24/7 · Doctor Mon–Fri 8AM–5PM" },
              ].map((it) => (
                <div key={it.label} className="card-soft flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <it.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-0.5 font-medium break-words">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="md:col-span-3">
            <MapEmbed height={500} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
