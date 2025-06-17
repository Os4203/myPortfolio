import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark-gradient flex items-center relative overflow-hidden pt-20 pb-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-warm-taupe rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <div className="mb-6">
            <span className="inline-block px-3 py-2 sm:px-4 text-sm sm:text-base bg-navy-blue/50 backdrop-blur-sm rounded-full text-warm-taupe font-medium border border-warm-taupe/30">
              ✨ Available for new projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="text-cream">Osama</span>
            <br />
            <span className="bg-gradient-to-r from-cream to-warm-taupe bg-clip-text text-transparent">
              Taweel
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-warm-taupe mb-8 max-w-2xl leading-relaxed mx-auto sm:mx-0">
            Software Developer & Digital Innovator creating impactful solutions
            through code and design. Passionate about building modern web
            applications and user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-accent-gradient text-charcoal font-semibold rounded-lg hover:shadow-xl hover:shadow-cream/20 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#work"
              className="px-6 py-3 bg-transparent border-2 border-warm-taupe text-warm-taupe font-semibold rounded-lg hover:bg-warm-taupe hover:text-charcoal transition-all duration-300 text-center"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-warm-taupe rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-taupe rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
