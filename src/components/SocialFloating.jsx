import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function SocialFloating() {
  return (
    <div className="fixed bottom-20 right-6 flex flex-col gap-4 z-50">

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/17Y8cWR9aF/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform"
      >
        <FaFacebookF size={20} />
        <span className="absolute inset-0 rounded-full animate-ping bg-blue-600 opacity-50"></span>
      </a>

      {/* Zalo */}
      <a
        href="https://zalo.me/0797910179"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-cyan-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform"
      >
        <SiZalo size={20} />
        <span className="absolute inset-0 rounded-full animate-ping bg-cyan-400 opacity-50"></span>
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@epbiensodenhat?_r=1&_t=ZS-925uZL23U5o"
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-black text-white p-3 rounded-full shadow-lg hover:scale-110 transition transform"
      >
        <FaTiktok size={20} />
        <span className="absolute inset-0 rounded-full animate-ping bg-gray-700 opacity-40"></span>
      </a>

    </div>
  );
}

export default SocialFloating;
