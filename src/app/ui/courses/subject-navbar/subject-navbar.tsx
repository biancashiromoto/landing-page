"use client";

import { subjects, SubjectType } from "../subjects";
import styles from "./subject-navbar.module.scss";

type SubjectNavbarProps = {
  selectedSubject: SubjectType | null;
  handleSelectSubject: (subjectId: SubjectType["id"]) => void;
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
          onClick={() => handleSelectSubject(course.id)}
          className={selectedSubject?.id === course.id ? styles.selected : ""}
        >
          {course.name.toUpperCase()}
        </p>
      ))}
    </nav>
  );
};

export default SubjectNavbar;
