import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/doctors", label: "Doctors" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-background/80 backdrop-blur-sm border-b border-border/70"
      )}
    >
      <div className="container-narrow flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Punarjeevan Ayurvedic Association logo"
            className="h-11 w-11 rounded-full object-contain bg-white ring-1 ring-border shadow-soft"
          />
          <div className="leading-tight">
            <div className="font-serif font-semibold text-[15px] text-foreground">Punarjeevan</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Ayurvedic Association</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors story-link",
                  isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="donate" size="sm">
            <Link to="/get-involved#donate">Donate</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-narrow py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "py-2.5 text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Button asChild variant="donate" className="mt-3">
              <Link to="/get-involved#donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
