"use client";

import { useState } from "react";

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

  return (
    <div className={`w-full max-w-8-xl mx-auto ${className}`}>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer group"
      >
        {/* Header Section */}
        <div
          className="flex flex-wrap justify-between items-center px-4 py-2 border-y-2 border-black transition-colors duration-300 ease-in-out"
          style={{
            // Jika aktif (hover/expand), pakai bgColor. Jika tidak, transparan
            backgroundColor: isActive ? bgColor : "transparent",
          }}
        >
          <h1 className="text-5xl font-bold m-2 md:text-6xl tracking-tighter uppercase z-10">
            {title}
          </h1>

          {subtitle && (
            <span 
              className={`
                border border-black rounded-full px-4 py-1 text-sm md:text-base z-10 bg-white/50 backdrop-blur-sm
                transition-all duration-500 ease-in-out transform
                ${isActive 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-4 pointer-events-none"
                }
              `}
            >
              {subtitle}
            </span>
          )}
        </div>

        {/* Content Section */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="relative w-full p-4 md:p-10 border-b-2 border-black transition-colors duration-300"
            style={{ backgroundColor: bgColor }} // Content selalu berwarna saat expanded
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}