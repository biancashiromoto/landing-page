"use client";

import { Course } from "@/text";
import styles from "./course-item.module.scss";

const CourseItem = (course: Course) => {
  return (
    <div className={styles["course-item"]} key={course.id}>
      <p className={styles["course-type"]}>
        {course.type.join(" • ").toUpperCase()}
      </p>
      <p className={styles["course-name"]}>{course.name}</p>
    </div>
  );
};

export default CourseItem;
