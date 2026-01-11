import { motion } from "framer-motion";
import { FaAward, FaShieldAlt, FaClock, FaStar } from "react-icons/fa";

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
      icon: <FaAward className="text-lg" />,
      title: "Tay nghề",
      desc: "Hơn 15 năm kinh nghiệm, thao tác chính xác và tỉ mỉ.",
    },
    {
      icon: <FaShieldAlt className="text-lg" />,
      title: "Vật liệu",
      desc: "Mica chuẩn ISO dày 3 ly, kết hợp inox nguyên khối.",
    },
    {
      icon: <FaClock className="text-lg" />,
      title: "Thiết bị",
      desc: "Máy ép thủy lực công suất lớn, ép chuẩn form.",
    },
    {
      icon: <FaStar className="text-lg" />,
      title: "Bảo hành",
      desc: "Cam kết chất lượng, bảo hành rõ ràng đến 24 tháng.",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white pt-10 md:pt-32 pb-20 md:pb-28 overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* nền nhẹ, sang (không lòe loẹt) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-neutral-200/40 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 right-0 w-[700px] h-[700px] bg-neutral-100 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            Về chúng tôi
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Ép biển số chuẩn form — hoàn thiện tinh gọn, bền theo thời gian.
          </h2>

          <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed">
            Chúng tôi tập trung vào <span className="text-neutral-900 font-medium">chất lượng thành phẩm</span>:
            phẳng đẹp, góc cạnh gọn, chắc chắn; vật liệu tiêu chuẩn và quy trình ổn định.
          </p>
        </motion.div>

        {/* ===== FEATURES (xịn, nhẹ) ===== */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-900">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-neutral-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{f.desc}</p>

              {/* line hover nhẹ */}
              <div className="mt-4 h-px w-0 bg-neutral-900/60 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* ===== MARQUEE / SLIDER CHẠY ẢNH (GIỮ HIỆU ỨNG CHẠY) ===== */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-neutral-900">
                Hình ảnh thực tế
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Một số thành phẩm & quy trình tại xưởng.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-900/70" />
              Tự động chạy
            </div>
          </div>

          {/* khung marquee */}
          <div className="mt-6 relative rounded-3xl border border-neutral-200 bg-white/60 overflow-hidden">
            {/* fade 2 bên cho sang */}
           
            <div className="py-4">
              <div className="marquee flex w-max gap-4 px-4">
                {[...images, ...images].map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
                    style={{ width: 260, height: 170 }}
                  >
                    <img
                      src={src}
                      alt={`Hình ảnh ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===== VIDEO (GIỮ VIDEO, LÀM CHO SANG) ===== */}
       <motion.div
      className="mt-16 md:mt-20"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-medium text-neutral-900">
            Video quy trình
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            Quy trình ép — chuẩn, gọn, chắc.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-neutral-200 bg-white/60 p-3 md:p-5 shadow-sm">
        {/* KHUNG DỌC 9:16 */}
        <div className="mx-auto w-full max-w-sm">
          <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-md">
            <iframe
              // Shorts: cứ dùng embed link như bạn đang dùng
              src="https://www.youtube.com/embed/ltAOH7ls_Xc?controls=1&autoplay=0"
              title="YouTube - ÉP BIỂN SỐ"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-neutral-600">
            Xem thao tác thực tế — từ chuẩn bị vật liệu đến hoàn thiện.
          </p>

          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full border border-neutral-200 text-xs text-neutral-700 bg-white">
              Chuẩn form
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-200 text-xs text-neutral-700 bg-white">
              Bền đẹp
            </span>
            <span className="px-3 py-1 rounded-full border border-neutral-200 text-xs text-neutral-700 bg-white">
              Bảo hành
            </span>
          </div>
        </div>
      </div>
    </motion.div>

      </div>

      {/* ===== CSS marquee (hiệu ứng chạy ảnh) ===== */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        /* hover vào khung: dừng chạy cho “xịn” */
      
        /* responsive card size */
        @media (max-width: 640px) {
          .marquee > div {
            width: 210px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default About;
