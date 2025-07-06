import { useCustomContext } from "@/context/Provider";
import { useEffect, useState } from "react";
import { CourseArea as CourseAreaType, courses } from "@/text";

const useCourses = () => {
  const { screenWidth } = useCustomContext();
  const [selectedArea, setSelectedArea] = useState<CourseAreaType | null>(null);

  const handleAreaClick = (area: CourseAreaType["area"]) => {
    const foundArea = courses.find((course) => course.area === area) || null;
    setSelectedArea(foundArea);
  };

  useEffect(() => {
    if (screenWidth > 1024 && !selectedArea) {
      setSelectedArea(courses[0]);
    }
  }, [screenWidth, selectedArea]);

  return {
    handleAreaClick,
    screenWidth,
    selectedArea,
  };
};

export default useCourses;
