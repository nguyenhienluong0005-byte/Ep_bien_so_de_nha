import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function News() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [hoveredCard, setHoveredCard] = useState(null);

  const news = [
    {
      id: 1,
      title: "Phục hồi biển số gãy – lún đế – mờ sơn: Làm lại sắc nét như mới",
      desc: "Nhận ép mới và phục hồi biển số ô tô – xe máy bị gãy, lún đế, mờ sơn. Thành phẩm sắc nét, chắc chắn, nhìn đẹp như mới.",
      img: "https://i.postimg.cc/nhpFT5Rn/48.jpg",
      category: "Phục Hồi",
      date: "20/12/2025"
    },
    {
      id: 2,
      title: "Máy ép thủy lực công suất lớn: Ép chuẩn form, góc cạnh sắc sảo",
      desc: "Sử dụng máy ép thủy lực lực ép mạnh và đều giúp biển số phẳng chuẩn form, góc cạnh sắc sảo, độ chắc chắn cao và làm nhanh.",
      img: "https://i.postimg.cc/jStxv9gW/55.jpg",
      category: "Công Nghệ",
      date: "19/12/2025"
    },
    {
      id: 3,
      title: "Mica chuẩn ISO dày 3 ly + inox nguyên khối: Bền đẹp vượt trội",
      desc: "Mica chất lượng chuẩn ISO dày 3 ly kết hợp inox nguyên khối cho độ bền vượt trội. Đặc biệt mica không ố vàng theo thời gian.",
      img: "https://i.postimg.cc/vZbYXjqW/61.jpg",
      category: "Vật Liệu",
      date: "18/12/2025"
    },
    {
      id: 4,
      title: "Tay nghề thợ hơn 15 năm: Kỹ – cẩn thận – tỉ mỉ từng chi tiết",
      desc: "Kỹ thuật viên kinh nghiệm lâu năm, thao tác chuẩn, xử lý kỹ từng công đoạn để biển số đẹp, đều, chuẩn và thẩm mỹ cao.",
      img: "https://i.postimg.cc/Vkmf4TGr/56.jpg",
      category: "Thợ Nghề",
      date: "17/12/2025"
    },
    {
      id: 5,
      title: "Ép biển số đúng chuẩn form: Đẹp – chắc – bền theo thời gian",
      desc: "Quy trình ép giúp biển số thẳng phẳng, chắc chắn, hạn chế cong vênh. Thành phẩm bền đẹp theo thời gian, phù hợp nhu cầu làm đẹp xe.",
      img: "https://i.postimg.cc/GmKcfQVq/67.jpg",
      category: "Quy Trình",
      date: "16/12/2025"
    },
    {
      id: 6,
      title: "Sản phẩm hoàn thiện sắc nét – Bảo hành 2 năm rõ ràng",
      desc: "Biển số sau ép sắc nét, bền màu, tính thẩm mỹ cao. Cam kết bảo hành 24 tháng giúp khách hàng yên tâm sử dụng lâu dài.",
      img: "https://i.postimg.cc/4xSLqdxj/42.jpg",
      category: "Bảo Hành",
      date: "15/12/2025"
    },
    {
      id: 7,
      title: "Vì sao biển số bị mờ sơn, lún đế? Cách khắc phục hiệu quả",
      desc: "Biển số xuống cấp do va chạm, nắng mưa, hóa chất rửa xe… Giải pháp ép mới/ phục hồi giúp biển số đẹp lại, chắc chắn và bền hơn.",
      img: "https://i.postimg.cc/L58dLBCw/co2.png",
      category: "Kiến Thức",
      date: "14/12/2025"
    },
    {
      id: 8,
      title: "Khách hàng tin chọn ÉP BIỂN SỐ ĐỆ NHẤT: Chuẩn – nhanh – đẹp",
      desc: "Khách hàng đánh giá cao chất lượng ép chuẩn form, vật liệu tốt, làm nhanh và bảo hành rõ ràng. Uy tín tạo nên thương hiệu.",
      img: "https://i.postimg.cc/9QCm1S80/52.jpg",
      category: "Đánh Giá",
      date: "13/12/2025"
    },
  ];

  const categoryColors = {
    "Phục Hồi": "from-red-500 to-orange-500",
    "Công Nghệ": "from-blue-500 to-cyan-500",
    "Vật Liệu": "from-green-500 to-emerald-500",
    "Thợ Nghề": "from-purple-500 to-pink-500",
    "Quy Trình": "from-yellow-500 to-amber-500",
    "Bảo Hành": "from-indigo-500 to-blue-500",
    "Kiến Thức": "from-teal-500 to-green-500",
    "Đánh Giá": "from-rose-500 to-red-500"
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255, 252, 252, 1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Hero Section */}
      <motion.div 
        className="relative z-10 pt-32 pb-20 px-6"
        style={{ opacity, scale }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-full text-sm tracking-wider uppercase shadow-lg">
                Tin Tức Mới Nhất
              </span>
            </div>
            
            <h1 className="text-7xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                ÉP BIỂN SỐ
              </span>
              <br />
              <span className="text-white">ĐỆ NHẤT</span>
            </h1>
            
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Khám phá công nghệ tiên tiến, quy trình chuyên nghiệp và những câu chuyện 
              thành công trong việc phục hồi biển số xe
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* News Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(item.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryColors[item.category]} rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-yellow-500/50 transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 bg-gradient-to-r ${categoryColors[item.category]} text-white text-xs font-bold rounded-full shadow-lg`}>
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <span className="text-white text-xs font-semibold">{item.date}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {item.desc}
                  </p>
                  
                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition-colors"
                  >
                    <span>Đọc tiếp</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-r from-yellow-500 to-red-500 rounded-3xl p-12 overflow-hidden"
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Sẵn Sàng Phục Hồi Biển Số?
            </h2>
            <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
              Liên hệ ngay để được tư vấn miễn phí và trải nghiệm dịch vụ đẳng cấp 5 sao
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black text-white font-bold rounded-full shadow-2xl hover:shadow-black/50 transition-all"
              >
                📞 Gọi Ngay: 0123 456 789
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-2xl hover:shadow-white/50 transition-all"
              >
                🔧 Xem Quy Trình
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.1 ? 0 : 1,
          y: [0, 10, 0]
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 1.5 },
          opacity: { duration: 0.3 }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider">Cuộn xuống</span>
          <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}