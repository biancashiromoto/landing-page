import { useCustomContext } from "@/context/Provider";
import { RefObject, useEffect, useRef, useState } from "react";

interface UseIntro {
  isVisible: boolean;
  isScrolling: boolean;
  imageRef: RefObject<HTMLDivElement | null>;
  screenWidth: number;
}

const useIntro = (): UseIntro => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const { screenWidth } = useCustomContext();

  useEffect(() => {
    if (!screenWidth || screenWidth < 1024) return;

    let observer: IntersectionObserver;

    const setupObserver = () => {
      if (!imageRef.current) return;

      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
        }
      );

      observer.observe(imageRef.current);
    };

    const timeoutId = setTimeout(setupObserver, 350);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [screenWidth]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return {
    isVisible,
    isScrolling,
    imageRef,
    screenWidth,
  };
};

export default useIntro;
