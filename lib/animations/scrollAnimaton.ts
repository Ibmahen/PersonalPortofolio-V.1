import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;
let rafId = 0;

export const initSmoothScroll = () => {
  if (typeof window === "undefined") return;
  if (lenis) return;

  lenis = new Lenis({
    duration: 1.4,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  function raf(time: number) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);
};

export const resizeSmoothScroll = () => {
  if (!lenis) return;
  lenis.resize();
};

export const stopSmoothScroll = () => {
  if (!lenis) return;
  cancelAnimationFrame(rafId);
  lenis.destroy();
  lenis = null;
  rafId = 0;
};
