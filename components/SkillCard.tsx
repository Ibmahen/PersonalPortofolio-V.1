"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";
import { IconType } from "react-icons"; // Import tipe dari react-icons

// Tipe data untuk satu item skill
export interface SkillItemData {
  name: string;
  icon: IconType | LucideIcon; // Bisa icon dari react-icons atau lucide
}

interface SkillCardProps {
  title: string;
  items: SkillItemData[]; // Array of objects, bukan string[] lagi
  headerColor: string;
  icon: LucideIcon; // Icon Header tetap pakai Lucide
}

export default function SkillCard({
  title,
  items,
  headerColor,
  icon: Icon,
}: SkillCardProps) {
  return (
    <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-full">
      {/* Header Card */}
      <div
        className="border-b-4 border-black p-4 flex items-center gap-3"
        style={{ backgroundColor: headerColor }}
      >
        <div className="bg-white p-1.5 border-2 border-black">
          <Icon size={20} strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-black uppercase tracking-wide">{title}</h3>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-wrap gap-3 content-start">
        {items.map((item, index) => (
          <SkillItem
            key={index}
            name={item.name}
            Icon={item.icon}
            hoverColor={headerColor}
          />
        ))}
      </div>
    </div>
  );
}

// Komponen Item
function SkillItem({
  name,
  Icon,
  hoverColor,
}: {
  name: string;
  Icon: IconType | LucideIcon;
  hoverColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-2 border-black px-3 py-2 font-bold text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y- transition-all cursor-default flex items-center gap-2 duration-300 ease-in-out"
      style={{
        backgroundColor: isHovered ? hoverColor : "white",
      }}
    >
      {/* Render Icon */}
      <Icon size={16} className={isHovered ? "text-black" : "text-gray-600"} />
      {name}
    </span>
  );
}
