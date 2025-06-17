import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-warm-taupe/20">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-2xl">
              <img src="/portfolio .png" alt="resume" className="w-10 h-10" />
            </span>
            <span className="text-cream">Osama Taweel</span>
          </div>
          <nav className="flex justify-center items-center  gap-8">
            <a
              href="#about"
              className="text-warm-taupe hover:text-cream font-medium transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#work"
              className="text-warm-taupe hover:text-cream font-medium transition-colors duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-warm-taupe hover:text-cream font-medium transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-warm-taupe bg-gradient-to-br from-navy-blue to-charcoal hover:border-cream transition-all duration-300 group">
            <img
              src="/image.jpg"
              alt="Osama Taweel"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
              style={{
                imageRendering: "high-quality",
                filter: "contrast(1.05) brightness(1.02) saturate(1.05)",
              }}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
