import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaShieldAlt, FaClock, FaStar } from "react-icons/fa";

function About() {
  const images = [
    "https://i.postimg.cc/yxHtGcH1/10.jpg",
    "https://i.postimg.cc/cCS2zwS4/11.jpg",
    "https://i.postimg.cc/x82hZM28/12.jpg",
    "https://i.postimg.cc/GtCVfGCB/13.jpg",
    "https://i.postimg.cc/L53wF59T/16.png",
    "https://i.postimg.cc/bJb4LLKj/7.jpg",
    "https://i.postimg.cc/RFf2GG2P/6.jpg",
    "https://i.postimg.cc/CM7c0WCP/26.jpg",
    "https://i.postimg.cc/kGvzPGJT/18.jpg",
    "https://i.postimg.cc/KzLCQQdX/8.jpg",
    "https://i.postimg.cc/nz7NTT6J/9.jpg",
  ];

 const features = [
  {
    icon: <FaAward className="text-3xl" />,
    title: "Tay Nghề Trên 15 Năm",
    desc: "Thợ lành nghề, thao tác kỹ – cẩn thận – tỉ mỉ từng chi tiết"
  },
  {
    icon: <FaShieldAlt className="text-3xl" />,
    title: "Mica Chuẩn ISO – Inox Nguyên Khối",
    desc: "Mica dày 3 ly, không ố vàng, kết hợp inox cho độ bền vượt trội"
  },
  {
    icon: <FaClock className="text-3xl" />,
    title: "Máy Ép Thủy Lực Công Suất Lớn",
    desc: "Ép chuẩn form, góc cạnh sắc sảo, chắc chắn, làm nhanh"
  },
  {
    icon: <FaStar className="text-3xl" />,
    title: "Bảo Hành 2 Năm",
    desc: "Thành phẩm sắc nét, bền màu, bảo hành rõ ràng 24 tháng"
  }
];


  const advantages = [
  "Chuyên ép biển số ô tô – xe máy, phục hồi biển số gãy, lún đế, mờ sơn",
  "Sử dụng máy ép thủy lực công suất lớn, ép chuẩn form – chắc chắn",
  "Mica chuẩn ISO dày 3 ly kết hợp inox nguyên khối, không ố vàng",
  "Tay nghề thợ hơn 15 năm, sản phẩm sắc nét – bảo hành 2 năm"
];


  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ===== HEADER SECTION ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide">
              VỀ CHÚNG TÔI
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              ÉP BIỂN SỐ
            </span>
            <br className="md:hidden" />
            <span className="text-gray-900"> ĐỆ NHẤT</span>
          </h2>

      <motion.p
          className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-blue-700 font-semibold">ÉP BIỂN SỐ ĐỆ NHẤT</span> chuyên ép biển số{" "}
          <span className="font-semibold">ô tô – xe máy</span> và phục hồi các tình trạng{" "}
          <span className="font-semibold">
            biển số gãy, lún đế, mờ sơn
          </span>.
          <br className="hidden md:block" />
          Chúng tôi sử dụng <span className="text-blue-700 font-semibold">
            máy ép thủy lực công suất lớn
          </span>, vật liệu <span className="font-semibold">mica chuẩn ISO dày 3 ly</span> kết hợp{" "}
          <span className="font-semibold">inox nguyên khối</span>, cùng tay nghề thợ{" "}
          <span className="italic text-blue-600 font-semibold">
            hơn 15 năm kinh nghiệm
          </span>,
          cam kết sản phẩm <span className="font-semibold">
            sắc nét – chắc chắn – bền đẹp theo thời gian
          </span>.
        </motion.p>

        </motion.div>

        {/* ===== FEATURES GRID ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== IMAGE SLIDER ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Hình Ảnh Thực Tế
            </h3>
            <p className="text-gray-600">Những sản phẩm tiêu biểu của chúng tôi</p>
          </div>

          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32  from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32  from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex w-max animate-slide gap-4 md:gap-6 py-4">
              {[...images, ...images].map((src, i) => (
                <motion.div
                  key={i}
                  className="
                            min-w-[200px] h-[140px]
                            sm:min-w-[260px] sm:h-[180px]
                            md:min-w-[340px] md:h-[220px]
                            lg:min-w-[420px] lg:h-[280px]
                            rounded-2xl overflow-hidden shadow-xl
                            transition-shadow duration-300
                          "

                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={src}
                    alt={`Hình ảnh ÉP BIỂN SỐ ĐỆ NHẤT ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== VIDEO SECTION ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Video Giới Thiệu
              </h3>
              <p className="text-gray-600">Quy trình làm việc chuyên nghiệp của chúng tôi</p>
            </div>

            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-4 md:p-8 shadow-2xl">
              <div className="relative w-full max-w-md mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
                <iframe
                  src="https://www.youtube.com/embed/ltAOH7ls_Xc?controls=1&autoplay=0"                  title="YouTube - ÉP BIỂN SỐ ĐỆ NHẤT"
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== ADVANTAGES SECTION ===== */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Lợi Thế Của Chúng Tôi
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((text, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <FaCheckCircle className="text-white text-xl" />
                    </div>
                    <p className="text-gray-700 leading-relaxed flex-1 pt-2">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ===== MISSION SECTION ===== */}
       <motion.div
  className="max-w-5xl mx-auto"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 
                  rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden border border-blue-400/20">

    {/* Hiệu ứng sáng chạy */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    opacity-0 hover:opacity-100 transition-opacity duration-700 
                    animate-[shimmer_6s_infinite]"></div>

    {/* Icon glow floating */}
    <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/20 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-400/25 rounded-full blur-3xl"></div>

    {/* Nội dung */}
    <div className="relative text-center text-white">
      
      {/* Icon trung tâm */}
      <div className="inline-block mb-8">
        <div className="w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl 
                        flex items-center justify-center mx-auto shadow-xl 
                        border border-white/20 hover:scale-110 transition-all duration-300">
          <FaAward className="text-5xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]" />
        </div>
      </div>

      {/* Tiêu đề */}
      <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-wide">
        Sứ Mệnh Của Chúng Tôi
      </h3>

      {/* Mô tả */}
      <p className="text-lg md:text-xl leading-relaxed text-blue-100 max-w-3xl mx-auto">
        <span className="font-semibold text-white">ÉP BIỂN SỐ ĐỆ NHẤT</span> cam kết mang đến dịch vụ{" "}
        <span className="font-semibold text-yellow-300">
          an toàn – thẩm mỹ – bền vững
        </span>{" "}
        giúp khách hàng sở hữu biển số đẹp – chuẩn – sang trọng như mới, 
        khẳng định phong cách và giá trị cho mỗi chiếc xe.
      </p>

      {/* Bộ 3 chỉ số */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">

        {/* Item 1 */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-5 
                        shadow-lg border border-white/20 
                        hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="text-4xl font-bold text-yellow-300 drop-shadow-md">7+</div>
          <div className="text-sm text-blue-100 mt-1 tracking-wide">Năm kinh nghiệm</div>
        </div>

        {/* Item 2 */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-5 
                        shadow-lg border border-white/20 
                        hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="text-4xl font-bold text-yellow-300 drop-shadow-md">10K+</div>
          <div className="text-sm text-blue-100 mt-1 tracking-wide">Khách hàng tin dùng</div>
        </div>

        {/* Item 3 */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl px-8 py-5 
                        shadow-lg border border-white/20 
                        hover:scale-105 hover:shadow-xl transition-all duration-300">
          <div className="text-4xl font-bold text-yellow-300 drop-shadow-md">24</div>
          <div className="text-sm text-blue-100 mt-1 tracking-wide">Tháng bảo hành</div>
        </div>
      </div>
    </div>
  </div>
</motion.div>


      </div>

      {/* ===== ANIMATIONS ===== */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default About;