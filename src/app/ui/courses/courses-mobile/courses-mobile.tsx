"use client";

import { subjects, SubjectType } from "../subjects";
import SubjectList from "../subject-list/subject-list";

const CoursesMobile = () => {
  return (
    <div>
      {subjects.map((course: SubjectType) => {
        return <SubjectList key={course.id} subject={course} />;
      })}
    </div>
  );
};

export default CoursesMobile;
