import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function News() {
  const MAP_LINK = "https://maps.app.goo.gl/cPNwc5zueyXv4muG7";
  const HOTLINE = "0797910179";

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.98]);
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const [hoveredCard, setHoveredCard] = useState(null);
  const [openItem, setOpenItem] = useState(null);

  // ✅ data từ firestore
  const [news, setNews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      setNews(arr);
    });
    return () => unsub();
  }, []);

  const categoryColors = {
    "Phục Hồi": "from-red-500 to-orange-500",
    "Công Nghệ": "from-blue-500 to-cyan-500",
    "Vật Liệu": "from-emerald-500 to-green-500",
    "Thợ Nghề": "from-purple-500 to-pink-500",
    "Quy Trình": "from-amber-500 to-yellow-500",
    "Bảo Hành": "from-indigo-500 to-blue-500",
    "Kiến Thức": "from-teal-500 to-emerald-500",
    "Đánh Giá": "from-rose-500 to-red-500",
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-gray-100">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[520px] h-[520px] bg-red-500/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[520px] h-[520px] bg-blue-500/10 rounded-full blur-[160px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(251,191,36,0.12)_1px,transparent_0)] [background-size:34px_34px] opacity-[0.08]" />
      </div>

      {/* HERO */}
      <motion.section
        className="relative z-10 pt-28 md:pt-32 pb-16 px-6"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-amber-400/20 rounded-full px-5 py-2 mb-7">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-amber-200 font-semibold tracking-wide text-xs uppercase">
              Tin tức & chia sẻ
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
              Tin Tức Ép Biển Số
            </span>
            <br />
            <span className="text-white/90">Đệ Nhất</span>
          </h1>

          <p className="mt-5 text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tổng hợp công nghệ, vật liệu, quy trình và kinh nghiệm thực tế.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href={`tel:${HOTLINE}`}
              className="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              📞 Gọi tư vấn: 07979 101 79
            </a>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/0 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              📍 Mở Google Maps
            </a>
          </div>
        </div>
      </motion.section>

      {/* GRID */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        {news.length === 0 ? (
          <div className="text-center text-white/70">Chưa có bài nào.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {news.map((item, idx) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                {/* Glow border */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${
                    categoryColors[item.category] || "from-amber-500 to-yellow-500"
                  } rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500`}
                />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-amber-400/30 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      animate={{ scale: hoveredCard === item.id ? 1.08 : 1 }}
                      transition={{ duration: 0.55 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1.5 bg-gradient-to-r ${
                          categoryColors[item.category] || "from-amber-500 to-yellow-500"
                        } text-white text-[11px] font-bold rounded-full shadow-lg`}
                      >
                        {item.category || "Tin tức"}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      <span className="text-white text-[11px] font-semibold">
                        {item.date || ""}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="p-6">
                    <h3 className="text-white text-lg font-bold mb-2 line-clamp-2 group-hover:text-amber-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-gray-300/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {item.desc}
                    </p>

                    <button
                      onClick={() => setOpenItem(item)}
                      className="inline-flex items-center gap-2 text-amber-300 font-semibold text-sm hover:text-amber-200 transition"
                    >
                      <span>Đọc tiếp</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Scroll indicator */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        style={{ opacity: indicatorOpacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-400 text-[10px] font-semibold uppercase tracking-wider">
            Cuộn xuống
          </span>
          <motion.svg
            className="w-6 h-6 text-amber-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      </motion.div>

      {/* MODAL đọc bài */}
      <AnimatePresence>
        {openItem && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenItem(null)}
          >
            <motion.div
              className="w-full max-w-3xl bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={openItem.img} alt={openItem.title} className="w-full h-60 md:h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <button
                  onClick={() => setOpenItem(null)}
                  className="absolute top-4 right-4 bg-red-600 hover:bg-red-500 text-white font-bold w-11 h-11 rounded-full shadow-lg transition"
                  aria-label="Đóng"
                >
                  ✕
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-amber-200">
                      {openItem.category || "Tin tức"}
                    </span>
                    <span className="text-xs text-gray-200/80">{openItem.date || ""}</span>
                  </div>
                  <h3 className="mt-3 text-xl md:text-2xl font-black text-white leading-snug">
                    {openItem.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-7">
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {openItem.content || openItem.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
