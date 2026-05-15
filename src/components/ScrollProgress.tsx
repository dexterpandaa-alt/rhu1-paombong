import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent pointer-events-none"
    >
      <div
        className="h-full origin-left transition-[width] duration-150"
        style={{ width: `${p}%`, background: "var(--gradient-hero)" }}
      />
    </div>
  );
}
