import React from "react";

const About = () => {
  const skills = [
    "C++",
    "C#",
    "Java",
    "OOP",
    "ASP.NET",
    "ASP.NET Core",
    "ASP.NET MVC",
    "ASP.NET Web API",
    "JavaScript",
    "React.js",
    "Node.js",
    "HTML/CSS",
    "MongoDB",
    "SQL",
    "Git/GitHub",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap CSS",
    "API Development",
    "Full-Stack Development",
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              {/* Main image container with enhanced styling */}
              <div className="w-80 h-[30rem] professional-image-frame border-4 border-warm-taupe/40 shadow-2xl shadow-charcoal/50 bg-gradient-to-br from-navy-blue to-charcoal relative overflow-hidden flex items-center justify-center">
                <img
                  src="/image.jpg"
                  alt="Osama Taweel"
                  className="w-full h-full object-cover transition-transform duration-500 high-res-image group-hover:scale-105"
                  style={{
                    imageRendering: "high-quality",
                    filter:
                      "contrast(1.15) brightness(1.08) saturate(1.12) sharpen(0.5)",

                    objectFit: "cover",
                    objectPosition: "center center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) translateZ(0)",
                  }}
                  loading="eager"
                  decoding="async"
                />
                {/* Gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-cream rounded-full opacity-10 blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-8 -left-8 w-36 h-36 bg-warm-taupe rounded-full opacity-10 blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Floating accent dots */}
              <div
                className="absolute top-4 right-4 w-3 h-3 bg-cream rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute bottom-20 right-8 w-2 h-2 bg-warm-taupe rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>

          {/* About Content */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
              About Me
            </h2>

            <div className="space-y-6 text-warm-taupe text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-cream font-semibold">Osama Taweel</span>,
                a dedicated software developer and recent graduate passionate
                about creating innovative digital solutions. I specialize in
                full-stack development and enjoy building applications that make
                a real difference.
              </p>

              <p>
                My approach combines technical expertise with creative
                problem-solving. I love tackling complex challenges, learning
                new technologies, and crafting clean, efficient code that
                delivers exceptional user experiences.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open-source projects, or staying up-to-date with
                the latest tech trends. I'm always eager to learn and grow as a
                developer.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 text-cream">
                Skills & Expertise
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-navy-blue/50 backdrop-blur-sm text-warm-taupe border border-warm-taupe/30 rounded-full text-sm font-medium hover:bg-warm-taupe/20 hover:border-cream/50 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-8">
              <button
                onClick={() => {
                  // Option 1: If you have a resume file in public folder, uncomment the next line:
                  window.open("/resume.pdf", "_blank");
                }}
                className="px-6 py-3 bg-accent-gradient text-charcoal font-semibold rounded-lg hover:shadow-xl hover:shadow-cream/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
