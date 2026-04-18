import { PageHeader } from "@/components/PageHeader";
import drRajuImg from "@/assets/dr.raju.bhusnar.jpeg";
import drPunamImg from "@/assets/dr-punam-raju-bhusnar.jpeg";
import drVardhanImg from "@/assets/dr-vardhan-bhobe.jpeg";
import drAnilImg from "@/assets/dr-anil-kumar-vaidhya.jpeg";
import drSarikaImg from "@/assets/dr-sarika-swapnil-aresekar.jpeg";
import drSachinImg from "@/assets/dr-sachin-arun-ambre.jpeg";
import drSurajImg from "@/assets/dr-suraj-rane.jpeg";
import drAmrutaImg from "@/assets/dr-amruta-dinkar.jpeg";
import drKetanImg from "@/assets/de-ketan-naik.jpeg";
import drJayeshImg from "@/assets/dr-jayesh-rane.jpeg";
import mayuriImg from "@/assets/dhl-baslp-mayuri-hoble.jpeg";
import drNikhilImg from "@/assets/dr-nikhil.jpeg";
import drManojaImg from "@/assets/dr-manoja-chodankar.jpeg";
import drSaielImg from "@/assets/dr-sajel-a-kumarjuvekar.jpeg";
import drAjitImg from "@/assets/dr-ajit-shinde.jpeg";
import shridharImg from "@/assets/dr-shridhar-katkar.jpeg";

const doctors = [
  { name: "Dr. Raju Bhusnar", spec: "General Physician · Founder President", img: drRajuImg },
  { name: "Dr. Punam Raju Bhusanar", spec: "General Physician · Secretary", img: drPunamImg },
  { name: "Dr. Vardhan Bhobe", spec: "MS Surgeon — General Surgery", img: drVardhanImg },
  { name: "Dr. Anil Kumar Vaidhya", spec: "MD (Kayachikitsa)", img: drAnilImg },
  { name: "Dr. Sarika Swapnil Arsekar", spec: "MBBS, MD, DNB — Obstetrics & Gynaecology", img: drSarikaImg },
  { name: "Dr. Sachin Arun Ambre", spec: "MS, MCh (AIIMS) — Cancer & Onco-surgery", img: drSachinImg },
  { name: "Dr. Suraj Rane", spec: "MS, MCh — Plastic & Reconstructive Surgery", img: drSurajImg },
  { name: "Dr. Amruta Dinkar", spec: "MBBS, DVD — Dermatologist & Cosmetologist", img: drAmrutaImg },
  { name: "Dr. Ketan Naik", spec: "MS Orthopaedics, MRCS (Glasgow)", img: drKetanImg },
  { name: "Dr. Jayesh Rane", spec: "MBBS, MS — ENT", img: drJayeshImg },
  { name: "Mayuri Hoble", spec: "DHL, BASLP — Audiologist", img: mayuriImg },
  { name: "Dr. Nikhil", spec: "Physiotherapist", img: drNikhilImg },
  { name: "Dr. Manoja Chodankar", spec: "BHMS — Homoeopathy", img: drManojaImg },
  { name: "Dr. Saiel A. Kumarjuvekar", spec: "MS (Ortho), FIJR", img: drSaielImg },
  { name: "Dr. Ajit Shinde", spec: "BDS — Implantologist", img: drAjitImg },
  { name: "Shridhar Katkar", spec: "Pathologist", img: shridharImg },
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
            <div key={p} className="bg-card border border-border rounded-xl p-6 text-center hover-lift flex items-center justify-center min-h-52">
              <div className="font-serif font-medium text-foreground">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Doctors;
