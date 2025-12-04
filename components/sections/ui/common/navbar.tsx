"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about", hoverColor: "hover:bg-[#BA94D1]" },
    { label: "Work", href: "#work", hoverColor: "hover:bg-[#ECEE81]" },
    { label: "Contact", href: "#contact", hoverColor: "hover:bg-[#55AD9B]" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <h1 className="font-bold text-3xl border rounded-full px-5 py-3 bg-[#F0A04B]">
            HEN
          </h1>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex gap-5 text-xl">
          {navItems.map((item) => (
              <a
              className={`border px-5 py-3 rounded-full bg-background transition-colors duration-300 cursor-pointer ${item.hoverColor}`}
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
