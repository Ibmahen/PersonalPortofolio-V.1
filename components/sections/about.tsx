"use client";

import ExpandableSection from "../ExpandSection";
import { User, MapPin, Heart, Zap, Music, Gamepad2, Coffee } from "lucide-react";

export default function About() {
  return (
    <ExpandableSection 
      title="About" 
      subtitle="More About Me" 
      bgColor="#82A0D8" // Warna Biru Section
    >
      {/* Inner Container dengan Grid Pattern halus */}
      <div className="w-full bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:20px_20px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Kolom Kiri: Bio Card */}
          <div className="relative">
            {/* Decorative "Tape" */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ECEE81] border-2 border-black rotate-2 z-20 opacity-90 shadow-sm"></div>
            
            <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-black pb-4">
                <div className="bg-[#82A0D8] p-2 border-2 border-black">
                  <User size={24} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black uppercase">Who am I?</h3>
              </div>

              <div className="space-y-4 text-lg font-medium leading-relaxed">
                <p>
                  Halo! Saya <span className="bg-[#82A0D8] px-1 border border-black">Hen</span>. 
                  Seorang developer yang tidak hanya menulis kode, tapi juga merancang solusi.
                </p>
                <p>
                  Perjalanan saya dimulai dari rasa penasaran tentang bagaimana internet bekerja, 
                  dan sekarang saya terobsesi untuk membuat web yang <span className="underline decoration-wavy decoration-[#82A0D8] decoration-2">cepat, responsif, dan interaktif</span>.
                </p>
                <p>
                  Saat tidak coding, Anda mungkin menemukan saya sedang bereksperimen dengan teknologi baru atau sekadar menikmati kopi sore.
                </p>
              </div>

              {/* Location Badge */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border-2 border-black rounded-full text-sm font-bold">
                <MapPin size={16} />
                Based in Indonesia 🇮🇩
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Visuals & Interests */}
          <div className="relative flex flex-col gap-6">
            
            {/* Stats / Interests Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-xl">3+</span>
                  <Zap size={20} className="text-[#82A0D8]" fill="currentColor" />
                </div>
                <p className="text-sm font-bold text-gray-600">Years Experience</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-xl">10+</span>
                  <Heart size={20} className="text-red-500" fill="currentColor" />
                </div>
                <p className="text-sm font-bold text-gray-600">Projects Done</p>
              </div>
            </div>

            {/* "Loves" Section (Stickers Style) */}
            <div className="bg-black p-6 border-2 border-white/50 relative mt-4">
              <h4 className="text-white font-black text-xl mb-4 uppercase tracking-widest">
                Things I Love
              </h4>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#ECEE81] px-4 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_0px_#fff] -rotate-2 flex items-center gap-2">
                  <Music size={18} /> Music
                </div>
                <div className="bg-[#40E0D0] px-4 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_0px_#fff] rotate-3 flex items-center gap-2">
                  <Gamepad2 size={18} /> Gaming
                </div>
                <div className="bg-[#FFD700] px-4 py-2 border-2 border-black font-bold shadow-[4px_4px_0px_0px_#fff] -rotate-1 flex items-center gap-2">
                  <Coffee size={18} /> Coffee
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce">
               <span className="text-3xl">✌️</span>
            </div>

          </div>

        </div>
      </div>
    </ExpandableSection>
  );
}



// "use client";

// import ExpandableSection from "../ExpandSection";

// export default function About() {
//   return (
//     <ExpandableSection title="About" subtitle="More About Me" bgColor="#82A0D8">
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
