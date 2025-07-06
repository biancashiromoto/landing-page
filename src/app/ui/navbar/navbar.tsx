"use client";

import Image from "next/image";
import LogoFiap from "@/assets/svg/logo-fiap.svg";
import styles from "./navbar.module.scss";
import ScrollProgressBar from "../progress-bar/progress-bar";
import useNavbar from "./useNavbar";

export default function Navbar() {
  const { navbarTop, scrolled, navbarHeight, navRef } = useNavbar();

  return (
    <nav
      ref={navRef}
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      style={{ top: `${navbarTop}px` }}
      role="navigation"
      aria-label="Barra de navegação"
    >
      <Image
        src={LogoFiap}
        alt="Logo da FIAP"
        className={styles.logoFiap}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
      <ScrollProgressBar navbarTop={navbarTop} navbarHeight={navbarHeight} />
    </nav>
  );
}
