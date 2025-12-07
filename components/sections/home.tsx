import { Code, Terminal, Save } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const skills = [
    "Node.js",
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "PHP",
    "HTML",
    "CSS",
    "Express.js",
    "React",
    "Next.js",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "Prisma",
  ];

  const tools = [
    "Postman",
    "Git",
    "Figma",
  ]

  return (
    <div className="mx-auto max-w-7xl px-5 py-4 md:py-8">
      {/* Main Card Container */}
      <div className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
        {/* Grid Content */}
        <div className="p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
          {/* Left Column: Text & Intro */}
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#40E0D0] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              Hi there! 👋
            </h2>

            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
              I&apos;m Ibmahendra <br /> Ferdiansah.
            </h1>

            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed border-l-4 border-[#FFD700] pl-4">
              Based in Indonesia, I&apos;m a Backend Developer. I love to work
              with distributed systems, data pipelines, and cloud technologies.
              I&apos;m passionate about microservices and building cool stuff.
            </p>

            {/* Social Buttons Row */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                  <Icon size={24} strokeWidth={2.5} />
                </a>
              ))} */}

            {/* Coffee Button */}
            {/* <a href="#" className="flex items-center gap-2 px-4 py-3 bg-white border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all ml-auto md:ml-4">
                 <Coffee size={20} className="text-pink-500" />
                 <span className="font-bold text-sm">Buy me a coffee</span>
              </a>
            </div> */}

            {/* CTA Button */}
            {/* <div className="pt-4">
               <a href="#contact" className="inline-block px-8 py-4 bg-[#40E0D0] border-2 border-black font-black text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Get in Touch!
               </a>
            </div> */}
          </div>

          {/* Right Column: Avatar & Stickers */}
          <div className="relative flex justify-center items-center min-h-[400px]">
            {/* Blue Background Card (Rotated) */}
            <div className="absolute w-72 h-80 md:w-80 md:h-96 bg-[#87CEEB] border-4 border-black rotate-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] z-0"></div>
              
            {/* Avatar Image Container */}
            <div className="relative w-64 h-72 md:w-72 md:h-80 bg-gray-100 border-4 border-black -rotate-2 z-10 overflow-hidden">
              {/* GANTI SRC INI DENGAN FOTO ANDA */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                {/* Uncomment baris bawah jika sudah ada gambar */}
                {/* <Image src="/path-to-your-photo.jpg" alt="Profile" fill className="object-cover" /> */}
              </div>
            </div>

            {/* Sticker: Code Icon */}
            <div className="absolute top-0 left-4 md:left-10 bg-[#40E0D0] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-20">
              <Code size={32} strokeWidth={3} />
            </div>

            {/* Sticker: Save Icon */}
            <div className="absolute bottom-10 left-0 md:left-4 bg-[#ECEE81] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12 z-20">
              <Save size={28} strokeWidth={3} />
            </div>

            {/* Sticker: Terminal Icon */}
            <div className="absolute bottom-20 right-4 md:right-8 bg-[#FFD700] p-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 z-20">
              <Terminal size={28} strokeWidth={3} />
            </div>

            {/* Badge: Role */}
            <div className="absolute -bottom-4 right-10 bg-[#90EE90] px-6 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2 z-30">
              <span className="font-black text-sm md:text-base">
                BACKEND DEV
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tech Stack */}
        <div className="border-t-4 border-black p-6 md:p-8 bg-white">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-6 py-2 bg-white border-3 border-black font-bold hover:bg-[#FFD700] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:trasnlate-x-1 hover:translate-y-1 ease-in-out active:shadow-none active:translate-x-1 active:translate-y-1 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Bottom Section:  Tools */}
          <div className="flex flex-warp justify-center gap-4 mt-4">
            {tools.map((tools) => (
              <div
                key={tools}
                className="px-6 py-2 bg-white border-3 border-black font-bold hover:bg-[#FFD700] transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:trasnlate-x-1 hover:translate-y-1 ease-in-out active:shadow-none active:translate-x-1 active:translate-y-1 cursor-default"
                >
                {tools}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
