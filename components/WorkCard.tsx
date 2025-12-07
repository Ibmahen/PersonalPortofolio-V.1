import { ExternalLink, Github, FolderOpen, ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  desc: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  color: string;
  index: number;
  imageSrc?: string;
}

export default function WorkCard({
  title,
  desc,
  tags,
  links,
  color,
  index,
  imageSrc,
}: WorkCardProps) {
  return (
    <div className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Card Header / Retro Browser Bar */}
      <div className="border-b-4 border-black bg-gray-100 p-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full border-2 border-black bg-red-400" />
        <div className="w-3 h-3 rounded-full border-2 border-black bg-yellow-400" />
        <div className="w-3 h-3 rounded-full border-2 border-black bg-green-400" />
        <div className="ml-auto font-mono text-xs border border-black px-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
          project_0{index + 1}.exe
        </div>
      </div>

      {/* Image Placeholder Area */}
      <div
        className={`h-48 w-full border-b-4 border-black ${color} flex items-center justify-center relative overflow-hidden group-hover:opacity-90 transition-opacity`}
      >
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <>
            <FolderOpen size={64} className="text-black opacity-20" />
            <span className="absolute font-black text-4xl opacity-10 -rotate-12 uppercase tracking-widest select-none">
              Preview
            </span>
          </>
        )}

        {/* Overlay Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
          <span className="bg-white border-2 border-black px-4 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
            View Details <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-black uppercase mb-3 leading-none">
          {title}
        </h3>
        <p className="text-gray-700 font-medium mb-6 grow leading-relaxed">
          {desc}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-bold border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          <a
            href={links.repo}
            className="flex-1 flex items-center justify-center gap-2 bg-white border-2 border-black p-3 font-bold hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} /> Code
          </a>
          <a
            href={links.demo}
            className="flex-1 flex items-center justify-center gap-2 bg-[#ECEE81] border-2 border-black p-3 font-bold hover:brightness-95 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={18} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
