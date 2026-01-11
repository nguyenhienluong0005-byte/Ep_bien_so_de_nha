import { FaFacebookF, FaPhoneAlt, FaMapMarkerAlt, FaTiktok } from "react-icons/fa";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cPNwc5zueyXv4muG7";
const FACEBOOK_URL = "https://www.facebook.com/share/17Y8cWR9aF/?mibextid=wwXIfr";
const TIKTOK_URL = "https://www.tiktok.com/@epbiensodenhat?_r=1&_t=ZS-925uZL23U5o";
const HOTLINE_TEL = "0797910179";
const HOTLINE_DISPLAY = "07979.101.79";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white pb-24"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            Liên hệ
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Đệ Nhất Ép Biển Số
          </h2>

          <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
            Chọn nút bạn muốn: Chỉ đường (Google Maps), Facebook hoặc TikTok.
          </p>
        </div>

        {/* Info + Actions */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 items-start">
          {/* Card thông tin */}
          <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-900">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-900">Địa điểm</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  Mở Google Maps (Chỉ đường)
                </a>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl border border-neutral-200 bg-white flex items-center justify-center text-neutral-900">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-sm font-semibold text-neutral-900">Hotline</p>

                <a
                  href={`tel:${HOTLINE_TEL}`}
                  className="mt-1 inline-flex text-sm text-neutral-600 hover:text-neutral-900 underline underline-offset-4"
                >
                  {HOTLINE_DISPLAY}
                </a>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              {/* Chỉ đường -> Maps */}
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
              >
                <FaMapMarkerAlt /> Chỉ đường
              </a>

              {/* Facebook -> Facebook */}
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
              >
                <FaFacebookF /> Facebook
              </a>

              {/* TikTok -> TikTok */}
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
              >
                <FaTiktok /> TikTok
              </a>
            </div>

            {/* Nút gọi riêng */}
            <div className="mt-3">
              <a
                href={`tel:${HOTLINE_TEL}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-neutral-300 text-neutral-900 text-sm font-semibold hover:bg-neutral-100 transition w-full sm:w-auto"
              >
                <FaPhoneAlt /> Gọi ngay: {HOTLINE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200">
              <p className="text-sm font-semibold text-neutral-900">Bản đồ</p>
              <p className="text-xs text-neutral-500 mt-1">
                Nếu bản đồ không hiển thị, hãy bấm “Chỉ đường”.
              </p>
            </div>

            <div className="w-full aspect-[16/11] bg-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.973569587438!2d106.70067060516612!3d10.738807354787806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc4f33014f5%3A0xdcf65536c8e1f497!2zw4lwIEJp4buDbiBT4buRIMSQ4buHIE5o4bqldA!5e0!3m2!1svi!2s!4v1765462444589!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Đệ Nhất Ép Biển Số - Bản đồ"
                className="w-full h-full"
              />
            </div>

            <div className="p-4">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition"
              >
                <FaMapMarkerAlt /> Mở Google Maps
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-neutral-500">
          © 2025 ĐỆ NHẤT ÉP BIỂN SỐ — Tận tâm · Uy tín · Chất lượng.
        </p>
      </div>
    </section>
  );
}

export default Contact;
