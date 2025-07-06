"use client";

import { subjects, SubjectType } from "../subjects";
import styles from "./subject-navbar.module.scss";

type SubjectNavbarProps = {
  selectedSubject: SubjectType | null;
  handleSelectSubject: (subject: SubjectType["subject"]) => void;
};

const SubjectNavbar = ({
  selectedSubject,
  handleSelectSubject,
}: SubjectNavbarProps) => {
  return (
    <nav className={styles["subject-navbar"]}>
      {subjects.map((course: SubjectType) => (
        <p
          key={course.id}
          onClick={() => handleSelectSubject(course.subject)}
          className={
            selectedSubject?.subject === course.subject ? styles.selected : ""
          }
        >
          {course.subject.toUpperCase()}
        </p>
      ))}
    </nav>
  );
};

export default SubjectNavbar;
