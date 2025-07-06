"use client";

import styles from "./intro.module.scss";
import IntroImage from "@/assets/img/intro.png";
import Image from "next/image";
import useIntro from "./useIntro";

const Intro = () => {
  const { isVisible, isScrolling, imageRef, screenWidth } = useIntro();

  return (
    <div className={styles.intro}>
      <div className={styles["scroll-container"]}>
        <h2 className={styles.left}>
          CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO&nbsp;CURSOS E IMERSÕES.
          UMA NOVA CULTURA DE MERCADO
        </h2>
      </div>
      <div className={styles["scroll-container"]}>
        <h2 className={styles.right}>
          TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.&nbsp;TECNOLOGIA,
          INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
        </h2>
      </div>

      {screenWidth >= 1024 && (
        <div
          ref={imageRef}
          className={`${styles["image-container"]} ${
            isVisible ? styles.visible : ""
          }`}
        >
          <Image src={IntroImage} alt="Intro Image" className={styles.image} />

          <div className={styles["text-container"]}>
            <div className={styles["scroll-container"]}>
              <h3
                className={`${styles.left} ${isScrolling ? styles.stop : ""}`}
                data-text="CONHECIMENTO • SKILLS"
              >
                CONHECIMENTO • SKILLS
              </h3>
            </div>
            <div className={styles["scroll-container"]}>
              <h3
                className={`${styles.right} ${isScrolling ? styles.stop : ""}`}
                data-text="MUITO ALÉM DOS TUTORIAIS"
              >
                MUITO ALÉM DOS TUTORIAIS
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
