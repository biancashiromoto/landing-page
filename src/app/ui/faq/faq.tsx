"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import { questions, QuestionType } from "./questions";
import Question from "./question/question";
import { useCustomContext } from "@/context/Provider";

const FAQ = () => {
  const { screenWidth } = useCustomContext();
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
              screenWidth <= 768 &&
              setOpenIndex(openIndex === index ? null : index)
            }
            onMouseEnter={() => screenWidth > 768 && setOpenIndex(index)}
            onMouseLeave={() => screenWidth > 768 && setOpenIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
