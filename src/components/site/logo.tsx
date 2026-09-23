import Link from "next/link";
import { cn } from "@/lib/utils";

export function WaveMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2 22.5C9 22.5 11 13 20 13c7.5 0 9.5 7 17 7 3.9 0 6.6-1.5 9-3.6"
        stroke="#3FC3DC"
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <path
        d="M2 29c7 0 9-9.5 18-9.5 7.5 0 9.5 7 17 7 3.9 0 6.6-1.5 9-3.6"
        stroke="#7FDCEE"
        strokeWidth="4.2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M2 16c7 0 9-9.5 18-9.5 7.5 0 9.5 7 17 7 3.9 0 6.6-1.5 9-3.6"
        stroke="#FFFFFF"
        strokeWidth="4.2"
        strokeLinecap="round"
        opacity="0.95"
      />
    </svg>
  );
}

export default function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Cerulea Pools home"
      className={cn("inline-flex items-center gap-2.5", className)}
    >
      <WaveMark className="w-10 h-7 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-[22px] font-extrabold tracking-[0.08em]",
            variant === "light" ? "text-white" : "text-navy-900"
          )}
        >
          CERULEA
        </span>
        <span className="text-[10px] font-semibold tracking-[0.52em] text-aqua-400 mt-1">
          POOLS
        </span>
      </span>
    </Link>
  );
}
