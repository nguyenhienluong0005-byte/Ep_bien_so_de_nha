import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaAward,
} from "react-icons/fa";

export default function Contact() {
  const MAP_LINK = "https://maps.app.goo.gl/cPNwc5zueyXv4muG7";
  const HOTLINE = "0797910179";

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-hidden"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-[0.06]"
        style={{ backgroundImage: "url('/cuahang.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/90 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-28">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-amber-400/25 rounded-full px-5 py-2 mb-6">
            <FaStar className="text-amber-400 text-sm" />
            <span className="text-amber-200 font-semibold tracking-wide text-xs uppercase">
              Liên hệ & chỉ đường
            </span>
            <FaStar className="text-amber-400 text-sm" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl block">
              ÉP BIỂN SỐ ĐỆ NHẤT
            </span>
            <span className="text-white/90 text-lg md:text-2xl font-light block mt-3">
              Hỗ trợ nhanh – chỉ đường 1 chạm
            </span>
          </h2>

          <p className="mt-5 text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dịch vụ ép & phục hồi biển số chuyên nghiệp – nhanh chóng – chuẩn quy định Bộ GTVT.
            Bấm vào bất kỳ nút nào bên dưới để mở Google Maps tới cửa hàng.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Mở Google Maps
            </a>

            {/* Hotline giữ tel để gọi nhanh */}
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/0 text-white px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Gọi ngay: 07979 101 79
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-18">
          {/* Address - click to maps */}
          <motion.a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/85 to-slate-900/85 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-7 hover:border-amber-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-amber-500/10 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  <FaMapMarkerAlt className="text-4xl text-amber-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Địa chỉ cửa hàng</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  402B Lê Văn Lương, Tân Hưng, Quận 7, TP.HCM
                  <span className="block text-xs text-gray-400 mt-2">
                    Bấm để mở Google Maps
                  </span>
                </p>
              </div>
            </div>
          </motion.a>

          {/* Hotline - keep tel */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/85 to-slate-900/85 backdrop-blur-xl border border-green-500/20 rounded-3xl p-7 hover:border-green-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-500/10 rounded-2xl mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <FaPhoneAlt className="text-4xl text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hotline</h3>

                <a
                  href={`tel:${HOTLINE}`}
                  className="text-2xl md:text-3xl font-black bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                >
                  0797 910 179
                </a>

                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <a
                    href={`tel:${HOTLINE}`}
                    className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-4 py-2 text-xs font-semibold hover:bg-white/90 transition"
                  >
                    Gọi ngay
                  </a>

                  <a
                    href={MAP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/0 text-white px-4 py-2 text-xs font-semibold hover:bg-white/10 transition"
                  >
                    Mở Maps
                  </a>
                </div>

                <p className="text-xs text-gray-400 mt-3">Tư vấn & hỗ trợ 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Social -> ALL to maps */}
          <motion.a
            href={MAP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-slate-800/85 to-slate-900/85 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-7 hover:border-blue-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-500/10 rounded-2xl mb-5 group-hover:scale-110 transition-transform duration-500">
                  <FaFacebook className="text-4xl text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">Mạng xã hội</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  (Theo yêu cầu) Bấm vào đây hoặc các nút dưới để mở Google Maps.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3 w-full max-w-xs">
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3">
                    <FaFacebook className="text-blue-400" />
                    <span className="text-xs text-white/85">FB</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3">
                    <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm-3 9.5h6v1H9v-1z"/>
                    </svg>
                    <span className="text-xs text-white/85">Zalo</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3">
                    <FaTiktok className="text-white" />
                    <span className="text-xs text-white/85">TikTok</span>
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                  Mở Maps để xem đường đi
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        {/* Feature mini cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {[
            { icon: FaShieldAlt, title: "Bảo hành", desc: "24 tháng" },
            { icon: FaClock, title: "Nhanh", desc: "1–2 giờ" },
            { icon: FaAward, title: "Chuẩn", desc: "ISO" },
            { icon: FaStar, title: "Uy tín", desc: "Hàng đầu" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={i}
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-white/5 border border-amber-500/15 hover:border-amber-400/35 backdrop-blur-xl p-5 text-center transition"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
              >
                <Icon className="text-3xl text-amber-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <div className="text-xs text-amber-200/90 mt-1">{item.desc}</div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Map */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-black">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Bản đồ chỉ đường
              </span>
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-2">
              Bấm vào bất kỳ nút nào để mở Google Maps, hoặc xem trực tiếp tại đây.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-35 transition-all duration-700" />
            <div className="relative border border-amber-400/25 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                title="ÉP BIỂN SỐ ĐỆ NHẤT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9438986598775!2d106.70067060516612!3d10.738807354787806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc4f33014f5%3A0xdcf65536c8e1f497!2zw4lwIEJp4buDbiBT4buRIMSQ4buHIE5o4bqldA!5e0!3m2!1svi!2s!4v1765463506586!5m2!1svi!2s"
                width="100%"
                height="520"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90 transition"
            >
              Mở Google Maps (đi đường)
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center pt-10 border-t border-amber-500/15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-sm" />
            ))}
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            © 2025 <span className="font-semibold text-amber-300">ÉP BIỂN SỐ ĐỆ NHẤT</span> — Tận tâm • Uy tín • Chất lượng
          </p>
        </motion.div>
      </div>
    </section>
  );
}
