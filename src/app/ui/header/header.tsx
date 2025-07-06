"use client";

import { useCustomContext } from "@/context/Provider";
import styles from "./header.module.scss";

export default function Header() {
  const { screenWidth } = useCustomContext();

  if (!screenWidth) return;

  const isTabletOrSmaller = screenWidth < 768;

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>A Melhor Faculdade</h1>
        <br />
        <h1>de Tecnologia</h1>
      </div>
      {isTabletOrSmaller ? (
        <>
          <span>
            SOB
            <br />
            RE
          </span>
        </>
      ) : (
        <span>SOBRE</span>
      )}
    </header>
  );
}
