"use client";

import ExpandableSection from "../ExpandSection";
import WorkCard from "../WorkCard";

export default function Work() {
  const projects = [
    {
      title: "Disney+ Clone",
      desc: "Membuat tampilan disney+.",
      tags: ["React", "Tailwind"],
      links: {
        demo: "https://disney-clonee.vercel.app/",
        repo: "https://github.com/Ibmahen/disney-clone",
      },
      color: "bg-[#40E0D0]", // Cyan accent
      imageSrc: "/projects/disney-clone.png",
    },
    {
      title: "Social Media App",
      desc: "Aplikasi sosial media real-time dengan fitur chat, notifikasi, dan berbagi media.",
      tags: ["React", "Socket.io", "Node.js"],
      links: { demo: "#", repo: "#" },
      color: "bg-[#FF90E8]", // Pink accent
      imageSrc: "",
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
