import { CLINIC } from "@/lib/clinic";
import { ExternalLink } from "lucide-react";

export function MapEmbed({ height = 420 }: { height?: number }) {
  return (
    <div className="overflow-hidden rounded-3xl border shadow-[var(--shadow-soft)]">
      <iframe
        title={`Map of ${CLINIC.name}`}
        src={CLINIC.mapEmbed}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, display: "block" }}
      />
      <div className="flex items-center justify-between gap-3 border-t bg-card px-5 py-3 text-sm">
        <span className="text-muted-foreground">{CLINIC.address}</span>
        <a
          href={CLINIC.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          Open in Maps <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}
