import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title:
        "Empowering IT Students: A Digital Framework for Soft Skills Assessment",
      description:
        "A digital framework for soft skills assessment, built with React, Node.js, and MongoDB to empower IT students with real-time feedback and development opportunities.",
            image:
        "https://via.placeholder.com/400x300/2C3E50/ECF0F1?text=EduSoft+Project", // Replace with your hosted image URL
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "APIs",
        "React Router",
        "React Hooks",
        "React Context",
        "React Redux",
        
        
      ],
      link: "https://github.com/Os4203/eduSoft",
    },
    {
      title: "Portfolio Website",
      description:
        "A portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image:
        "/portfolio.png",
      tags: ["React", "Tailwind CSS","Responsive Design","React Router"],
      link: "https://github.com/Os4203/myPortfolio",
      liveDemo: "https://www.myportfolio.cam/"
    },
    {
      title: "Arab Chemistry Olympiad - Ministry of Education Jordan",
      description:
        "Official website developed for the Ministry of Education Jordan for the Arab Chemistry Olympiad, featuring participating countries, chemistry subjects, and educational content with multi-language support.",
      image:
        "/arab-olympiad.png", // Using existing image, you can replace with a specific screenshot
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://github.com/Os4203/Arab-Chemistry-Olympiad",
      liveDemo: "https://apps.moe.gov.jo/App/ArabChemistryOlympiad/"
    },
    
  ];

  return (
    <section id="work" className="py-16 sm:py-20 bg-charcoal">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-cream">
            Featured Work
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-warm-taupe max-w-3xl mx-auto leading-relaxed px-4">
            A collection of projects that showcase my technical skills and
            passion for creating innovative web applications using modern
            technologies and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
