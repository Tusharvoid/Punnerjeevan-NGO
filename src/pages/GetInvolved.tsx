import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Heart, Building2, HandHeart, Pill, Stethoscope, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ways = [
  { icon: Heart, title: "Sponsor a Patient", desc: "Cover diagnosis, surgery or ongoing treatment for someone who cannot afford it." },
  { icon: Stethoscope, title: "Support a Camp", desc: "Fund a free medical camp serving 200–500 patients in a single day." },
  { icon: Pill, title: "Donate Medicines", desc: "Contribute medicines or medical equipment for distribution at our outreach drives." },
  { icon: Building2, title: "Partner Institutionally", desc: "Hospitals, NGOs, panchayats and corporates can partner on long-term programs." },
];

const presets = [500, 1000, 2500, 5000, 10000];

const bank = [
  { label: "Account Name", value: "Punarjeevan Ayurvedic Association" },
  { label: "Bank", value: "State Bank of India" },
  { label: "Branch", value: "Mapusa, Goa" },
  { label: "Account Number", value: "45066393557" },
  { label: "IFSC", value: "SBIN0000513" },
  { label: "MICR", value: "403002041" },
  { label: "Branch Code", value: "00513" },
  { label: "UPI / GPay", value: "9011932151 (Dr. Yashraj)" },
];

const GetInvolved = () => {
  const [amount, setAmount] = useState<number>(2500);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    toast.success(`${label} copied`);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <>
      <PageHeader eyebrow="Get Involved" title="Every contribution reaches someone who couldn't reach healthcare on their own."
        subtitle="Donate, volunteer, partner — choose how you want to be part of the care." />

      {/* WAYS */}
      <section className="container-narrow py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ways.map((w, i) => (
            <div key={w.title}
              className="bg-card border border-border rounded-xl p-7 hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="h-11 w-11 rounded-lg bg-accent/10 text-accent grid place-items-center">
                <w.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-serif font-semibold text-lg">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="bg-gradient-soft border-y border-border scroll-mt-24">
        <div className="container-narrow py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Donate</div>
              <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-balance">Your gift becomes treatment.</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                All donations are eligible for tax exemption under Section 80G.
                Choose an amount or contribute directly via UPI / bank transfer.
              </p>

              <div className="mt-8 bg-card border border-border rounded-xl p-6 shadow-soft">
                <div className="text-sm font-medium text-foreground mb-4">Choose an amount</div>
                <div className="flex flex-wrap gap-2.5">
                  {presets.map((p) => (
                    <button key={p}
                      onClick={() => setAmount(p)}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                        amount === p
                          ? "bg-primary text-primary-foreground border-primary shadow-soft"
                          : "bg-background border-border text-foreground hover:border-primary/40"
                      }`}
                    >
                      ₹{p.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 border border-border rounded-lg px-4 py-3 bg-background">
                  <span className="text-muted-foreground">₹</span>
                  <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}
                    className="flex-1 bg-transparent outline-none text-foreground" />
                </div>
                <Button variant="donate" size="lg" className="w-full mt-5"
                  onClick={() => toast.success("Thank you! Use the bank/UPI details to complete your donation.")}>
                  Donate ₹{amount.toLocaleString("en-IN")}
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Online gateway coming soon. Use bank/UPI details to contribute now.
                </p>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-10 shadow-elevated">
              <div className="flex items-center gap-2 mb-6">
                <HandHeart className="h-5 w-5 text-accent" />
                <div className="text-xs uppercase tracking-[0.25em] font-semibold">Bank Details</div>
              </div>
              <div className="space-y-3">
                {bank.map((b) => (
                  <div key={b.label}
                    className="flex justify-between items-center gap-4 border-b border-primary-foreground/10 pb-3 last:border-0">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-primary-foreground/60">{b.label}</div>
                      <div className="font-medium text-sm mt-0.5 break-all">{b.value}</div>
                    </div>
                    <button onClick={() => copy(b.value, b.label)}
                      className="p-2 rounded-md hover:bg-primary-foreground/10 transition-colors flex-shrink-0"
                      aria-label={`Copy ${b.label}`}>
                      {copied === b.label ? <CheckCheck className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4 text-primary-foreground/70" />}
                    </button>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-primary-foreground/70">
                For receipts and 80G certificates, share the transaction reference at info@punarjeevan.org
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="container-narrow py-20 text-center max-w-2xl">
        <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Partner with us</div>
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-balance">
          Doctors, hospitals, NGOs and panchayats — let's bring healthcare where it matters.
        </h2>
        <p className="mt-4 text-muted-foreground">
          Whether you can offer time, expertise, equipment or a venue — we'd love to hear from you.
        </p>
        <Button asChild size="lg" variant="hero" className="mt-8">
          <a href="/contact">Become a partner</a>
        </Button>
      </section>
    </>
  );
};

export default GetInvolved;
