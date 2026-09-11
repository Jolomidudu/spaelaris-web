"use client";

import { useEffect, useState } from "react";

const sections = ["featured", "profile", "services", "portfolio", "reviews"];

export default function ProfessionalSectionNav() {
  const [activeSection, setActiveSection] = useState("featured");

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: 0 },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-30 overflow-x-auto border-y border-[#66703f]/15 bg-[#f7f6ef]/90 px-5 backdrop-blur-xl sm:px-8 [scrollbar-width:none]">
      <div className="mx-auto flex min-w-max max-w-5xl gap-7">
        {sections.map((section) => {
          const label = section[0].toUpperCase() + section.slice(1);
          const isActive = activeSection === section;

          return (
            <a
              key={section}
              href={`#${section}`}
              className={`border-b-2 py-4 text-sm font-medium transition-colors ${
                isActive
                  ? "border-[#66703f] text-[#26301c]"
                  : "border-transparent text-[#606454]"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}