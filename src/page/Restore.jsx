import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FaCogs,
  FaBolt,
  FaAward,
  FaHammer,
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Restore12StepsLight() {
  const MAP_LINK = "https://maps.app.goo.gl/cPNwc5zueyXv4muG7";
  const HOTLINE = "0797910179";

  const heroImages = useMemo(
    () => [
      "/cuahang.jpg",
      "https://i.postimg.cc/nhpFT5Rn/48.jpg",
      "https://i.postimg.cc/vZbYXjqW/61.jpg",
      "https://i.postimg.cc/br90nWVY/30.jpg",
      "https://i.postimg.cc/1zSdn38C/quan.jpg",
    ],
    []
  );

  const steps = useMemo(
    () => [
      {
        num: 1,
        title: "Tiếp nhận & tư vấn",
        desc: "Đánh giá tình trạng biển, tư vấn giải pháp phục hồi phù hợp kiểu xe & nhu cầu.",
        icon: FaCogs,
      },
      {
        num: 2,
        title: "Khò đốt – làm sạch nền",
        desc: "Bóc lớp cũ, loại bỏ bụi dầu & oxi hóa để bề mặt sạch – bám tốt.",
        icon: FaBolt,
      },
      {
        num: 3,
        title: "Loại bỏ phản quang hư",
        desc: "Làm sạch lớp phản quang bong tróc, đảm bảo nền phẳng và đồng đều.",
        icon: FaHammer,
      },
      {
        num: 4,
        title: "Phủ phản quang mới",
        desc: "Phủ phản quang chuẩn, tăng độ nhìn ban đêm – mưa gió rõ nét.",
        icon: FaStar,
      },
      {
        num: 5,
        title: "Lăn sơn ký tự",
        desc: "Sơn chuyên dụng bền màu, sắc nét, chống tia UV – hạn chế phai.",
        icon: FaCogs,
      },
      {
        num: 6,
        title: "Vệ sinh – kiểm tra – cắt form",
        desc: "Căn chỉnh form chuẩn, xử lý mép gọn, cân đối, tính thẩm mỹ cao.",
        icon: FaShieldAlt,
      },
      {
        num: 7,
        title: "Ép thủy lực",
        desc: "Ép chắc – phẳng – đều, hạn chế cong vênh, bọt khí.",
        icon: FaBolt,
      },
      {
        num: 8,
        title: "Chà nhám lần 1",
        desc: "Tạo độ bám tối ưu cho lớp hoàn thiện, ổn định bề mặt.",
        icon: FaHammer,
      },
      {
        num: 9,
        title: "Chà nhám lần 2",
        desc: "Làm mịn bề mặt, loại bỏ tạp chất và vết lăn.",
        icon: FaHammer,
      },
      {
        num: 10,
        title: "Chà nhám lần 3",
        desc: "Tinh chỉnh lần cuối để bề mặt đều – đẹp – sạch.",
        icon: FaAward,
      },
      {
        num: 11,
        title: "Đánh bóng bề mặt",
        desc: "Đánh bóng cho cảm giác sáng – trong – sạch như mới.",
        icon: FaStar,
      },
      {
        num: 12,
        title: "Hoàn thiện & bàn giao",
        desc: "Kiểm tra tổng thể, hoàn thiện, bàn giao — bảo hành rõ ràng.",
        icon: FaCheckCircle,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  // HERO parallax nhẹ khi scroll (tinh tế thôi)
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1, 1.06]);

  // Auto slider (không dừng khi bấm)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4200);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section ref={containerRef} className="bg-white">
      {/* HERO - tối giản, sạch */}
      <motion.div
        className="relative overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
          className="relative h-[78svh] md:h-[86svh]"
          style={{ scale: heroScale }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img
                src={heroImages[index]}
                alt={`Ảnh quy trình ${index + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* overlay tinh tế */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
            </motion.div>
          </AnimatePresence>

          {/* content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-3xl"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-3 py-1 text-xs text-white/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  Quy trình chuẩn xưởng • Bảo hành rõ ràng
                </div>

                <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
                  Quy trình phục hồi biển số
                  <span className="block text-white/90 font-medium mt-2">
                    gọn — sạch — sắc nét
                  </span>
                </h1>

                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                  12 công đoạn chuẩn kỹ thuật: từ làm sạch, phủ phản quang đến ép thủy lực
                  và đánh bóng hoàn thiện.
                </p>

                {/* CTA */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${HOTLINE}`}
                    className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
                  >
                    Gọi ngay: 07979 101 79
                  </a>
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/0 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
                  >
                    Xem đường đi (Google Maps)
                  </a>
                </div>

                {/* Indicators */}
                <div className="mt-10 flex items-center gap-2">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === index ? "w-10 bg-amber-300" : "w-3 bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Ảnh ${i + 1}`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="w-7 h-11 rounded-full border border-white/35 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-3 rounded-full bg-white/80"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Header section */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            12 bước phục hồi
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Minh bạch quy trình – làm kỹ từng công đoạn
          </h2>

          <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
            Mỗi bước đều có mục tiêu rõ ràng để ra thành phẩm đẹp, chắc, sáng và bền theo thời gian.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="
                  rounded-3xl border border-neutral-200 bg-white p-5 md:p-6
                  shadow-sm hover:shadow-md transition
                "
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-2xl border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-900">
                      <Icon className="text-lg" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-9 h-6 rounded-full bg-neutral-900 text-white text-xs font-semibold">
                        #{step.num}
                      </span>
                      <h3 className="text-base font-semibold text-neutral-900">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-px bg-neutral-200/70" />
                <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                  <FaStar className="text-amber-500" />
                  Chuẩn xưởng • Làm kỹ
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Showcase / Store */}
        <motion.div
          className="mt-16 md:mt-20 rounded-3xl overflow-hidden border border-neutral-200 shadow-sm"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src="/cuahang.jpg"
              alt="Cửa hàng"
              className="w-full h-[320px] md:h-[520px] object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/10" />

            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-auto">
              <div className="rounded-2xl bg-white/90 backdrop-blur border border-white/60 px-4 py-3 shadow-lg max-w-2xl">
                <p className="text-sm md:text-base font-semibold text-neutral-900">
                  📍 402B Lê Văn Lương, Tân Hưng, Quận 7, TP.HCM
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white px-4 py-2 text-xs font-semibold hover:bg-neutral-800 transition"
                  >
                    Mở Google Maps
                  </a>
                  <a
                    href={`tel:${HOTLINE}`}
                    className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-900 px-4 py-2 text-xs font-semibold hover:bg-neutral-50 transition"
                  >
                    Gọi: 07979 101 79
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Commitments */}
        <motion.div
          className="mt-16 md:mt-20 grid lg:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-medium text-neutral-900">
              Cam kết dịch vụ
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Làm kỹ – đẹp – bền, ưu tiên chất lượng thành phẩm và trải nghiệm khách hàng.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { icon: FaCheckCircle, text: "Kiểm tra kỹ trước khi bàn giao" },
                { icon: FaBolt, text: "Ép chắc – phẳng – hạn chế cong vênh" },
                { icon: FaShieldAlt, text: "Vật liệu/keo bám tốt – bền theo thời gian" },
                { icon: FaAward, text: "Bảo hành rõ ràng, hỗ trợ nhanh" },
              ].map((it, idx) => {
                const Ico = it.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3"
                  >
                    <div className="w-9 h-9 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center">
                      <Ico className="text-neutral-900" />
                    </div>
                    <div className="text-sm text-neutral-700 leading-relaxed pt-1">
                      {it.text}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-6 md:p-8 text-white shadow-sm">
            <h3 className="text-xl md:text-2xl font-medium">Vì sao khách chọn mình?</h3>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">
              Làm gọn – sạch – sắc. Quy trình rõ ràng, tư vấn đúng, thành phẩm nhìn “sang” hơn.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { k: "12", v: "Công đoạn" },
                { k: "24", v: "Tháng BH" },
                { k: "ISO", v: "Chuẩn phản quang" },
                { k: "15+", v: "Năm tay nghề" },
              ].map((x, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                >
                  <div className="text-2xl font-semibold text-amber-300">{x.k}</div>
                  <div className="text-xs text-white/70 mt-1">{x.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`tel:${HOTLINE}`}
                className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-4 py-2 text-xs font-semibold hover:bg-white/90 transition"
              >
                Gọi tư vấn
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/0 text-white px-4 py-2 text-xs font-semibold hover:bg-white/10 transition"
              >
                Xem đường đi
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
}
