"use client";

import React from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageSrc?: string;
  credentialLink?: string;
}

function normalizeHref(link?: string) {
  if (!link) return "#";
  let h = link.trim();
  if (!/^https?:\/\//i.test(h) && !h.startsWith("/")) h = "/" + h;
  return encodeURI(h);
}

export default function CertificateCard({
  title,
  issuer,
  date,
  imageSrc,
  credentialLink,
}: CertificateCardProps) {
  const href = normalizeHref(credentialLink || imageSrc);
  const isPdf = /\.pdf$/i.test(href);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group block h-full">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:shadow-none h-full flex flex-col">
        <div className="relative h-48 w-full border-b-4 border-black bg-gray-100 overflow-hidden">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          ) : isPdf ? (
            <div className="w-full h-full flex items-center justify-center bg-[#ECEE81]">
              <svg className="w-16 h-16 text-black opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v7h7" strokeWidth="1.5"/><rect x="3" y="9" width="13" height="12" rx="2" strokeWidth="1.5"/></svg>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#ECEE81]">
              <Award size={48} className="text-black opacity-20" />
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="bg-white border-2 border-black p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
              <ExternalLink size={18} />
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col grow">
          <div className="flex justify-between items-start mb-3 gap-2">
            <span className="inline-block bg-[#FF90E8] border-2 border-black px-2 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {issuer}
            </span>
            <div className="flex items-center gap-1 text-xs font-bold text-gray-500 mt-1">
              <Calendar size={12} />
              {date}
            </div>
          </div>

          <h3 className="text-xl font-black uppercase leading-tight mb-4">
            {title}
          </h3>

          <div className="mt-auto pt-4 border-t-2 border-dashed border-gray-300 flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
            <Award size={16} className="text-black" />
            <span>{isPdf ? "Open PDF" : "View Credential"}</span>
          </div>
        </div>
      </div>
    </a>
  );
} 