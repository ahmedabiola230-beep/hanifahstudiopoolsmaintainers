import { cn } from "@/lib/utils";
import Reveal from "./reveal";

export function Pill({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.3em] uppercase",
        tone === "light"
          ? "bg-ice-100 text-navy-800"
          : "bg-white/10 text-aqua-300"
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  pill,
  line1,
  line2,
  intro,
  tone = "light",
  align = "center",
}: {
  pill: string;
  line1: string;
  line2?: string;
  intro?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <Pill tone={tone === "light" ? "light" : "dark"}>{pill}</Pill>
      <h2
        className={cn(
          "mt-5 text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight",
          tone === "light" ? "text-navy-900" : "text-white"
        )}
      >
        {line1}
        {line2 && (
          <>
            {" "}
            <span className="text-aqua-400">{line2}</span>
          </>
        )}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-[17px] leading-relaxed",
            tone === "light" ? "text-steel-500" : "text-white/65",
            align === "center" ? "max-w-xl mx-auto" : "max-w-xl"
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
