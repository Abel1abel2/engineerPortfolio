"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let current = "home";
      sections.forEach((section) => {
        const offset = section.offsetTop - 120;
        if (window.scrollY >= offset) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setDropDown(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full transition-all duration-300 bg-[#344c36]" 
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        {/* Logo — DG monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#c97c46]">
            <span className="font-merri text-lg sm:text-xl font-bold text-white">
              DG
            </span>
          </div>
          <span className="hidden sm:block font-merri text-base sm:text-lg font-semibold text-white">
            Dagim Girma
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 md:gap-8 lg:gap-10 px-3 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-sm font-medium transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#c97c46]"
                  : "text-white hover:text-[#c97c46]"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#c97c46] rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="sm:hidden flex items-center">
          <div
            className="cursor-pointer p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setDropDown(!dropDown)}
            aria-label="Toggle menu"
          >
            {dropDown ? (
              <X width={28} height={28} className="text-white" />
            ) : (
              <Menu width={28} height={28} className="text-white" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-out ${
          dropDown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-3 mb-3 flex flex-col rounded-xl bg-black/80 backdrop-blur-md border border-white/10 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                handleNavClick(e, link.href);
                setDropDown(false);
              }}
              className={`px-5 py-3.5 text-sm font-medium border-b border-white/10 last:border-b-0 transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[#c97c46] bg-white/5"
                  : "text-white hover:text-[#c97c46] hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;