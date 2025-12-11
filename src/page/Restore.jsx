import { motion, useScroll, useTransform } from "framer-motion";
import { FaCogs, FaBolt, FaAward, FaHammer, FaCheckCircle, FaStar, FaShieldAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Restore12StepsLight() {
  const heroImages = [
    "/cuahang.jpg",
    "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    "https://i.postimg.cc/vZbYXjqW/61.jpg",
    "https://i.postimg.cc/br90nWVY/30.jpg",
    "https://i.postimg.cc/1zSdn38C/quan.jpg",
  ];

  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const steps = [
    { num: 1, title: "Tiếp nhận & tư vấn", desc: "Trao đổi với khách hàng, đánh giá tình trạng biển cũ, chọn giải pháp phục hồi tối ưu phù hợp kiểu xe & ngân sách.", icon: FaCogs },
    { num: 2, title: "Khò đốt biển số – Làm sạch nền", desc: "Dùng đèn khò nhiệt cao để bóc lớp phản quang cũ, loại bỏ bụi, dầu và lớp oxi hóa giúp nền kim loại sáng bóng.", icon: FaBolt },
    { num: 3, title: "Loại bỏ phản quang cũ đã hư", desc: "Làm sạch toàn bộ lớp phản quang bong tróc, đảm bảo bề mặt phẳng và sẵn sàng cho lớp mới.", icon: FaHammer },
    { num: 4, title: "Làm phản quang mới", desc: "Phủ lớp phản quang tiêu chuẩn ISO, tăng độ sáng gấp 3 lần, phản chiếu cực mạnh trong đêm và trời mưa.", icon: FaStar },
    { num: 5, title: "Lăn sơn cho biển số", desc: "Sơn chuyên dụng chống phai, giữ màu bền, sắc nét và chống tia UV.", icon: FaCogs },
    { num: 6, title: "Vệ sinh & kiểm tra – cắt form", desc: "Cắt chuẩn CNC theo kích thước Bộ GTVT, đảm bảo góc cạnh tinh tế và cân đối.", icon: FaShieldAlt },
    { num: 7, title: "Ép thủy lực", desc: "Ép bằng máy thủy lực Titan 3mm, áp suất cao – không bọt, không cong, chuẩn tuyệt đối.", icon: FaBolt },
    { num: 8, title: "Chà nhám lần 1 – Tạo độ bám", desc: "Chà nhám nhẹ tạo độ nhám giúp keo & phản quang bám chắc.", icon: FaHammer },
    { num: 9, title: "Chà nhám lần 2 – Làm mịn bề mặt", desc: "Làm phẳng toàn bộ bề mặt, loại bỏ bụi và tạp chất – sẵn sàng cho lớp sơn cuối.", icon: FaHammer },
    { num: 10, title: "Chà nhám lần 3 – Hoàn thiện", desc: "Kiểm tra và xử lý lần cuối, đảm bảo bề mặt sáng, mịn, không xước.", icon: FaAward },
    { num: 11, title: "Máy đánh bóng bề mặt", desc: "Đánh bóng công nghiệp, giúp bề mặt phản quang sáng bóng như gương.", icon: FaStar },
    { num: 12, title: "Hoàn thiện & bàn giao", desc: "Lắp viền inox, dán tem chống giả, kiểm tra và bàn giao cho khách – kèm bảo hành 24 tháng.", icon: FaCheckCircle },
  ];

  return (
    <section ref={containerRef} className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-amber-950 text-gray-100 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/5 rounded-full blur-[200px]" />
      </div>

      {/* 🖼 Hero Slider - Luxury Version */}
      <motion.div 
        className="relative h-[85vh] overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ scale: heroScale }}
        >
          {heroImages.map((src, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: i === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <img
                src={src}
                alt={`Ảnh cửa hàng ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900" />
            </motion.div>
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 max-w-5xl">
            {/* Premium Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-400/30 rounded-full px-6 py-3 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <FaStar className="text-amber-400 text-xl" />
               <FaStar className="text-amber-400 text-xl" />
                <FaStar className="text-amber-400 text-xl" />
                 <FaStar className="text-amber-400 text-xl" />
              <FaStar className="text-amber-400 text-xl" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent drop-shadow-2xl">
                QUY TRÌNH PHỤC HỒI
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">ĐẲNG CẤP THƯỢNG LƯU</span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
              <p className="text-xl md:text-2xl text-amber-300 font-light tracking-wide">
                Ép mới • Sáng bóng • Chuẩn quốc tế ISO Function
              </p>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Nơi mỗi tấm biển số được chăm chút tỉ mỉ qua 12 công đoạn hoàn hảo
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            >
              <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  className="w-1.5 h-3 bg-amber-400 rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-500 rounded-full ${
                i === index 
                  ? 'w-12 h-2 bg-amber-400' 
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              12 BƯỚC PHỤC HỒI
            </span>
            <br />
            <span className="text-white">CHUẨN XƯỞNG ĐỆ NHẤT</span>
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <FaStar className="text-amber-400 text-2xl" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed">
            Tại <span className="font-bold text-amber-400">ÉP BIỂN SỐ ĐỆ NHÂT</span>, mỗi tấm biển được phục hồi qua{" "}
            <span className="font-bold text-white">12 công đoạn chuẩn kỹ thuật</span>, từ khâu làm sạch, 
            ép phản quang đến kiểm tra chi tiết. Kết quả là sản phẩm sáng bóng, bền bỉ và đẳng cấp.
          </p>
        </motion.div>

        {/* Steps Grid - Luxury Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 hover:border-amber-400/40 transition-all duration-500 h-full">
                  {/* Step Number Badge */}
                  <div className="absolute -top-5 -left-5 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-amber-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <span className="text-slate-900 font-black text-xl">{step.num}</span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-6 mt-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors duration-500">
                      <Icon className="text-2xl text-amber-400" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-amber-300 mb-4 leading-tight group-hover:text-amber-200 transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-base group-hover:text-gray-300 transition-colors duration-300">
                    {step.desc}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-tl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Store Image - Premium Showcase */}
        <motion.div
          className="relative rounded-3xl overflow-hidden mb-32 group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 opacity-50 blur-2xl group-hover:opacity-75 transition-all duration-700" />
          
          <div className="relative border-4 border-amber-400/30 rounded-3xl overflow-hidden">
            <img
              src="/cuahang.jpg"
              alt="Cửa hàng ÉP BIỂN SỐ ĐỆ NHẤT"
              className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            
            {/* Location Badge */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
              <div className="bg-gradient-to-r from-amber-500/95 to-yellow-500/95 backdrop-blur-md rounded-2xl px-8 py-5 shadow-2xl border border-amber-300/50">
                <p className="text-slate-900 text-center font-bold text-lg md:text-xl">
                  📍 402B Lê Văn Lương, Tân Hưng, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commitment Section - Ultra Premium */}
        <motion.div
          className="relative mb-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border-2 border-amber-400/30 rounded-3xl py-20 px-8 md:px-16">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                backgroundSize: '40px 40px',
                color: '#fbbf24'
              }} />
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <FaAward className="text-6xl text-amber-400 mx-auto mb-6" />
                <h3 className="text-4xl md:text-5xl font-black mb-4">
                  <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                    CAM KẾT VÀNG
                  </span>
                </h3>
                <p className="text-2xl text-amber-400 font-light">
                  Uy Tín Hàng Đầu Biên Hòa
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: FaCheckCircle, text: "Biển ép chuẩn ISO – phản quang bền 5 năm" },
                  { icon: FaBolt, text: "Máy ép Titan thủy lực – bề mặt phẳng tuyệt đối" },
                  { icon: FaHammer, text: "Gia công tỉ mỉ từng chi tiết – không cong, không nứt" },
                  { icon: FaAward, text: "Bảo hành 24 tháng – lỗi đổi mới 1 đổi 1" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      className="flex items-center gap-4 p-6 bg-slate-900/50 rounded-2xl border border-amber-500/20 hover:border-amber-400/40 hover:bg-slate-900/70 transition-all duration-300 group"
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                        <Icon className="text-3xl text-amber-400" />
                      </div>
                      <p className="text-gray-200 font-medium text-lg flex-1">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing Quote - Elegant */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-amber-500/5 rounded-full blur-2xl" />
            <div className="relative">
              <svg className="w-12 h-12 text-amber-400/30 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed mb-6">
                Phục hồi không chỉ là làm mới — mà là mang lại giá trị, thẩm mỹ và đẳng cấp cho chủ xe
              </p>
              <div className="flex items-center justify-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-xl" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
}