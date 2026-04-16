import { PageHeader } from "@/components/PageHeader";
import maleImg from "@/assets/doctor-male.jpg";
import femaleImg from "@/assets/doctor-female.jpg";

const doctors = [
  { name: "Dr. Raju Bhusnar", spec: "General Physician · Founder President", img: maleImg },
  { name: "Dr. Punam Raju Bhusanar", spec: "General Physician · Secretary", img: femaleImg },
  { name: "Dr. Vardhan Bhobe", spec: "MS Surgeon — General Surgery", img: maleImg },
  { name: "Dr. Anil Kumar Vaidhya", spec: "MD (Kayachikitsa)", img: maleImg },
  { name: "Dr. Sarika Swapnil Arsekar", spec: "MBBS, MD, DNB — Obstetrics & Gynaecology", img: femaleImg },
  { name: "Dr. Sachin Arun Ambre", spec: "MS, MCh (AIIMS) — Cancer & Onco-surgery", img: maleImg },
  { name: "Dr. Suraj Rane", spec: "MS, MCh — Plastic & Reconstructive Surgery", img: maleImg },
  { name: "Dr. Amruta Dinkar", spec: "MBBS, DVD — Dermatologist & Cosmetologist", img: femaleImg },
  { name: "Dr. Ketan Naik", spec: "MS Orthopaedics, MRCS (Glasgow)", img: maleImg },
  { name: "Dr. Jayesh Rane", spec: "MBBS, MS — ENT", img: maleImg },
  { name: "Mayuri Hoble", spec: "DHL, BASLP — Audiologist", img: femaleImg },
  { name: "Dr. Nikhil", spec: "Physiotherapist", img: maleImg },
  { name: "Dr. Manoja Chodankar", spec: "BHMS — Homoeopathy", img: femaleImg },
  { name: "Dr. Saiel A. Kumarjuvekar", spec: "MS (Ortho), FIJR", img: maleImg },
  { name: "Dr. Ajit Shinde", spec: "BDS — Implantologist", img: maleImg },
  { name: "Shridhar Katkar", spec: "Pathologist", img: maleImg },
];

const partners = [
  "Wisdom Superspeciality Hospital",
  "RG Stone Urology & Laparoscopy Hospital",
  "Yashraj Clinic",
  "Shri Clinical Laboratory",
];

const Doctors = () => (
  <>
    <PageHeader eyebrow="Our Doctors" title="A network of specialists who give their time"
      subtitle="Sixty plus consultants across general medicine, surgery, gynaecology, oncology, orthopaedics, dermatology, ENT, dentistry, ayurveda and more." />

    <section className="container-narrow py-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((d, i) => (
          <div key={d.name}
            className="bg-card border border-border rounded-xl overflow-hidden hover-lift animate-fade-in"
            style={{ animationDelay: `${i * 40}ms` }}
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={d.img} alt={d.name} loading="lazy" width={800} height={800}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="font-serif font-semibold text-base leading-tight">{d.name}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{d.spec}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-gradient-soft border-t border-border">
      <div className="container-narrow py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">Associated</div>
          <h2 className="text-3xl lg:text-4xl font-serif font-semibold">Hospitals · Clinics · Labs</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {partners.map((p) => (
            <div key={p} className="bg-card border border-border rounded-xl p-6 text-center hover-lift">
              <div className="font-serif font-medium text-foreground">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Doctors;
