"use client";

import ExpandableSection from "../ExpandSection";
import { Send, Mail, Linkedin, Twitter, Copy } from "lucide-react";

export default function Contact() {
  return (
    <ExpandableSection
      title="Contact"
      subtitle="Let's Talk"
      bgColor="#55AD9B" // Warna Teal Section
    >
      {/* Background Pattern - gunakan style untuk menghindari parsing TSX pada class arbitrary */}
      <div
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Kolom Kiri: Contact Form (Retro Window Style) */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
            {/* Window Header */}
            <div className="bg-[#55AD9B] border-b-4 border-black p-3 flex items-center justify-between">
              <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Mail size={18} className="text-black" /> compose_email.exe
              </span>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-white border-2 border-black" />
                <div className="w-4 h-4 bg-black border-2 border-white" />
              </div>
            </div>

            {/* Form Content */}
            <form className="p-6 md:p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Subject / Name</label>
                <input
                  type="text"
                  placeholder="Who is this awesome person?"
                  className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Your Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="font-black uppercase text-sm">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50 border-2 border-black p-4 font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_#55AD9B] focus:-translate-y-1 transition-all placeholder:text-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-black uppercase py-4 border-2 border-transparent hover:bg-[#55AD9B] hover:text-black hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2 group"
              >
                Send Message{" "}
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Kolom Kanan: Info & Socials */}
          <div className="flex flex-col gap-8">
            {/* Intro Text */}
            <div className="bg-[#ECEE81] border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-1">
              <h3 className="text-3xl md:text-4xl font-black uppercase leading-none mb-4">
                Got an idea? <br /> Let&apos;s build it.
              </h3>
              <p className="font-medium text-lg">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang menjadi bagian dari visi Anda.
              </p>
            </div>

            {/* Email Copy Box */}
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 group cursor-pointer active:scale-95 transition-transform">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">Drop me a line directly</p>
                  <p className="text-xl md:text-2xl font-black underline decoration-4 decoration-[#55AD9B]">hello@ibmahen.dev</p>
                </div>
                <div className="bg-black text-white p-3 rounded-full group-hover:rotate-12 transition-transform">
                  <Copy size={20} />
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="bg-white border-2 border-black p-4 flex items-center justify-center gap-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#0077b5] hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="#"
                className="bg-white border-2 border-black p-4 flex items-center justify-center gap-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Twitter size={20} /> Twitter / X
              </a>
            </div>

            {/* Decorative Sticker */}
            <div className="self-end mt-4">
              <div className="bg-white px-6 py-2 border-2 border-black rounded-full font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                <span>Let&apos;s collab</span>
                <span className="inline-block transform rotate-6">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExpandableSection>
  );
}


// "use client";

// import ExpandableSection from "../ExpandSection";

// export default function Contact() {
//   return (
//     <ExpandableSection
//       title="Contact"
//       subtitle="Lets Talk"
//       bgColor="#55AD9B"
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
//         <div className="space-y-4">
//           <p>
//             Halo! Saya Hen, seorang developer yang antusias membangun web
//             interaktif.
//           </p>
//           <p>Fokus saya adalah menciptakan pengalaman pengguna yang unik.</p>
//         </div>
//         <div className="bg-white/20 rounded-lg h-64 flex items-center justify-center border border-black">
//           [Foto / Gambar]
//         </div>
//       </div>
//     </ExpandableSection>
//   );
// }
