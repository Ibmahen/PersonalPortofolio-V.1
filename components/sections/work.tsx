"use client";

import ExpandableSection from "../ExpandSection";
import WorkCard from "../WorkCard";

export default function Work() {
  const projects = [
    {
      title: "Disney+ Clone",
      desc: "A UI-focused web project that replicates the look and feel of the Disney+ streaming platform with a clean and responsive layout.",
      tags: ["React", "Tailwind"],
      links: {
        demo: "https://disney-clonee.vercel.app/",
        repo: "https://github.com/Ibmahen/disney-clone",
      },
      color: "bg-[#40E0D0]",
      imageSrc: "/projects/disney-clone.png",
    },
    {
      title: "CRUD Product",
      desc: "A simple CRUD application for managing product data, focusing on basic data operations and structured application flow.",
      tags: ["Node.js", "Express.js", "MySQL"],
      links: { demo: "", repo: "https://github.com/Ibmahen/CRUD-Product" },
      color: "bg-[#FF90E8]",
      imageSrc: "/projects/crud-product.png",
    },
    {
      title: "CRUD Book",
      desc: "A CRUD-based book management system with user access control, designed to handle data securely and efficiently.",
      tags: ["PHP", "MySQL"],
      links: { demo: "", repo: "https://github.com/Ibmahen/CRUD-Book" },
      color: "bg-[#FF90E8]",
      imageSrc: "/projects/crud-book.png",
    },
    {
      title: "Website Portfolio",
      desc: "A personal portfolio website created to showcase my projects, skills, and professional background in a clear and structured way.",
      tags: ["Next.js", "Tailwind CSS"],
      links: { demo: "", repo: "#" },
      color: "bg-[#FF90E8]",
      imageSrc: "/projects/portofolio.png",
    },
  ];

  return (
    <ExpandableSection title="Work" subtitle="My Projects" bgColor="#ECEE81">
      {/* Background Pattern Halus */}
      <div
        className="w-full p-5 md:p-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Project Cards Loop */}
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              index={index}
              title={project.title}
              desc={project.desc}
              tags={project.tags}
              links={project.links}
              color={project.color}
              imageSrc={project.imageSrc}
            />
          ))}
        </div>

        {/* "View More" Call to Action */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Ibmahen?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 font-bold text-xl border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-1 active:translate-y-1 duration-300 ease-in-out"
          >
            View More Projects
          </a>
        </div>
      </div>
    </ExpandableSection>
  );
}
