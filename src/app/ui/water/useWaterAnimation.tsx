import { useEffect, useRef, useState } from "react";

export const useWaterAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 192;

  const currentFrame = (index: number) => {
    return `/img/water/water_${index.toString().padStart(3, "0")}.jpg`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const drawFrameLocal = (frameIndex: number) => {
      const img = imagesRef.current[frameIndex];
      if (img && img.complete) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const preloadImagesLocal = async () => {
      const images: HTMLImageElement[] = [];

      const promises = Array.from({ length: frameCount }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          const imagePath = currentFrame(i);
          img.src = imagePath;

          img.onload = () => resolve(img);
          img.onerror = () => reject(new Error(`Failed to load: ${imagePath}`));

          images.push(img);
        });
      });

      try {
        await Promise.all(promises);
        imagesRef.current = images;
        setIsLoaded(true);
        drawFrameLocal(0);
      } catch (error) {
        console.error("Error loading water animation images:", error);
      }
    };

    const handleScrollLocal = () => {
      if (!isLoaded) return;

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const maxScrollTop = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = Math.max(0, Math.min(scrollTop / maxScrollTop, 1));
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(scrollFraction * frameCount)
      );

      drawFrameLocal(frameIndex);
    };

    const resizeCanvasLocal = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      if (isLoaded && imagesRef.current.length > 0) {
        drawFrameLocal(0);
      }
    };

    resizeCanvasLocal();
    preloadImagesLocal();

    window.addEventListener("scroll", handleScrollLocal, { passive: true });
    window.addEventListener("resize", resizeCanvasLocal);

    return () => {
      window.removeEventListener("scroll", handleScrollLocal);
      window.removeEventListener("resize", resizeCanvasLocal);
    };
  }, [isLoaded]);

  return {
    canvasRef,
    isLoaded,
  };
};
