"use client";
import styles from "./question.module.scss";

import { QuestionType } from "../questions";

type QuestionProps = QuestionType & {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
};

const Question = ({
  question,
  answer,
  isOpen,
  onClick,
  onMouseEnter,
}: QuestionProps) => {
  return (
    <div
      className={`${styles.question} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
