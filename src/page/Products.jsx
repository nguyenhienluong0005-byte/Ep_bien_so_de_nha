import { motion } from "framer-motion";
import { useState } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const items = [
    {
      before: "https://i.postimg.cc/br90nWVY/30.jpg",
      after: "https://i.postimg.cc/zXqmnpgt/6.jpg",
    },
    {
      before: "https://i.postimg.cc/C5sC8Xrh/32.jpg",
      after: "https://i.postimg.cc/vTt7nk2Q/33.jpg",
    },
    {
      before: "https://i.postimg.cc/kGvNSzY4/34.jpg",
      after: "https://i.postimg.cc/sx4PWqH2/35.jpg",
    },
    {
      before: "https://i.postimg.cc/zGDZP26b/71.jpg",
      after: "https://i.postimg.cc/QCJg7wYV/37.jpg",
    },
    {
      before: "https://i.postimg.cc/d3jRCpNh/38.jpg",
      after: "https://i.postimg.cc/QCJg7wYK/39.jpg",
    },
    {
      before: "https://i.postimg.cc/qqxcKSD3/40.jpg",
      after: "https://i.postimg.cc/Hn90MRv7/41.jpg",
    },
  ];

  const realImages = [
    "https://i.postimg.cc/0jfYR9cs/4.jpg",
    "https://i.postimg.cc/dQmmT9vh/5.jpg",
    "https://i.postimg.cc/XY4jxh2R/42.jpg",
    "https://i.postimg.cc/rFSy1cJV/43.jpg",
    "https://i.postimg.cc/PrmfWh4T/44.jpg",
    "https://i.postimg.cc/kXxMQ9c7/45.jpg",
    "https://i.postimg.cc/htcDMwyc/46.jpg",
    "https://i.postimg.cc/nhpFT5RZ/47.jpg",
    "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    "https://i.postimg.cc/Dwnv5Dj2/49.jpg",
    "https://i.postimg.cc/bwpyLMCY/50.jpg",
    "https://i.postimg.cc/9QCm1S80/52.jpg",
    "https://i.postimg.cc/7ZwHXcsb/53.jpg",
    "https://i.postimg.cc/2SrkTJc1/54.jpg",
    "https://i.postimg.cc/jStxv9gW/55.jpg",
    "https://i.postimg.cc/Vkmf4TGr/56.jpg",
    "https://i.postimg.cc/bwpyLMCb/58.jpg",
    "https://i.postimg.cc/P5TXKc3Y/59.jpg",
    "https://i.postimg.cc/52b4pG78/60.jpg",
    "https://i.postimg.cc/vZbYXjqW/61.jpg",
    "https://i.postimg.cc/Z5HTQc2W/62.jpg",
    "https://i.postimg.cc/cLhszm2r/63.jpg",
    "https://i.postimg.cc/htsSYr6Q/64.jpg",
    "https://i.postimg.cc/6pc9P0gM/66.jpg",
    "https://i.postimg.cc/GmKcfQVq/67.jpg",
    "https://i.postimg.cc/fRCwPKpr/68.jpg",
    "https://i.postimg.cc/g2sY7DQQ/70.jpg",
  ];

  return (
    <section
      id="products"
      className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 py-20 px-4">
        {/* Header Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-800 bg-clip-text text-transparent leading-tight">
            Biến Đổi Kỳ Diệu
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent to-yellow-400 rounded-full" />
            <span className="text-3xl md:text-5xl font-bold text-yellow-500">TRƯỚC / SAU</span>
            <div className="h-1 w-16 bg-gradient-to-l from-transparent to-yellow-400 rounded-full" />
          </div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Chứng kiến sự khác biệt rõ rệt từ những chiếc biển số cũ kỹ đến hoàn hảo như mới
          </p>
        </motion.div>

        {/* Before/After Gallery */}
        <div className="max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  
                  <div className="grid grid-cols-2">
                    {/* Before Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.before}
                        alt={`Trước ${i + 1}`}
                        className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-5 py-2 rounded-lg text-sm shadow-lg backdrop-blur-sm">
                        TRƯỚC
                      </div>
                    </div>
                    
                    {/* After Image */}
                    <div className="relative overflow-hidden border-l-2 border-white">
                      <img
                        src={item.after}
                        alt={`Sau ${i + 1}`}
                        className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold px-5 py-2 rounded-lg text-sm shadow-lg backdrop-blur-sm">
                        SAU
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect: Arrow */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                    <motion.div
                      className="bg-white/95 backdrop-blur-sm rounded-full p-4 shadow-2xl"
                      initial={{ scale: 0, rotate: 0 }}
                      animate={hoveredIndex === i ? { scale: 1, rotate: 360 } : { scale: 0, rotate: 0 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-32 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sẵn Sàng Làm Mới Biển Số?
            </h3>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Mỗi biển số là một câu chuyện biến đổi từ cũ kỹ thành{" "}
              <span className="font-bold text-yellow-300">đẹp như mới</span>.
              <br />
              <span className="font-bold text-white">ÉP BIỂN SỐ ĐỆ NHẤT</span> tự hào mang đến chất lượng tốt nhất.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Liên Hệ Ngay</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Real Images Section */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-4 px-6 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold tracking-wide"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            >
              📸 GALLERY
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-indigo-700 to-indigo-900 bg-clip-text text-transparent">
              Hình Ảnh Thực Tế
            </h3>
            
            <p className="text-xl text-yellow-600 font-semibold">
              Tại Cửa Hàng Của Chúng Tôi
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {realImages.map((src, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white p-2">
                  <img
                    src={src}
                    alt={`Hình thực tế ${i + 1}`}
                    className="w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Contact />
      <Footer />
    </section>
  );
}