import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Components/ui/button";
import { Carousel } from "../Components/CarouselComponents";
import { ResizableImages } from "../Components/ResizableImages";
import { Services } from "../Components/Service";
import { AboutUs } from "../Components/AboutUs";

export const Home = () => {
  return (
    <div className="min-h-screen bg-blue-50">
     <Carousel/>
          <ResizableImages/>
      <Services />
      <AboutUs/>
      </div>
  );
};

