import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://i.postimg.cc/fyKcnM56/1.jpg",
  "https://i.postimg.cc/vTzrFG3y/2.jpg",
  "https://i.postimg.cc/hvrLWKpF/3.jpg",
  "https://i.postimg.cc/0jfYR9cs/4.jpg",
  "https://i.postimg.cc/dQmmT9vh/5.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="relative 
          h-[45vh] md:h-[55vh] 
          w-[94%] md:w-[88%] 
          overflow-hidden rounded-2xl shadow-xl">

        {/* Slide transition */}
        <AnimatePresence>
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[index]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Shadow bottom for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/35 to-transparent"></div>
      </div>
    </section>
  );
}

export default Hero;
