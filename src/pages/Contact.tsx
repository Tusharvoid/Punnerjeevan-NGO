import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    toast.success("Thank you — we'll be in touch within 48 hours.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader eyebrow="Reach out to us" title="If you or someone you know needs medical support, we are here to help."
        subtitle="Timely care can change everything." />

      <section className="container-narrow py-20">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, label: "Call / WhatsApp", value: "+91 90119 32151", href: "tel:9011932151" },
              { icon: Mail, label: "Email", value: "rajubhusanar@gmail.com", href: "mailto:rajubhusanar@gmail.com" },
              { icon: MapPin, label: "Address", value: "Shop No. 4/11, Almita Apt-3, Naika Vaddo, Calangute, Bardez, Goa – 403516" },
              { icon: Clock, label: "Hours", value: "Mon – Sat · 9:00 AM – 7:00 PM" },
            ].map((c) => (
              <a key={c.label} href={c.href || "#"}
                className="block bg-card border border-border rounded-xl p-5 hover-lift">
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center flex-shrink-0">
                    <c.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="mt-1 text-foreground font-medium">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={submit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 shadow-soft space-y-5">
            <h2 className="font-serif text-2xl font-semibold">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Name</label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5" placeholder="Your full name" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Phone</label>
                <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5" placeholder="+91 …" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Subject</label>
              <Input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="mt-1.5" placeholder="How can we help?" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5" placeholder="Tell us what you need…" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Send message</Button>
          </form>
        </div>
      </section>

      <section className="bg-gradient-soft border-t border-border">
        <div className="container-narrow py-16 text-center">
          <h2 className="font-serif text-2xl lg:text-3xl">Need urgent medical assistance?</h2>
          <p className="mt-3 text-muted-foreground">Call our support line — we'll guide you to the right doctor or hospital.</p>
          <Button asChild size="lg" variant="donate" className="mt-6">
            <a href="tel:9011932151">Call +91 90119 32151</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Contact;
