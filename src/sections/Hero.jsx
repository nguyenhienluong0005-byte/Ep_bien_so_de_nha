import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://i.postimg.cc/kGvzPGJT/18.jpg",
  "https://i.postimg.cc/KjDwhjGH/19.jpg",
  "https://i.postimg.cc/cCB2GCxP/20.jpg",
  "https://i.postimg.cc/SRh3PCh6/14.jpg",
  "https://i.postimg.cc/qRnWQQWW/2.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(introTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Intro Fullscreen */}
     {/* Intro Fullscreen */}
<AnimatePresence>
  {showIntro && (
    <motion.div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 opacity-90" />

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CONTENT WRAPPER (giới hạn để desktop không bị to) */}
      <motion.div
        className="relative z-10 w-full max-w-3xl mx-auto text-center px-6"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
      >
        {/* BIỂN SỐ (giữ vừa, không phình desktop) */}
        <motion.div
          className="mb-7 flex justify-center"
          initial={{ rotateY: -180, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.95, type: "spring", stiffness: 90 }}
        >
          <div
            className="
              relative overflow-hidden rounded-2xl shadow-2xl
              w-[240px] h-[110px]
              sm:w-[280px] sm:h-[130px]
              lg:w-[320px] lg:h-[150px]
            "
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-25"
              animate={{ x: ["-120%", "220%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            />

            <img
              src="https://i.postimg.cc/hjWt47QJ/z7419092220059-8e548231fe77328d9a53375c85798986.jpg"
              alt="Biển số xe"
              className="w-full h-full object-contain select-none"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* TITLE (giảm size desktop) */}
        <motion.h1
          className="
            font-black text-white tracking-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            mb-3
          "
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{ textShadow: "0 8px 30px rgba(0,0,0,0.45)" }}
        >
          ÉP BIỂN SỐ XE
        </motion.h1>

        {/* SUBTITLE (nhỏ lại, gọn premium) */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-4"
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="h-[2px] w-10 sm:w-14 bg-white/80 rounded" />
          <p className="text-base sm:text-lg md:text-xl font-bold text-yellow-200 tracking-wide">
            CHUYÊN NGHIỆP • UY TÍN
          </p>
          <div className="h-[2px] w-10 sm:w-14 bg-white/80 rounded" />
        </motion.div>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-white/85 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          Chuẩn form • Phẳng đẹp • Bền theo thời gian
        </motion.p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Main Hero - CHỈ CÓ ẢNH VÀ KHUNG */}
<section className="relative min-h-screen bg-black overflow-hidden">
  {/* BACKGROUND IMAGE */}
  <motion.div
    className="absolute inset-0"
    initial={{ scale: 1.05, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.4, ease: "easeOut" }}
    style={{
      backgroundImage: `url(${images[0]})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

  {/* CONTENT */}
  <div className="relative z-10 min-h-screen flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-xl"
      >
        <h1 className="text-white text-2xl md:text-5xl font-medium tracking-tight">
          Ép biển số ĐỆ NHẤT
        </h1>

        <p className="mt-4 text-lg text-white/80 leading-relaxed">
          Chuẩn form. Phẳng đẹp. Bền theo thời gian.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full">
            Xem quy trình
          </button>
          <button className="px-6 py-3 border border-white/40 text-white text-sm rounded-full">
            Liên hệ
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</section>



    </>
  );
}

export default Hero;