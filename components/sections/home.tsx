import { Code, Terminal, Save } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      {/* Main Card Container */}
      <div
        className="w-full max-w-7xl mb-20 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Grid Content */}
        <div className="p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
          </div>

          {/* Right Column: Avatar & Stickers */}
          <div className="relative flex justify-center items-center min-h-[400px]">
            {/* Blue Background Card (Rotated) */}
            <div className="absolute w-72 h-80 md:w-80 md:h-96 bg-[#87CEEB] border-black rotate-3 shadow-[12px_10px_0px_0px_rgba(0,0,0,1)] z-0">
              <Image
                src="/me/aing.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
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
      </div>
    </div>
  );
}
