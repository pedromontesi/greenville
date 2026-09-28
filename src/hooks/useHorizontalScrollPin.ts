import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Trava (pin) a seção na tela enquanto o scroll do usuário desliza o trilho
 * de imagens horizontalmente; o scroll da página só é liberado quando a
 * última imagem chega ao fim do trilho.
 */
export function useHorizontalScrollPin() {
  const pinRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      // Quanto o trilho precisa andar para a última imagem encostar no fim
      // do viewport visível.
      const getScrollDistance = () =>
        Math.max(0, track.scrollWidth - wrapper.clientWidth);

      if (getScrollDistance() <= 0) return;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        animation: tween,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, pinRef);

    return () => ctx.revert();
  }, []);

  return { pinRef, wrapperRef, trackRef };
}
