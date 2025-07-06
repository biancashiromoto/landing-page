"use client";

import SubjectNavbar from "./subject-navbar/subject-navbar";
import CoursesDesktop from "./courses-desktop/courses-desktop";
import CoursesMobile from "./courses-mobile/courses-mobile";
import styles from "./courses.module.scss";
import useCourses from "./useCourses";

const Courses = () => {
  const {
    screenWidth,
    handleSelectSubject,
    selectedSubject,
    isMobileOrTablet,
  } = useCourses();

  if (!screenWidth) return;

  return (
    <div className={styles.courses}>
      <>
        <div className={styles.header}>
          <h2>Cursos</h2>
          <p className={styles["subtitle"]}>Cursos de curta duração</p>
        </div>
        {!isMobileOrTablet && (
          <SubjectNavbar
            selectedSubject={selectedSubject}
            handleSelectSubject={handleSelectSubject}
          />
        )}
      </>
      {isMobileOrTablet ? (
        <CoursesMobile />
      ) : (
        <CoursesDesktop selectedSubject={selectedSubject} />
      )}
    </div>
  );
};

export default Courses;
