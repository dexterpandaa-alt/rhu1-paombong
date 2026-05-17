import { useEffect, useState } from "react";
import { CalendarCheck, X, Phone, Mail, MapPin, Send } from "lucide-react";
import { CLINIC } from "@/lib/clinic";

export function openAppointment() {
  window.dispatchEvent(new CustomEvent("open-appointment"));
}

const services = [
  "General Consultation", "Immunization", "Maternal & Child Health",
  "Chronic Disease Care", "Laboratory Services", "TB & DOTS",
  "Animal Bite (Anti-rabies)", "Minor Treatments", "Nutrition Program", "Other",
];

export function AppointmentDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", date: "", time: "", service: services[0], notes: "",
  });

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-appointment", onOpen);
    return () => window.removeEventListener("open-appointment", onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Appointment Request — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nPreferred date: ${form.date}\nPreferred time: ${form.time}\nService: ${form.service}\n\nNotes:\n${form.notes}\n\n— Sent from RHU Paombong website`
    );
    window.location.href = `mailto:${CLINIC.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-[fade-in_0.25s_ease-out]"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-card border rounded-t-3xl sm:rounded-3xl shadow-[var(--shadow-glow)] animate-[scale-in_0.35s_cubic-bezier(0.22,1,0.36,1)]"
      >
        <div
          className="relative px-6 pt-6 pb-5 text-primary-foreground rounded-t-3xl"
          style={{ background: "var(--gradient-hero)" }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute right-3 top-3 rounded-full p-1.5 text-primary-foreground/80 hover:bg-white/15 hover:text-primary-foreground transition"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
              <CalendarCheck className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-semibold">Request an Appointment</h3>
              <p className="text-xs text-primary-foreground/85 mt-0.5">
                We'll confirm via call or message.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="px-6 py-5 space-y-4">
          <Field label="Full name" required>
            <input
              required value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="ipt" placeholder="Juan Dela Cruz"
            />
          </Field>
          <Field label="Phone number" required>
            <input
              required type="tel" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="ipt" placeholder="09xx xxx xxxx"
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Preferred date" required>
              <input
                required type="date" value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="ipt"
              />
            </Field>
            <Field label="Preferred time" required>
              <input
                required type="time" value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="ipt"
              />
            </Field>
          </div>
          <Field label="Service">
            <select
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              className="ipt"
            >
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="Notes (optional)">
            <textarea
              value={form.notes} rows={3}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="ipt resize-none" placeholder="Symptoms, history, etc."
            />
          </Field>

          <button type="submit" className="btn-primary w-full justify-center">
            <Send className="h-4 w-4" /> Send Request
          </button>

          <div className="rounded-xl border bg-secondary/40 p-3 text-xs text-muted-foreground space-y-1.5">
            <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-accent" /> {CLINIC.phone}</div>
            <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-accent" /> {CLINIC.email}</div>
            <div className="flex items-start gap-2"><MapPin className="h-3.5 w-3.5 text-accent mt-0.5" /> {CLINIC.address}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground mb-1.5">
        {label}{required && <span className="text-accent ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}
