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
  const [displayedSubject, setDisplayedSubject] = useState<SubjectType | null>(
    selectedSubject
  );
  const [fadeState, setFadeState] = useState<"fade-in" | "fade-out" | "">(
    selectedSubject ? "fade-in" : ""
  );
  const isMobileOrTablet = screenWidth <= 1280;

  const handleSelectSubject = (subject: SubjectType["id"]) => {
    const foundSubject = subjects.find((item) => item.id === subject) ?? null;
    setSelectedSubject(foundSubject);
  };

  useEffect(() => {
    if (screenWidth > 1024 && !selectedSubject) {
      setSelectedSubject(subjects[0]);
    }
  }, [screenWidth, selectedSubject]);

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

  return {
    handleSelectSubject,
    screenWidth,
    selectedSubject,
    isMobileOrTablet,
    displayedSubject,
    fadeState,
  };
};

export default useCourses;
