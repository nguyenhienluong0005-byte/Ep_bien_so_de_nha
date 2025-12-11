import { FaFacebookF, FaPhoneAlt, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-indigo-700 via-indigo-800 to-indigo-900 text-white text-center px-6"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Tiêu đề */}
      <h2 className="text-4xl font-bold mb-6 text-yellow-400">Liên Hệ Với Chúng Tôi</h2>

      {/* Thông tin liên hệ */}
      <div className="max-w-3xl mx-auto mb-10 space-y-3 text-lg">
        <p>
          <FaMapMarkerAlt className="inline-block mb-1 text-yellow-400 mr-2" />
          <span>Đệ Nhất Ép Biển Số</span>
        </p>
        <p>
          <FaPhoneAlt className="inline-block mb-1 text-yellow-400 mr-2" />
          <a
            href="tel:0797910179"
            className="hover:underline text-yellow-300 font-semibold"
          >
            07979.101.79
          </a>
        </p>
      </div>

      {/* Nút liên hệ mạng xã hội */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/share/17Y8cWR9aF/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
        >
          <FaFacebookF /> Facebook
        </a>

        {/* TIKTOK */}
        <a
          href="https://www.tiktok.com/@epbiensodenhat?_r=1&_t=ZS-925uZL23U5o"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition transform hover:scale-105"
        >
          <FaTiktok /> TikTok
        </a>

        {/* CALL */}
        <a
          href="tel:0797910179"
          className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition transform hover:scale-105"
        >
          <FaPhoneAlt /> Gọi Ngay
        </a>
      </div>

      {/* Google Map nhúng */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.973569587438!2d106.70067060516612!3d10.738807354787806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc4f33014f5%3A0xdcf65536c8e1f497!2zw4lwIEJp4buDbiBT4buRIMSQ4buHIE5o4bqldA!5e0!3m2!1svi!2s!4v1765462444589!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Đệ Nhất Ép Biển Số - Bản đồ"
        ></iframe>
      </div>

      {/* Footer */}
      <p className="mt-10 text-sm text-gray-300">
        © 2025 ĐỆ NHẤT ÉP BIỂN SỐ — Tận tâm – Uy tín – Chất lượng.
      </p>
    </section>
  );
}

export default Contact;
