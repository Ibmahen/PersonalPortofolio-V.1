"use client";

import { useEffect } from "react";
import { initSmoothScroll } from "@/lib/animations/scrollAnimaton";

export default function ClientLayout() {
  useEffect(() => {
    initSmoothScroll();
  }, []);

  return null;
}
