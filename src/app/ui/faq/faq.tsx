"use client";

import { useState } from "react";
import styles from "./faq.module.scss";
import { questions, QuestionType } from "./questions";
import Question from "./question/question";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faq}>
      <div className={styles["faq-header"]}>
        <h2>FAQ</h2>
        <p className={styles["subtitle"]}>Dúvidas Frequentes</p>
      </div>
      <div className={styles["faq-questions"]}>
        {questions.map((question: QuestionType, index: number) => (
          <Question
            key={index}
            {...question}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            onMouseEnter={() => setOpenIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
