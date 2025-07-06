"use client";

import { Course, CourseAreaType } from "@/app/ui/courses/areas";
import CourseItem from "../course-item/course-item";
import styles from "./course-area.module.scss";
import { useState } from "react";

type CourseAreaProps = {
  courseArea: CourseAreaType;
};

const CourseArea = (props: CourseAreaProps) => {
  const { courseArea } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${styles["course-area"]} ${isOpen ? styles["open"] : ""}`}>
      <div className={styles["header"]}>
        <h3 className={styles["title"]}>{courseArea.area.toUpperCase()}</h3>
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
        {courseArea.items.map((item: Course) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CourseArea;
