import gsap from "gsap";

type FadeInOptions = {
  delay?: number;
};

export const fadeIn = (
  scope: HTMLElement,
  { delay = 0.3 }: FadeInOptions = {}
) => {
  const tl = gsap.timeline({
    delay,
    defaults: {
      ease: "power4.out",
    },
  });

  // 1️⃣ Wrapper fade-in sangat pelan
  tl.to(scope, {
    opacity: 1,
    duration: 2.6,
  });

  // 2️⃣ Konten masuk satu per satu dengan ritme lambat
  tl.fromTo(
    scope.querySelectorAll("[data-fade]"),
    {
      opacity: 0,
      y: 18,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 2.2,
      stagger: 0.22,
      clearProps: "all",
    },
    "-=0.6"
  );

  return tl;
};
