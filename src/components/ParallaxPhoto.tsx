import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import mahmoodCutout from "@/assets/mahmood-cutout.png";

const ParallaxPhoto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgDataRef = useRef<ImageData | null>(null);
  const imgSizeRef = useRef({ w: 0, h: 0 });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Load image into an offscreen canvas to read alpha values
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = mahmoodCutout;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      imgDataRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);
      imgSizeRef.current = { w: canvas.width, h: canvas.height };
      canvasRef.current = canvas;
    };
  }, []);

  const isOverBody = useCallback((clientX: number, clientY: number): boolean => {
    if (!containerRef.current || !imgDataRef.current) return false;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (clientX - rect.left) / rect.width;
    const ny = (clientY - rect.top) / rect.height;
    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return false;
    const px = Math.floor(nx * imgSizeRef.current.w);
    const py = Math.floor(ny * imgSizeRef.current.h);
    const idx = (py * imgSizeRef.current.w + px) * 4;
    const alpha = imgDataRef.current.data[idx + 3];
    return alpha > 30; // non-transparent
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    if (!isOverBody(e.clientX, e.clientY)) {
      setRotateX(0);
      setRotateY(0);
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotateY(x * 6);
    setRotateX(-y * 4);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[400px] lg:h-[520px]"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateX, rotateY }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={mahmoodCutout}
          alt="Mahmood Sultan, UX/UI Designer and Web Developer"
          width={400}
          height={520}
          fetchPriority="high"
          decoding="async"
          className="relative z-10 w-full h-full object-cover object-top drop-shadow-2xl"
          style={{ transform: "translateZ(40px)" }}
        />
      </motion.div>
    </div>
  );
};

export default ParallaxPhoto;
