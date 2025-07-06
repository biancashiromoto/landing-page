"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import { questions, QuestionType } from "./questions";
import Question from "./question/question";

const isTouchDevice =
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    (window.matchMedia && window.matchMedia("(pointer: coarse)").matches));

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faq}>
      <div className={styles["header"]}>
        <h2>FAQ</h2>
        <p className={styles["subtitle"]}>Dúvidas Frequentes</p>
      </div>
      <div className={styles["questions"]}>
        {questions.map((question: QuestionType, index: number) => (
          <Question
            key={index}
            {...question}
            isOpen={openIndex === index}
            onClick={() =>
              isTouchDevice && setOpenIndex(openIndex === index ? null : index)
            }
            onMouseEnter={() => !isTouchDevice && setOpenIndex(index)}
            onMouseLeave={() => !isTouchDevice && setOpenIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
