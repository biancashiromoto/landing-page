import { useCustomContext } from "@/context/Provider";
import { useEffect, useState } from "react";
import {
  CourseAreaType as CourseAreaType,
  areas,
} from "@/app/ui/courses/areas";

const useCourses = () => {
  const { screenWidth } = useCustomContext();
  const [selectedArea, setSelectedArea] = useState<CourseAreaType | null>(null);

  const handleAreaClick = (area: CourseAreaType["area"]) => {
    const foundArea = areas.find((course) => course.area === area) || null;
    setSelectedArea(foundArea);
  };

  useEffect(() => {
    if (screenWidth > 1024 && !selectedArea) {
      setSelectedArea(areas[0]);
    }
  }, [screenWidth, selectedArea]);

  return {
    handleAreaClick,
    screenWidth,
    selectedArea,
  };
};

export default useCourses;
