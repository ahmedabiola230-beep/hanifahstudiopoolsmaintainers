import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "./logo";
import { nav, services, site, socials } from "@/lib/site";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  message: <MessageCircle className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 text-white/65 leading-relaxed max-w-sm">
              Cerulea Pools designs, builds, and maintains custom pools for
              homes across the Austin area. One crew, honest quotes, and water
              you can trust all year long.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/8 border border-white/10 text-white/80 hover:bg-aqua-400 hover:text-navy-950 hover:border-aqua-400 transition-colors"
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* company links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-5">Company</h3>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-aqua-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* services links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-5">Our Services</h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-white/60 hover:text-aqua-300 transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-5">Get In Touch</h3>
            <ul className="space-y-5">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">We Are Open</p>
                  <p className="text-white/60 mt-1">{site.hours}</p>
                  <p className="text-white/60">Saturday by appointment</p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Office Location</p>
                  <p className="text-white/60 mt-1">{site.address}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Send a Message</p>
                  <a
                    href={site.emailHref}
                    className="text-white/60 hover:text-aqua-300 transition-colors mt-1 inline-block"
                  >
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-aqua-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Call Us Anytime</p>
                  <a
                    href={site.phoneHref}
                    className="text-white/60 hover:text-aqua-300 transition-colors mt-1 inline-block"
                  >
                    {site.phone}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/55">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-aqua-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/contact" className="hover:text-aqua-300 transition-colors">
              Privacy Policy
            </Link>
            <a
              href="https://preview-chat-8dbaa95e-ab4d-48e2-9030-1e7c59b14b99.space-z.ai/website-offer"
              className="hover:text-aqua-300 transition-colors"
            >
              Designed By hanifah Studio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
