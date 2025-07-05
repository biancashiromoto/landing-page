import { RefObject, useEffect, useRef, useState } from "react";

export interface UseNavbar {
  navbarTop: number;
  scrolled: boolean;
  navbarHeight: number;
  navRef: RefObject<HTMLDivElement | null>;
}

const useNavbar = (): UseNavbar => {
  const [navbarTop, setNavbarTop] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setNavbarTop(y < 10 ? -y : -10);
      setScrolled(y > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navRef.current) {
        setNavbarHeight(navRef.current.offsetHeight);
      }
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    window.addEventListener("scroll", updateNavbarHeight);
    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
      window.removeEventListener("scroll", updateNavbarHeight);
    };
  }, []);

  return {
    navbarTop,
    scrolled,
    navbarHeight,
    navRef,
  };
};

export default useNavbar;
