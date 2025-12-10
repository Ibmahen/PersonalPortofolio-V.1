"use client";

import Image from "next/image";
import { ExternalLink, Award, Calendar } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageSrc: string;
  credentialLink: string;
}

export default function CertificateCard({
  title,
  issuer,
  date,
  imageSrc,
  credentialLink,
}: CertificateCardProps) {
  return (
    <a
      href={credentialLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:shadow-none group-hover:translate-x-[4px] group-hover:translate-y-[4px] h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 w-full border-b-4 border-black bg-gray-100 overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#ECEE81]">
              <Award size={48} className="text-black opacity-20" />
            </div>
          )}

          {/* Overlay Icon on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="bg-white border-2 border-black p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <ExternalLink size={20} />
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Issuer Badge & Date */}
          <div className="flex justify-between items-start mb-3 gap-2">
            <span className="inline-block bg-[#FF90E8] border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {issuer}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mt-1">
              <Calendar size={12} />
              {date}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-black uppercase leading-tight mb-4 group-hover:text-[#55AD9B] transition-colors">
            {title}
          </h3>

          {/* Footer Action */}
          <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
            <Award size={16} className="text-black" />
            <span>View Credential</span>
          </div>
        </div>
      </div>
    </a>
  );
}
