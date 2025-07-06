"use client";

import { Course, CourseArea as CourseAreaType } from "@/text";
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
      <div className={styles["course-area-header"]}>
        <label>
          <h3 className={styles["course-area-title"]}>
            {courseArea.area.toUpperCase()}
          </h3>
          <input
            type="checkbox"
            aria-label={isOpen ? "Expandir" : "Recolher"}
            onChange={toggleOpenAccordion}
          />
          <span
            className={`${styles["custom-checkbox"]} ${
              isOpen ? styles["checked"] : ""
            }`}
          ></span>
        </label>
      </div>
      <div className={styles["course-area-content"]}>
        {courseArea.items.map((item: Course) => (
          <CourseItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CourseArea;
