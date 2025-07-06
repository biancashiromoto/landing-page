"use client";

import { CourseArea as CourseAreaType, courses, Course } from "@/text";
import styles from "./courses.module.scss";
import { useCustomContext } from "@/context/Provider";
import { useState } from "react";
import CourseArea from "./course-area/course-area";
import CourseItem from "./course-item/course-item";

const Courses = () => {
  const { screenWidth } = useCustomContext();
  const [selectedArea, setSelectedArea] = useState<CourseAreaType | null>(null);

  const handleAreaClick = (area: CourseAreaType["area"]) => {
    const foundArea = courses.find((course) => course.area === area) || null;
    setSelectedArea(foundArea);
  };

  if (screenWidth > 768) {
    return (
      <>
        <div className={styles.courses}>
          <div>
            <h2>Cursos</h2>
            <p className={styles["subtitle"]}>Cursos de curta duração</p>
          </div>
          <nav className={styles["course-areas"]}>
            {courses.map((course: CourseAreaType) => (
              <p
                key={course.id}
                onClick={() => handleAreaClick(course.area)}
                className={
                  selectedArea?.area === course.area ? styles.selected : ""
                }
              >
                {course.area.toUpperCase()}
              </p>
            ))}
          </nav>
          <div
            key={selectedArea?.id || "empty"}
            className={
              selectedArea
                ? `${styles["course-content"]} ${styles.show}`
                : styles["course-content"]
            }
          >
            <h3>{selectedArea?.area}</h3>
            {selectedArea?.items.map((item: Course) => (
              <CourseItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.courses}>
      <h2>Cursos</h2>
      <p className={styles["subtitle"]}>Cursos de curta duração</p>
      <div>
        {courses.map((course: CourseAreaType) => {
          return <CourseArea key={course.id} courseArea={course} />;
        })}
      </div>
    </div>
  );
};

export default Courses;
