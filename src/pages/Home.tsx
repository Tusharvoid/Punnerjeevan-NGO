import { Link } from "react-router-dom";
import { ArrowRight, HeartPulse, Users, Sprout, Stethoscope, ShieldCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-camp.jpg";
import womenImg from "@/assets/program-women.jpg";
import campImg from "@/assets/program-camp.jpg";
import childImg from "@/assets/program-child.jpg";
import ayurvedaImg from "@/assets/program-ayurveda.jpg";

const statDelayClasses = ["anim-delay-0", "anim-delay-100", "anim-delay-200", "anim-delay-300"];
const focusDelayClasses = ["anim-delay-0", "anim-delay-80", "anim-delay-160", "anim-delay-240"];
const previewDelayClasses = ["anim-delay-0", "anim-delay-100", "anim-delay-200"];

const stats = [
  { value: "12,000+", label: "Lives touched" },
  { value: "150+", label: "Free health camps" },
  { value: "60+", label: "Specialist doctors" },
  { value: "25+", label: "Villages served" },
];

const focus = [
  { icon: HeartPulse, title: "Women's Health", desc: "Reproductive care, screenings & maternal wellness." },
  { icon: Users, title: "Child Health", desc: "Pediatric checkups, nutrition & vaccination drives." },
  { icon: Sprout, title: "Ayurveda & Traditional Care", desc: "Ayurveda, Homoeopathy, Unani & integrative medicine." },
  { icon: Stethoscope, title: "Rural Outreach", desc: "Bringing diagnostics & treatment to remote communities." },
];

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center pt-16 lg:pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Doctor providing care to elderly woman in rural India"
            className="w-full h-full object-cover object-[center_62%]"
            width={1600}
            height={1100}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container-narrow py-20 lg:py-28">
          <div className="max-w-2xl text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/20 text-xs uppercase tracking-[0.2em] font-medium animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
              Healthcare for every life
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold leading-[1.08] text-balance animate-slide-up">
              Care that reaches where it's needed most.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-xl leading-relaxed animate-fade-in anim-delay-200">
              Since 2019, Punarjeevan Ayurvedic Association has bridged the gap between
              medical care and the underserved — through free camps, specialist support
              and integrative healing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-in anim-delay-350">
              <Button asChild size="lg" variant="donate">
                <Link to="/get-involved#donate">Donate Now <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <Link to="/programs">Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-narrow py-12 lg:py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center animate-count-up ${statDelayClasses[i] ?? "anim-delay-0"}`}>
              <div className="text-3xl lg:text-4xl font-serif font-semibold text-primary">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="container-narrow py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-4">Our Mission</div>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold leading-tight text-balance">
              Healthcare should not be a privilege.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded by Dr. Raju Bhusanar, who grew up in rural Maharashtra and saw
              firsthand how easily treatment is delayed when resources are limited,
              Punarjeevan was born from a simple conviction: <em>care exists, but it doesn't always reach</em>.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We work across women's & child health, de-addiction, community wellness
              and integrative medicine — connecting patients with specialists,
              diagnostics and dignified care, regardless of background.
            </p>
            <Button asChild variant="link" className="mt-5 px-0">
              <Link to="/about">Read our story <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent opacity-10 rounded-2xl blur-xl" />
            <img src={campImg} alt="Free health camp in rural India" loading="lazy" width={1024} height={768}
              className="relative rounded-2xl shadow-elevated w-full h-[480px] object-cover" />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="bg-gradient-soft border-y border-border">
        <div className="container-narrow py-20 lg:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">What we do</div>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold text-balance">Focus areas of care</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focus.map((f, i) => (
              <div key={f.title}
                className={`bg-card rounded-xl border border-border p-7 hover-lift animate-fade-in ${focusDelayClasses[i] ?? "anim-delay-0"}`}
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 text-primary grid place-items-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-serif font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="container-narrow py-20 lg:py-28">
        <div className="flex items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Programs</div>
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold">Stories of care in action</h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link to="/programs">View all <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: womenImg, tag: "Women & Child", title: "Maternal & infant care" },
            { img: ayurvedaImg, tag: "Ayurveda", title: "Integrative healing" },
            { img: childImg, tag: "Outreach", title: "Schools & rural drives" },
          ].map((p, i) => (
            <Link to="/programs" key={p.title}
              className={`group relative overflow-hidden rounded-xl shadow-soft hover-lift animate-fade-in ${previewDelayClasses[i] ?? "anim-delay-0"}`}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/80">{p.tag}</div>
                <div className="font-serif text-xl mt-1">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-narrow py-20 lg:py-28 text-center max-w-3xl">
          <Quote className="h-10 w-10 mx-auto text-accent opacity-80" />
          <blockquote className="mt-6 text-2xl lg:text-3xl font-serif leading-snug text-balance">
            "Care exists, but it doesn't always reach. That thought became a responsibility."
          </blockquote>
          <div className="mt-6 text-sm uppercase tracking-[0.2em] text-primary-foreground/70">
            Dr. Raju Bhusanar · Founder President
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-narrow py-20 lg:py-28">
        <div className="rounded-2xl bg-gradient-soft border border-border p-10 lg:p-16 text-center shadow-soft">
          <ShieldCheck className="h-10 w-10 mx-auto text-accent" />
          <h2 className="mt-5 text-3xl lg:text-4xl font-serif font-semibold text-balance">
            Be the reason care reaches someone today.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            80G certified. Every contribution sponsors treatment, medicines or a free camp.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="donate">
              <Link to="/get-involved#donate">Donate Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/get-involved">Volunteer with us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
