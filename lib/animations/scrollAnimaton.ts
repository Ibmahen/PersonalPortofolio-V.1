import Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export const initSmoothScroll = () => {
  if (lenis) return; // cegah double init

  lenis = new Lenis({
    duration: 1.4,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  function raf(time: number) {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
