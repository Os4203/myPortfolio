import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title:
        "Empowering IT Students: A Digital Framework for Soft Skills Assessment",
      description:
        "Complete Edusoft solution built with React, Node.js,Express.js, and MongoDB featuring user authentication, supervisor dashboard, and admin dashboard.",
      image:
       "edusoft.png",
      tags: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
        "APIs",
      ],
      link: "https://github.com/Os4203/eduSoft",
    },
    {
      title: "Portfolio Website",
      description:
        "Collaborative project management tool with real-time updates, built using React, Express.js, and Socket.io for seamless team coordination.",
      image:
        "portfolio .png",
      tags: ["React", "Tailwind CSS"],
      link: "https://github.com/yourusername/portfolio-website",
    },
  ];

  return (
    <section id="work" className="py-20 bg-charcoal">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cream">
            Featured Work
          </h2>
          <p className="text-xl text-warm-taupe max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my technical skills and
            passion for creating innovative web applications using modern
            technologies and best practices.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] max-w-md">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
