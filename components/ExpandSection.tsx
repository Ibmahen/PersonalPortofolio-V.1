"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

interface ExpandableSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgColor?: string; // Hex code (e.g., "#82A0D8")
  className?: string;
}

export default function ExpandableSection({
  title,
  subtitle,
  children,
  bgColor = "#f3f3f3", // Default color
  className = "",
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Logika: Warna aktif jika sedang di-Expand ATAU sedang di-Hover
  const isActive = isExpanded || isHovered;

  // Handler untuk toggle expand (hanya jika belum expanded)
  const handleHeaderClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  // Handler untuk close button
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah event bubbling ke parent
    setIsExpanded(false);
  };

  return (
    <div className={`w-full max-w-8-xl mx-auto ${className}`}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group"
      >
        {/* Header Section */}
        <div
          onClick={handleHeaderClick}
          className={`flex flex-wrap justify-between items-center px-4 py-2 border-y-2 border-black transition-colors duration-300 ease-in-out ${
            !isExpanded ? "cursor-pointer" : ""
          }`}
          style={{
            // Jika aktif (hover/expand), pakai bgColor. Jika tidak, transparan
            backgroundColor: isActive ? bgColor : "transparent",
          }}
        >
          <h1 className={`text-5xl font-bold m-2 md:text-6xl tracking-tighter uppercase z-10 transition-all duration-300 ease-in-out
            ${isExpanded ? 'bg-white/70 backdrop-blur-sm border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' : ''}
          `}>
            {title}
          </h1>

          <div className="flex items-center gap-4">
            {/* Subtitle - Muncul saat hover/expand dan belum expanded */}
            {subtitle && !isExpanded && (
              <span
                className={`
                  border border-black px-4 py-1 text-sm md:text-base z-10 bg-white/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-500 ease-in-out transform
                  ${
                    isActive
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 pointer-events-none"
                  }
                `}
              >
                {subtitle}
              </span>
            )}

            {/* Close Button - Hanya muncul saat expanded */}
            {isExpanded && (
              <button
                onClick={handleClose}
                className="flex items-center gap-2 bg-white border-2 border-black px-4 py-2 font-bold text-sm hover:bg-red-500 hover:text-white transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-1 active:translate-y-1"
                aria-label="Close section"
              >
                <ArrowLeft size={18} />
                <span className="hidden md:inline">Close</span>
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="relative w-full border-b-2 border-black transition-colors duration-300"
            style={{ backgroundColor: bgColor }}
            // Mencegah close saat klik di dalam konten
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
