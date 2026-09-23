"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { services } from "@/lib/site";

export default function ContactForm() {
  const params = useSearchParams();
  const { toast } = useToast();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [service, setService] = useState<string>(() => {
    const pre = params.get("service");
    return pre && services.some((s) => s.slug === pre) ? pre : "general";
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const next: Record<string, string> = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "That email does not look right.";
    if (phone.replace(/\D/g, "").length < 7)
      next.phone = "A phone number helps us reply faster.";
    if (message.length < 10)
      next.message = "Give us a sentence or two about your project.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
    toast({
      title: "Message sent",
      description:
        "Thanks for reaching out. We will get back to you within one business day.",
    });
  }

  if (status === "sent") {
    return (
      <div className="bg-white rounded-[28px] border border-navy-900/5 shadow-sm p-10 text-center">
        <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ice-100 text-aqua-600">
          <CheckCircle2 className="w-9 h-9" />
        </span>
        <h3 className="mt-5 text-2xl font-extrabold text-navy-900">
          Message received
        </h3>
        <p className="mt-3 text-steel-500 leading-relaxed max-w-md mx-auto">
          Thanks for reaching out to Cerulea. A real person from our team will
          get back to you within one business day, usually a lot sooner. If it
          is urgent, call us at (512) 555 0192.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex items-center justify-center rounded-full bg-navy-900 text-white font-bold px-7 h-12 hover:bg-aqua-400 hover:text-navy-950 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="bg-white rounded-[28px] border border-navy-900/5 shadow-sm p-7 md:p-9"
    >
      <h3 className="text-2xl font-extrabold text-navy-900">
        Tell us about your pool
      </h3>
      <p className="mt-2 text-steel-500">
        Fill this out and we will reply within one business day.
      </p>

      <div className="mt-7 grid sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Jordan Smith" autoComplete="name" />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(512) 555 0000"
            autoComplete="tel"
          />
          {errors.phone && (
            <p className="text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">What can we help with?</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service" className="w-full">
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">Something else</SelectItem>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us a little about your pool, your yard, or what you need. The more detail the better."
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>
      </div>

      <input type="hidden" name="service" value={service} />

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full bg-aqua-400 text-navy-950 font-bold h-[54px] hover:bg-aqua-300 transition-colors disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending your message
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
      <p className="mt-4 text-center text-[13px] text-steel-400">
        We never share your details with anyone, and we do not send spam. Ever.
      </p>
    </form>
  );
}
