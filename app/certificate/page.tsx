import Navbar from "@/components/sections/ui/common/navbar";
import Footer from "@/components/sections/ui/common/footer";

import CertificateCard from "@/components/CertificateCard";

export default function CertificatePage() {
  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Dec 2023",
      imageSrc: "/certificates/aws-ccp.png", // Pastikan gambar ada di folder public/certificates
      credentialLink: "https://aws.amazon.com/verification",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Dicoding Indonesia",
      date: "Aug 2023",
      imageSrc: "/certificates/dicoding-web.png",
      credentialLink: "#",
    },
    {
      title: "Backend Engineering Bootcamp",
      issuer: "Binar Academy",
      date: "Jan 2023",
      imageSrc: "", // Contoh jika tidak ada gambar
      credentialLink: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-5 py-12 md:py-20">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] text-[#40E0D0]">
            Certificates
          </h1>
          <p className="text-xl font-medium max-w-2xl mx-auto border-b-4 border-[#FFD700] inline-block pb-1">
            My professional certifications and achievements.
          </p>
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
