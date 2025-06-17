import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark-gradient flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cream rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-taupe rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-navy-blue/50 backdrop-blur-sm rounded-full text-warm-taupe font-medium border border-warm-taupe/30">
              ✨ Available for new projects
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-cream">Osama</span>
            <br />
            <span className="bg-gradient-to-r from-cream to-warm-taupe bg-clip-text text-transparent">
              Taweel
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-warm-taupe mb-8 max-w-2xl leading-relaxed">
            Software Developer & Digital Innovator creating impactful solutions
            through code and design. Passionate about building modern web
            applications and user experiences.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-warm-taupe rounded-full flex justify-center">
          <div className="w-1 h-3 bg-warm-taupe rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
