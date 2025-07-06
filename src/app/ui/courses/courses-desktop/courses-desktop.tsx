import CourseItem from "../course-item/course-item";
import { Course, SubjectType } from "../subjects";
import styles from "./courses-desktop.module.scss";

type CoursesDesktopProps = {
  selectedSubject: SubjectType | null;
};

const CoursesDesktop = ({ selectedSubject }: CoursesDesktopProps) => {
  return (
    <div
      key={selectedSubject?.id ?? "empty"}
      className={
        selectedSubject
          ? `${styles["course-content"]} ${styles.show}`
          : styles["course-content"]
      }
    >
      <h3>{selectedSubject?.subject}</h3>
      {selectedSubject?.items.map((item: Course) => (
        <CourseItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CoursesDesktop;
