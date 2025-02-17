import React, {  useState } from 'react';
import { motion } from "framer-motion";
import AfterIMG from '../images/photo_2025-02-18_01-00-38.jpg';
import BeforeIMG from '../images/photo_2025-02-18_01-00-42.jpg'



export const BeforeAfterHover = () => {
  const [hoverSide, setHoverSide] = useState(null);

  return (
    <div className="relative w-full h-[400px] flex overflow-hidden rounded-2xl shadow-lg">
      <motion.div
        className="w-1/2 h-full bg-cover bg-center transition-all"
        style={{ backgroundImage: `url(${BeforeIMG})` }}
        animate={{ scale: hoverSide === "left" ? 1.1 : 1, opacity: hoverSide === "right" ? 0.8 : 1 }}
        onMouseEnter={() => setHoverSide("left")}
        onMouseLeave={() => setHoverSide(null)}
      />
      
      <motion.div
        className="w-1/2 h-full bg-cover bg-center transition-all"
        style={{ backgroundImage: `url(${AfterIMG})` }}
        animate={{ scale: hoverSide === "right" ? 1.1 : 1, opacity: hoverSide === "left" ? 0.8 : 1 }}
        onMouseEnter={() => setHoverSide("right")}
        onMouseLeave={() => setHoverSide(null)}
      />
    </div>
  );
};

