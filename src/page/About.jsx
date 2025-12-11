import { motion } from "framer-motion";
import { FaCheckCircle, FaCrown, FaAward, FaTools, FaBolt } from "react-icons/fa";

function About() {
  const achievements = [
    { icon: <FaAward />, title: "7+ năm kinh nghiệm", desc: "Phục hồi và ép biển số hàng nghìn xe mỗi năm." },
    { icon: <FaTools />, title: "Công nghệ ép Titan 3mm", desc: "Chuẩn quốc tế – bền đẹp – sắc nét từng chi tiết." },
    { icon: <FaBolt />, title: "Ép nhanh – giao ngay", desc: "Chỉ từ 10 phút, lấy ngay, đúng hẹn 100%." },
    { icon: <FaCrown />, title: "Bảo hành 24 tháng", desc: "Chống oxy hóa, bong tróc, phai màu tuyệt đối." },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-indigo-50 via-white to-indigo-100 text-center overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* Nền mờ */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/cuahang.jpg')" }}
      ></div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Tiêu đề lớn */}
        <motion.h1
  className="mt-[10px] text-4xl md:text-6xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg leading-tight"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <span className="block text-yellow-500">ÉP BIỂN SỐ THỨC</span>
  <span className="block">Đỉnh Cao Nghệ Thuật Ép Biển Số Việt</span>
</motion.h1>


        {/* Mô tả */}
        <motion.p
          className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tại <strong>ÉP BIỂN SỐ THỨC</strong>, chúng tôi không chỉ phục hồi biển số —
          mà còn mang đến <em>nghệ thuật hoàn thiện tỉ mỉ</em> trong từng chi tiết.
          Mỗi tấm biển đều được ép bằng công nghệ tiên tiến, đảm bảo bền đẹp, sáng bóng và đúng chuẩn <strong>Bộ GTVT</strong>.
        </motion.p>

        {/* Dải sáng */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-indigo-600 to-yellow-400 animate-pulse"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>

        {/* Ảnh cửa hàng */}
        <motion.div
          className="mt-16 mb-20 rounded-3xl overflow-hidden shadow-2xl relative group"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/cuahang.jpg"
            alt="Cửa hàng ÉP BIỂN SỐ THỨC Biên Hòa"
            className="w-full h-[500px] object-cover transition-all duration-700 group-hover:brightness-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>

          {/* Địa chỉ tinh tế */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-lg">
            <h3 className="text-white text-xs md:text-sm font-medium tracking-wide">
              📍 1181 Nguyễn Ái Quốc, Tân Mai, Biên Hòa — Uy tín khẳng định đẳng cấp biển số
            </h3>
          </div>
        </motion.div>

        {/* Thành tựu */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-2xl transition border border-indigo-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl text-yellow-500 mb-3 mx-auto">{item.icon}</div>
              <h4 className="text-xl font-bold text-indigo-700 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="relative max-w-4xl mx-auto mb-20 border-l-4 border-indigo-600 pl-6 text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-extrabold text-indigo-700 mb-8">
            Hành Trình Vươn Tới Đỉnh Cao
          </h2>
          {[
            { year: "2017", title: "Khởi đầu từ niềm đam mê", desc: "Thức bắt đầu nghề ép biển từ đam mê phục hồi cái đẹp cho xe." },
            { year: "2020", title: "Ứng dụng công nghệ Titan", desc: "Đưa công nghệ ép Titan 3mm đầu tiên về Biên Hòa." },
            { year: "2023", title: "Nâng cấp toàn bộ xưởng", desc: "Trang bị máy móc CNC & ép nhiệt tự động." },
            { year: "2025", title: "Uy tín hàng đầu miền Nam", desc: "Trở thành địa chỉ top đầu trong lĩnh vực ép biển số ô tô & xe máy." },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="mb-10 relative"
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.3 }}
            >
              <div className="absolute -left-[22px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-4 border-white shadow-lg"></div>
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-800">{item.year} — {item.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cam kết */}
        <motion.div
          className="bg-gradient-to-r from-indigo-800 to-indigo-600 text-white rounded-3xl py-12 px-8 shadow-2xl"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-yellow-300">
            Cam Kết Từ ÉP BIỂN SỐ THỨC
          </h3>
          <ul className="space-y-3 text-lg text-indigo-50">
            <li className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-yellow-400" /> Mica dày 3mm – Chuẩn ISO, không mờ theo thời gian.
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-yellow-400" /> Bảo hành 24 tháng – ép lỗi đổi mới miễn phí.
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-yellow-400" /> Ép nhanh – Giao ngay, đúng hẹn 100%.
            </li>
            <li className="flex items-center justify-center gap-2">
              <FaCheckCircle className="text-yellow-400" /> Phong cách chuyên nghiệp – Uy tín hàng đầu Biên Hòa.
            </li>
          </ul>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="relative w-full h-[450px] mt-16 mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-6xl mx-auto border-4 border-white/20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35586.0980417428!2d106.81022247138903!3d10.968442132681508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd001f755b81%3A0x1d6f416cb440d810!2zVGjhu6ljIMOpcCBiaeG7g24gc-G7kSBCacOqbiBIw7Jh!5e0!3m2!1sen!2s!4v1761973806074!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ ÉP BIỂN SỐ THỨC Biên Hòa"
          ></iframe>
          <div className="absolute top-2 left-2 bg-indigo-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            🗺️ Xem vị trí cửa hàng ÉP BIỂN SỐ THỨC
          </div>
        </motion.div>

        {/* Nút chỉ đường */}
        <div className="text-center mb-16">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Thức+Ép+Biển+Số+Biên+Hòa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-300 transition-all"
          >
            🧭 Chỉ Đường Đến Cửa Hàng
          </a>
        </div>

        {/* Footer */}
        <div className="mt-10 bg-gradient-to-b from-indigo-700 via-indigo-800 to-gray-900 text-white rounded-t-3xl py-10 px-6 text-center shadow-inner">
          <p className="text-lg font-semibold text-yellow-400 mb-3">
            ÉP BIỂN SỐ THỨC — Tận tâm • Uy tín • Chất lượng
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 text-sm leading-relaxed mb-4">
            Chuyên ép, phục hồi và làm mới biển số xe máy & ô tô bằng <strong>mica dày 3mm cao cấp</strong>, đạt chuẩn <strong>ISO Function quốc tế</strong>.  
            Sản phẩm được <strong>bảo hành 24 tháng</strong> — đảm bảo độ bền, sáng bóng và thẩm mỹ lâu dài.
          </p>
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} <strong>ÉP BIỂN SỐ THỨC</strong>. Mọi quyền được bảo lưu.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
