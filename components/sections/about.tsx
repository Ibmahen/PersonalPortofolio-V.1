"use client";

import ExpandableSection from "../ExpandSection";
import SkillCard, { SkillItemData } from "../SkillCard";
import { User, Code2, Wrench } from "lucide-react";

// Import Icons dari react-icons
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

export default function About() {
  // Data Tech Stack dengan Icon Spesifik
  const techStack: SkillItemData[] = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "Java", icon: FaJava },
    { name: "PHP", icon: SiPhp },
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "Express.js", icon: SiExpress },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
  ];

  // Data Tools dengan Icon Spesifik
  const tools: SkillItemData[] = [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Figma", icon: SiFigma },
    { name: "Vercel", icon: SiVercel },
  ];

  return (
    <ExpandableSection title="About" subtitle="More About Me" bgColor="#6FE6FC">
      <div
        className="w-full p-5 md:p-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* ... BIO CARD (Existing Code) ... */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10 mb-12">
          {/* ... isi bio ... */}
          <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
            <div className="bg-[#82A0D8] p-2 border-2 border-black">
              <User size={24} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black uppercase">Who am I?</h3>
          </div>

          <div className="space-y-4 text-lg font-medium leading-relaxed">
            <p>
              I am a Computer Science student at Universitas Teknologi Digital
              Indonesia (UTDI) with a strong focus on backend development. My
              interest in system architecture and data processing drives me to
              build services that are stable, efficient, and scalable.
            </p>
            <p>
              In backend development, I have experience designing REST APIs,
              structuring application architectures, and managing databases to
              ensure data is handled securely and effectively. I enjoy solving
              technical challenges, understanding system workflows, and creating
              solutions that can be applied to real-world use cases.
            </p>
            <p>
              I am continuously improving my skills to develop more reliable and
              scalable backend services. For me, every project is an opportunity
              to learn, experiment, and refine the quality of my work as a
              developer.
            </p>
          </div>
        </div>

        {/* TECH & TOOLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCard
            title="Tech Stack"
            items={techStack}
            headerColor="#FFD700" 
            icon={Code2}
          />

          <SkillCard
            title="Tools"
            items={tools}
            headerColor="#90EE90" 
            icon={Wrench}
          />
        </div>
      </div>
    </ExpandableSection>
  );
}
