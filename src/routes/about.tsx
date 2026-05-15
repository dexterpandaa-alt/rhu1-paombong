import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Target, Eye, Award } from "lucide-react";
import aboutImg from "@/assets/about-care.jpg";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${CLINIC.name}` },
      { name: "description", content: `Learn about ${CLINIC.name} in ${CLINIC.location} — our mission, vision, and commitment to community health.` },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10">
        <Reveal>
          <p className="text-sm font-medium text-accent">About us</p>
          <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            A health unit built around <span className="text-gradient">our people.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            For decades, {CLINIC.name} has served families across {CLINIC.location} —
            championing preventive care, public health, and dignity for every patient
            who walks through our doors.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-10 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border shadow-[var(--shadow-soft)]">
            <img
              src={aboutImg}
              alt="Healthcare worker at Rural Health Unit Paombong"
              width={1200}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-6">
            <div className="card-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                To provide accessible, equitable, and quality primary healthcare
                services that empower every Paombongueño to live a healthier life.
              </p>
            </div>
            <div className="card-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">Our Vision</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A healthy, thriving community where every family receives compassionate
                care and the tools to prevent illness before it begins.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-4xl">What we stand for</h2>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            { icon: Heart, title: "Compassion", desc: "Every patient treated with empathy and respect." },
            { icon: Award, title: "Excellence", desc: "Evidence-based, quality care for every visit." },
            { icon: Target, title: "Community", desc: "Healthcare that listens to local needs." },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card-soft h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/services" className="btn-primary">Explore services</Link>
            <Link to="/team" className="btn-ghost">Meet our team</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
