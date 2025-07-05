"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  screenWidth: number;
};

const Context = createContext({} as ContextType);

export function Provider({ children }: { children: ReactNode }) {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Context.Provider value={{ screenWidth }}>{children}</Context.Provider>
  );
}

export function useCustomContext() {
  const context = useContext(Context);
  return context;
}
