"use client";

import styles from "./water.module.scss";
import { useWaterAnimation } from "./useWaterAnimation";

const Water = () => {
  const { canvasRef } = useWaterAnimation();

  return (
    <div className={styles.water}>
      <canvas ref={canvasRef} className={styles.canvas} id="canvas" />
    </div>
  );
};

export default Water;
