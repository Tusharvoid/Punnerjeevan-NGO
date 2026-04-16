import { Link } from "react-router-dom";
import { Heart, Phone, MapPin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-narrow py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-primary-foreground/15 grid place-items-center">
              <Heart className="h-4.5 w-4.5" strokeWidth={2.4} />
            </div>
            <div className="font-serif font-semibold text-lg">Punarjeevan Ayurvedic Association</div>
          </div>
          <p className="text-primary-foreground/75 text-sm leading-relaxed max-w-md">
            Bridging the gap between healthcare and the underserved since 2019.
            Treatment should not depend on where you come from.
          </p>
          <div className="text-xs text-primary-foreground/60 space-y-1 pt-2">
            <div>Reg. No. 422/Goa/2021 · 80G Certified</div>
            <div>Darpan ID: GA/2022/0322842</div>
          </div>
        </div>

        <div>
          <h4 className="font-serif font-semibold mb-4 text-base">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About</Link></li>
            <li><Link to="/programs" className="hover:text-primary-foreground transition-colors">Programs</Link></li>
            <li><Link to="/doctors" className="hover:text-primary-foreground transition-colors">Doctors</Link></li>
            <li><Link to="/get-involved" className="hover:text-primary-foreground transition-colors">Get Involved</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif font-semibold mb-4 text-base">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/75">
            <li className="flex gap-2.5"><MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" /><span>Almita Apt-3, Naika Vaddo,<br/>Calangute, Bardez, Goa – 403516</span></li>
            <li className="flex gap-2.5"><Phone className="h-4 w-4 mt-0.5" /><a href="tel:9011932151" className="hover:text-primary-foreground">+91 90119 32151</a></li>
            <li className="flex gap-2.5"><Mail className="h-4 w-4 mt-0.5" /><a href="mailto:info@punarjeevan.org" className="hover:text-primary-foreground">info@punarjeevan.org</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-narrow py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Punarjeevan Ayurvedic Association. All rights reserved.</div>
          <div>Made with care for those who need it most.</div>
        </div>
      </div>
    </footer>
  );
};
