import React, { useEffect, useState } from "react";
import CourseItem from "../course-item/course-item";
import { Course, SubjectType } from "../subjects";
import styles from "./courses-desktop.module.scss";

type CoursesDesktopProps = {
  selectedSubject: SubjectType | null;
};

const CoursesDesktop = ({ selectedSubject }: CoursesDesktopProps) => {
  const [displayedSubject, setDisplayedSubject] = useState<SubjectType | null>(
    selectedSubject
  );
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out" | "">(
    selectedSubject ? "fade-in" : ""
  );

  useEffect(() => {
    if (!selectedSubject) {
      setFadeState("fade-out");
      setTimeout(() => {
        setDisplayedSubject(null);
        setFadeState("");
      }, 500);
      return;
    }
    if (displayedSubject && selectedSubject.id !== displayedSubject.id) {
      setFadeState("fade-out");
      setTimeout(() => {
        setDisplayedSubject(selectedSubject);
        setFadeState("fade-in");
      }, 500);
    } else if (!displayedSubject && selectedSubject) {
      setDisplayedSubject(selectedSubject);
      setFadeState("fade-in");
    }
  }, [selectedSubject, displayedSubject]);

  return (
    <div
      key={displayedSubject?.id ?? "empty"}
      className={
        `${styles["course-content"]} ` + (fadeState ? styles[fadeState] : "")
      }
    >
      <h3>{displayedSubject?.name}</h3>
      {displayedSubject?.items.map((item: Course) => (
        <CourseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CoursesDesktop;
