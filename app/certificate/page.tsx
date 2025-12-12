import Navbar from "@/components/sections/ui/common/navbar";
import Footer from "@/components/sections/ui/common/footer";

import CertificateCard from "@/components/CertificateCard";
import { image } from "framer-motion/client";

export default function CertificatePage() {
  const certificates = [
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Dec 2024",
      imageSrc: "/certificates/image/javascript-dasar.png",
      credentialLink: "/certificates/pdf/dasar-javascript.pdf",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Dicoding Indonesia",
      date: "Dec 2024",
      imageSrc: "/certificates/image/backend-dasar.png",
      credentialLink: "/certificates/pdf/backend-dasar.pdf",
    },
    {
      title: "Seminar Accounting Routine Festival 2025",
      issuer: "Binar Academy",
      date: "Oct 2023",
      imageSrc: "/certificates/image/coinvestasi1.png", 
      credentialLink: "/certificates/pdf/seminar-accounting.pdf",
    },
    {
      title: "Web3 University Tour Solo",
      issuer: "Binance Academy, TokoCrypto, Coinvestasi",
      date: "Oct 2025",
      imageSrc: "/certificates/image/coinvestasi2.png",
      credentialLink: "/certificates/pdf/web3-tour.pdf",
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-5 py-12 md:py-20">
        {/* Header Section */}
        <div className="p-1 mb-12 flex justify-center items-center text-center bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-[#40E0D0]">
            Certificates
          </h1>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              imageSrc={cert.imageSrc}
              credentialLink={cert.credentialLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
