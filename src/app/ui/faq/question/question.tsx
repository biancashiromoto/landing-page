"use client";
import styles from "./question.module.scss";

import { QuestionType } from "../questions";

type QuestionProps = QuestionType & {
  isOpen: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Question = ({
  question,
  answer,
  isOpen,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: QuestionProps) => {
  return (
    <div
      className={`${styles.question} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <summary>{question}</summary>
      <p>{answer}</p>
    </div>
  );
};

export default Question;
