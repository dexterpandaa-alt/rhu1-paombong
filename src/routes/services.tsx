import { createFileRoute } from "@tanstack/react-router";
import {
  Stethoscope, Syringe, Baby, HeartPulse, Activity, ShieldCheck,
  Pill, Microscope, Users, Bandage, Brain, Leaf,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CLINIC } from "@/lib/clinic";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services — ${CLINIC.name}` },
      { name: "description", content: "Primary care, immunization, maternal & child health, lab services, and more at Rural Health Unit Paombong." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Stethoscope, title: "General Consultation", desc: "Walk-in primary care for all ages, including check-ups and treatment." },
  { icon: Syringe, title: "Immunization", desc: "Free DOH-aligned vaccines for infants, children, and adults." },
  { icon: Baby, title: "Maternal & Child Health", desc: "Prenatal visits, postnatal care, family planning, and well-baby check-ups." },
  { icon: HeartPulse, title: "Chronic Disease Care", desc: "Management of hypertension, diabetes, and lifestyle-related conditions." },
  { icon: Activity, title: "Laboratory Services", desc: "Basic diagnostics including blood tests, urinalysis, and screenings." },
  { icon: ShieldCheck, title: "Public Health Programs", desc: "Sanitation, vector control, and disease surveillance." },
  { icon: Pill, title: "Pharmacy", desc: "Essential medicines distribution under government health programs." },
  { icon: Microscope, title: "TB & Communicable Diseases", desc: "Screening, DOTS treatment, and follow-up care." },
  { icon: Users, title: "Senior Citizen Care", desc: "Dedicated support and check-ups for our elders." },
  { icon: Bandage, title: "Minor Treatments", desc: "First-aid, wound care, and minor outpatient procedures." },
  { icon: Brain, title: "Mental Health Support", desc: "Initial consultation and referral for mental wellness." },
  { icon: Leaf, title: "Nutrition Program", desc: "Counseling and supplemental feeding for at-risk groups." },
];

function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20">
      <Reveal>
        <p className="text-sm font-medium text-accent">Our services</p>
        <h1 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Comprehensive care, <span className="text-gradient">close to home.</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A full range of preventive, primary, and public health services for the
          families of {CLINIC.location} — most offered free of charge.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 6) * 60}>
            <div className="card-soft h-full group">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
