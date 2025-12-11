import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaPhoneAlt, FaMapMarkerAlt, FaStar, FaShieldAlt, FaClock, FaAward } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-hidden"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[150px] animate-pulse delay-1000" />
      </div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-5"
        style={{ backgroundImage: "url('/cuahang.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/90 to-slate-900" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-md border border-amber-400/30 rounded-full px-6 py-3 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
          >
            <FaStar className="text-amber-400 text-lg" />
            <span className="text-amber-300 font-semibold tracking-wider text-sm uppercase">
              Liên Hệ Ngay Hôm Nay
            </span>
            <FaStar className="text-amber-400 text-lg" />
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl block mb-3">
              ÉP BIỂN SỐ ĐỘ NHẤT
            </span>
            <span className="text-white text-3xl md:text-4xl font-light">
              Hỗ Trợ & Tư Vấn 24/7
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <FaStar className="text-amber-400 text-2xl" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng phục vụ quý khách hàng với dịch vụ{" "}
            <span className="font-bold text-amber-400">ép & phục hồi biển số chuyên nghiệp</span>
            {" "}– nhanh chóng – chuẩn quy định Bộ GTVT.
          </p>
        </motion.div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {/* Địa chỉ Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 hover:border-red-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-red-500/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaMapMarkerAlt className="text-5xl text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4">Địa Chỉ</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tại cửa hàng hoặc nhận ép tận nơi
                  <br />
                  <span className="text-sm text-gray-400 italic mt-2 block">Xem bản đồ bên dưới</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hotline Card */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-green-500/10 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <FaPhoneAlt className="text-5xl text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4">Hotline</h3>
                <a 
                  href="tel:0797910179"
                  className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
                >
                  0797 910 179
                </a>
                <p className="text-sm text-gray-400 mt-3">Tư vấn & hỗ trợ 24/7</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media Card */}
          <motion.div
            className="group relative md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 hover:border-blue-400/40 transition-all duration-500 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-blue-500/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500">
                  <FaFacebook className="text-5xl text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-amber-300 mb-6">
                  Kết Nối Với Chúng Tôi
                </h3>
                <div className="flex flex-col gap-4 w-full max-w-xs">
                  <motion.a
                    href="https://www.facebook.com/share/17Y8cWR9aF/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaFacebook className="text-xl" />
                    <span>Facebook</span>
                  </motion.a>

                  <motion.a
                    href="https://zalo.me/0797910179"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-sky-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-3-8.5h6v1h-6v-1z"/>
                    </svg>
                    <span>Zalo</span>
                  </motion.a>

                  <motion.a
                    href="https://www.tiktok.com/@epbiensodenhat?_r=1&_t=ZS-925uZL23U5o"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-gray-900 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaTiktok className="text-xl" />
                    <span>TikTok</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: FaShieldAlt, title: "Bảo Hành", desc: "24 tháng" },
            { icon: FaClock, title: "Nhanh Chóng", desc: "1-2 giờ" },
            { icon: FaAward, title: "Chất Lượng", desc: "Chuẩn ISO" },
            { icon: FaStar, title: "Uy Tín", desc: "Hàng đầu" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 text-center hover:border-amber-400/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Icon className="text-4xl text-amber-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                <p className="text-amber-300 font-semibold">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Google Map Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Tìm Chúng Tôi
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Ghé thăm xưởng hoặc liên hệ để được hỗ trợ tận nơi
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-all duration-700" />
            
            <div className="relative border-4 border-amber-400/30 rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                title="ÉP BIỂN SỐ ĐỘ NHẤT"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9438986598775!2d106.70067060516612!3d10.738807354787806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc4f33014f5%3A0xdcf65536c8e1f497!2zw4lwIEJp4buDbiBT4buRIMSQ4buHIE5o4bqldA!5e0!3m2!1svi!2s!4v1765463506586!5m2!1svi!2s"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center pt-12 border-t border-amber-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-amber-400 text-lg" />
            ))}
          </div>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            © 2025 <span className="font-bold text-amber-400">ÉP BIỂN SỐ ĐỘ NHẤT</span>
            <br />
            Dịch vụ ép & phục hồi biển số chuyên nghiệp – uy tín hàng đầu
          </p>
        </motion.div>
      </div>
    </section>
  );
}