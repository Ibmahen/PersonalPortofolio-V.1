"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { fadeIn } from "@/lib/animations/fadeIn";

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    fadeIn(ref.current);
  }, []);

  return (
    <header
      ref={ref}
      className="opacity-0 top-0 left-0 w-full z-50 p-2 bg-[#FFD700] border-b-4 border-black"
    >
      <div className="flex items-center justify-between px-4">
        <div className="p-2">
          <Link
            href="/"
            className="inline-block font-black text-xl border-3 border-black bg-[#40E0D0] px-3 py-1 transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 ease-in-out active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            HEN
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="inline-block font-bold text-base border-2 border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#40E0D0] hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:bg-[#40E0D0] transition-all duration-300 ease-in-out"
          >
            Resume
          </a>

          <Link
            href="/certificate"
            className="inline-block font-bold text-base border-2 border-black bg-white px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#40E0D0] hover:text-white hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 active:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:bg-[#40E0D0] transition-all duration-300 ease-in-out"
          >
            Certificate
          </Link>
        </div>
      </div>
    </header>
  );
}
