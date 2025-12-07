"use client";

import ExpandableSection from "../ExpandSection";
import { User, MapPin } from "lucide-react";

export default function About() {
  return (
    <ExpandableSection
      title="About"
      subtitle="More About Me"
      bgColor="#6FE6FC" // Warna Biru Section
    >
      {/* Inner Container dengan Grid Pattern halus - FULL WIDTH */}
      <div
        className="w-full p-5 md:p-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
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

          {/* Location Badge */}
          <div className="mt-6 flex justify-end">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-black rounded-full text-sm font-bold">
              <MapPin size={16} />
              Based in Indonesia 🇮🇩
            </div>
          </div>
        </div>
      </div>
    </ExpandableSection>
  );
}
