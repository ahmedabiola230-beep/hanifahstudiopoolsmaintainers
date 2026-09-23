import Image from "next/image";
import Reveal from "../reveal";

export default function Banner() {
  return (
    <section className="relative">
      <div className="relative h-[380px] md:h-[480px] overflow-hidden">
        <Image
          src="/images/banner-wide.webp"
          alt="Luxury pool with stone waterfall feature at dusk"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-navy-950/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Reveal>
              <p className="max-w-xl text-2xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg">
                Fourteen weeks of work. Twenty years of weekends that feel like
                vacation.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
