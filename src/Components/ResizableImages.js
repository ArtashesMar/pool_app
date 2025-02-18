import React, { useState } from "react";
import { motion } from "framer-motion";
import imageA from "../images/photo_2025-02-18_01-00-42.jpg"
import imageB from "../images/photo_2025-02-18_01-00-38.jpg";
import "../Styles/ExpandingBoxes.css"; // Import the CSS file




export const ResizableImages = () => {
   const [hoveredBox, setHoveredBox] = useState(null);

  return (
    <div className="flex w-full expanding-container ">
      {/* Box A */}
      <motion.div
        className="h-full overflow-hidden relative"
        initial={{ width: "50%" }}
        animate={{ width: hoveredBox === "A" ? "70%" : hoveredBox === "B" ? "30%" : "50%" }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setHoveredBox("A")}
        onMouseLeave={() => setHoveredBox(null)}
      >
        <img src={imageA} alt="Box A" className="w-full h-full object-cover box " />
      </motion.div>

      {/* Box B */}
      <motion.div
        className="h-full overflow-hidden relative"
        initial={{ width: "50%" }}
        animate={{ width: hoveredBox === "B" ? "70%" : hoveredBox === "A" ? "30%" : "50%" }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setHoveredBox("B")}
        onMouseLeave={() => setHoveredBox(null)}
      >
        <img src={imageB} alt="Box B" className="w-full h-full object-cover box " />
      </motion.div>
    </div>
  
  );
};

