"use client";

import { Course } from "@/app/ui/courses/subjects";
import styles from "./course-item.module.scss";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans",
});

const CourseItem = (course: Course) => {
  return (
    <div className={styles["course-item"]} key={course.id}>
      <p className={`${styles["course-type"]} ${ptSans.className}`}>
        {course.type.join(" • ").toUpperCase()}
      </p>
      <p className={styles["course-name"]}>{course.name}</p>
    </div>
  );
};

export default CourseItem;
