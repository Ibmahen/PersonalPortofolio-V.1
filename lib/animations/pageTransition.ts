import gsap from "gsap";

export const pageEnter = (container: HTMLElement) => {
  return gsap.fromTo(
    container,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }
  );
};

export const pageExit = (container: HTMLElement) => {
  return gsap.to(container, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power2.in",
  });
};
