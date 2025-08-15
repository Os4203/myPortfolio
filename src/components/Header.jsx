import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-warm-taupe/20">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-2xl">
              <img src="/portfolio.png" alt="resume" className="w-8 h-8 sm:w-10 sm:h-10" />
            </span>
            <span className="text-cream text-sm sm:text-lg">Osama Taweel</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center gap-6 lg:gap-8">
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

          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-warm-taupe bg-gradient-to-br from-navy-blue to-charcoal hover:border-cream transition-all duration-300 group">
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-warm-taupe hover:text-cream transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-taupe/20 bg-charcoal/98 backdrop-blur-md">
            <nav className="py-4 space-y-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="block text-warm-taupe hover:text-cream font-medium transition-colors duration-300 px-4 py-2"
              >
                About
              </a>
              <a
                href="#work"
                onClick={closeMenu}
                className="block text-warm-taupe hover:text-cream font-medium transition-colors duration-300 px-4 py-2"
              >
                Projects
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block text-warm-taupe hover:text-cream font-medium transition-colors duration-300 px-4 py-2"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
