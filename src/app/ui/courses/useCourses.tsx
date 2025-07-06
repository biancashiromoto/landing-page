import { useCustomContext } from "@/context/Provider";
import { useEffect, useState } from "react";
import {
  SubjectType as SubjectType,
  subjects,
} from "@/app/ui/courses/subjects";

const useCourses = () => {
  const { screenWidth } = useCustomContext();
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | null>(
    null
  );
  const isMobileOrTablet = screenWidth <= 1280;

  const handleSelectSubject = (subject: SubjectType["subject"]) => {
    const foundSubject =
      subjects.find((course) => course.subject === subject) ?? null;
    setSelectedSubject(foundSubject);
  };

  useEffect(() => {
    if (screenWidth > 1024 && !selectedSubject) {
      setSelectedSubject(subjects[0]);
    }
  }, [screenWidth, selectedSubject]);

  return {
    handleSelectSubject,
    screenWidth,
    selectedSubject,
    isMobileOrTablet,
  };
};

export default useCourses;
