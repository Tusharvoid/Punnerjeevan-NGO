import { PageHeader } from "@/components/PageHeader";
import { CheckCircle2 } from "lucide-react";
import founderImg from "@/assets/doctor-male.jpg";
import teamImg from "@/assets/about-team.jpg";

const aims = [
  "Supporting economically weaker and rural communities",
  "Working in women's health, child health, de-addiction & community wellness",
  "Promoting Ayurveda, Homoeopathy, Unani & modern medical support",
  "Providing medical checkups, treatment & diagnostic support",
  "Facilitating access to medicines, equipment & healthcare services",
  "Organising health camps and awareness initiatives",
];

const About = () => (
  <>
    <PageHeader eyebrow="About Us" title="A journey from rural roots to community service"
      subtitle="Some journeys don't begin with ambition. They begin with what you cannot ignore." />

    <section className="container-narrow py-20">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Dr. Raju Bhusanar grew up in Sonand, a rural village in Maharashtra, where
            healthcare was never taken for granted. Being the first doctor in his family
            and the son of a farmer, he saw early on how easily treatment gets delayed
            when resources are limited.
          </p>
          <p>
            What stayed with him wasn't just illness; it was the quiet acceptance of it.
            Years later, as a doctor, he realised something deeper: <em className="text-foreground">care exists, but it doesn't always reach</em>.
          </p>
          <p>
            That thought became a responsibility. With the vision that healthcare should
            not be a privilege, <strong className="text-foreground">Punarjeevan Ayurvedic Association</strong> was
            established in 2019 to bridge the gap between medical care and the underserved —
            an effort to ensure that healthcare doesn't stop at availability, but reaches
            the people it is meant for.
          </p>
        </div>
        <aside className="lg:col-span-2 animate-scale-in">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={founderImg} alt="Dr. Raju Bhusanar, Founder President" loading="lazy" width={800} height={800}
              className="w-full aspect-square object-cover" />
          </div>
          <div className="mt-5 text-center">
            <div className="font-serif text-lg font-semibold">Dr. Raju Bhusanar</div>
            <div className="text-sm text-accent uppercase tracking-[0.2em] mt-1">Founder President</div>
          </div>
        </aside>
      </div>
    </section>

    <section className="bg-gradient-soft border-y border-border">
      <div className="container-narrow py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Our Aim</div>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-balance">What guides our work every day</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {aims.map((a, i) => (
            <div key={a}
              className="flex gap-3 items-start bg-card rounded-lg p-5 border border-border animate-fade-in hover-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="container-narrow py-20">
      <div className="rounded-2xl overflow-hidden shadow-elevated relative">
        <img src={teamImg} alt="Punarjeevan team at a rural health camp" loading="lazy" width={1400} height={900}
          className="w-full h-[480px] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 lg:p-12 text-primary-foreground max-w-xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/80">Our team</div>
          <h3 className="mt-2 font-serif text-2xl lg:text-3xl">A network of doctors, volunteers & communities working together.</h3>
        </div>
      </div>
    </section>

    <section className="container-narrow pb-20">
      <div className="grid sm:grid-cols-3 gap-6 text-center">
        {[
          { label: "Reg. No.", value: "422/Goa/2021" },
          { label: "PAN", value: "AAKAP1029P" },
          { label: "80G Certified", value: "AAKAP1029PF20221" },
        ].map((c) => (
          <div key={c.label} className="bg-secondary/50 border border-border rounded-xl p-6">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
            <div className="mt-2 font-serif text-lg text-foreground">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
