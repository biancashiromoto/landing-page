"use client";

import { Course, SubjectType } from "@/app/ui/courses/subjects";
import CourseItem from "../course-item/course-item";
import styles from "./subject-list.module.scss";
import { useState } from "react";

type SubjectListProps = {
  subject: SubjectType;
};

const SubjectList = (props: SubjectListProps) => {
  const { subject } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`${styles["subject-list"]} ${isOpen ? styles["open"] : ""}`}
    >
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>{subject.subject.toUpperCase()}</h3>
        <button
          type="button"
          onClick={toggleOpenAccordion}
          aria-label={isOpen ? "Expandir" : "Recolher"}
          className={!isOpen ? styles["open"] : ""}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      <div className={styles["content"]}>
        {subject.items.map((item: Course) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SubjectList;
