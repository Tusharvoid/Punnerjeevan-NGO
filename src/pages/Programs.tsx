import { PageHeader } from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import womenImg from "@/assets/program-women.jpg";
import campImg from "@/assets/program-camp.jpg";
import ayurvedaImg from "@/assets/program-ayurveda.jpg";
import childImg from "@/assets/program-child.jpg";
import deaddictImg from "@/assets/program-deaddiction.jpg";
import heroImg from "@/assets/hero-camp.jpg";

const programs = [
  { img: campImg, tag: "Outreach", title: "Free Health Check-up Camps", desc: "Multi-specialty camps in villages and urban poor neighborhoods — diagnostics, consultation and free medicines all in one day." },
  { img: womenImg, tag: "Women & Child", title: "Women & Child Health Awareness", desc: "Maternal care, nutrition, menstrual & reproductive health workshops, vaccination support and pediatric screenings." },
  { img: deaddictImg, tag: "Wellness", title: "De-addiction & Wellness Initiatives", desc: "Counselling, group sessions and rehabilitation support for individuals and families affected by addiction." },
  { img: heroImg, tag: "Rural", title: "Rural Health Outreach", desc: "Mobile units and partnerships that take primary care to remote communities where hospitals are hours away." },
  { img: ayurvedaImg, tag: "Integrative", title: "Ayurveda · Homoeopathy · Unani", desc: "Promoting traditional Indian systems of medicine alongside modern care — integrative, evidence-based and accessible." },
  { img: childImg, tag: "Screening", title: "Screening Camps (BP, Diabetes, Cancer)", desc: "Early detection drives that catch chronic and life-threatening illnesses before they become irreversible." },
];

const Programs = () => (
  <>
    <PageHeader eyebrow="Our Programs" title="Care delivered, dignity preserved"
      subtitle="From a single check-up to ongoing treatment — every program is designed to meet people where they are." />

    <section className="container-narrow py-20">
      <div className="space-y-16">
        {programs.map((p, i) => (
          <article key={p.title}
            className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-fade-in ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-card group">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{p.tag}</div>
              <h2 className="mt-3 text-2xl lg:text-3xl font-serif font-semibold text-balance">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>
              <Button asChild variant="link" className="mt-4 px-0">
                <Link to="/get-involved">Support this program <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-primary text-primary-foreground">
      <div className="container-narrow py-20 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-balance max-w-2xl mx-auto">
          Want a health camp in your village or community?
        </h2>
        <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
          We collaborate with panchayats, schools, hospitals and social organisations.
        </p>
        <Button asChild size="lg" variant="donate" className="mt-8">
          <Link to="/contact">Request a camp <ArrowRight className="h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </>
);

export default Programs;
