"use client";

import { FC } from "react";
import styles from "./progress-bar.module.scss";
import useProgressBar, { UseProgressBar } from "./useProgressBar";

export interface ScrollProgressBarProps {
  navbarTop: number;
  navbarHeight: number;
}

const ScrollProgressBar: FC<ScrollProgressBarProps> = ({
  navbarTop,
  navbarHeight,
}) => {
  const { scrollProgress }: UseProgressBar = useProgressBar();

  const barStyle = {
    top: `${navbarHeight + navbarTop}px`,
  } as React.CSSProperties;
  const fillStyle = {
    width: `${scrollProgress}%`,
  } as React.CSSProperties;

  return (
    <div className={styles.progressBar} style={barStyle}>
      <div className={styles.progressBarFill} style={fillStyle} />
    </div>
  );
};

export default ScrollProgressBar;
