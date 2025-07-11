"use client";

import styles from "./intro.module.scss";
import IntroImage from "@/assets/img/intro.png";
import Image from "next/image";
import useIntro from "./useIntro";

const Intro = () => {
  const { isVisible, isScrolling, imageRef, screenWidth } = useIntro();

  const text1 = "CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO";
  const text2 = "TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.";
  const text3 = "CONHECIMENTO • SKILLS";
  const text4 = "MUITO. MUITO ALÉM DOS TUTORIAIS";

  return (
    <div className={styles.intro}>
      <div className={styles["scroll-container"]}>
        <h2 className={styles.left}>
          {`${text1} • ${text1} • ${text1} • ${text1} • ${text1} • ${text1}`}
        </h2>
      </div>
      <div className={styles["scroll-container"]}>
        <h2 className={styles.right}>
          {`${text2} • ${text2} • ${text2} • ${text2} • ${text2} • ${text2}`}
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
                data-text={`${text3} • ${text3} • ${text3} • ${text3} • ${text3} • ${text3}`}
              >
                {`${text3} • ${text3} • ${text3} • ${text3} • ${text3} • ${text3}`}
              </h3>
            </div>
            <div className={styles["scroll-container"]}>
              <h3
                className={`${styles.right} ${isScrolling ? styles.stop : ""}`}
                data-text={`${text4} • ${text4} • ${text4} • ${text4} • ${text4} • ${text4}`}
              >
                {`${text4} • ${text4} • ${text4} • ${text4} • ${text4} • ${text4}`}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
