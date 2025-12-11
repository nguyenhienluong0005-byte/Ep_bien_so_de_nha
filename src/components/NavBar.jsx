import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaSearch,
  FaHome,
  FaTools,
  FaRedoAlt,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { to: "/", label: "TRANG CHỦ", icon: <FaHome /> },
  { to: "/products", label: "SẢN PHẨM", icon: <FaTools /> },
  { to: "/restore", label: "PHỤC HỒI", icon: <FaRedoAlt /> },
  { to: "/news", label: "TIN TỨC", icon: <FaNewspaper /> },
  { to: "/contact", label: "LIÊN HỆ", icon: <FaEnvelope /> },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <>
      {/* ================= HEADER (1 HÀNG) ================= */}
      <header className="bg-white backdrop-blur-xl border-b border-blue-100/50 md:sticky md:top-0 md:z-50 shadow-lg">
        <div
          className="
            flex items-center justify-between 
            px-4 md:px-6 
            py-3 md:py-4 
            max-w-7xl mx-auto
            gap-3
          "
        >
          {/* LEFT — LOGO + TITLE */}
          <div className="flex items-center gap-3 md:gap-4 flex-1">
            <Link
              to="/"
              className="group relative hover:scale-105 transition-all duration-300"
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 md:w-14 md:h-14 object-contain drop-shadow-lg"
              />
            </Link>

            <div className="leading-tight">
              <h1 className="text-base md:text-2xl font-extrabold text-blue-900">
                Ép Biển Số Đệ Nhất
              </h1>

              <p className="text-[10px] md:text-sm text-gray-600">
                Phục hồi biển số cũ - Đẹp như mới ✨
              </p>
            </div>
          </div>

          {/* RIGHT — HOTLINE */}
          <a
            href="tel:0797910179"
            className="
              flex items-center gap-2 
              px-3 md:px-5 
              py-2 md:py-3 
              bg-blue-700 text-white rounded-xl shadow-lg 
              hover:scale-105 transition-all duration-300
              whitespace-nowrap
            "
          >
            <div className="bg-white/20 p-2 md:p-3 rounded-full">
              <FaPhoneAlt className="text-white text-sm md:text-xl" />
            </div>

            <div className="leading-tight text-left">
              <p className="text-[9px] md:text-xs text-blue-100">Tư vấn 24/7</p>

              <span className="text-sm md:text-xl font-bold">
                07979 101 79
              </span>
            </div>
          </a>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <nav className="hidden md:block bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_3s_infinite]"></div>

          <div className="relative flex justify-center items-center space-x-1 h-14 font-semibold tracking-wide max-w-7xl mx-auto">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`group relative px-6 py-3 transition-all duration-300 ${
                  location.pathname === l.to
                    ? "text-yellow-400"
                    : "text-white/90 hover:text-white"
                }`}
              >
                <span
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    location.pathname === l.to
                      ? "bg-yellow-400/20"
                      : "bg-white/0 group-hover:bg-white/10"
                  }`}
                ></span>

                {location.pathname === l.to && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-yellow-400 rounded-t-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"></span>
                )}

                <span className="relative flex items-center gap-2">
                  {l.label}
                </span>
              </Link>
            ))}

            <button className="ml-4 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group">
              <FaSearch className="text-white/90 group-hover:text-yellow-400 transition-colors" />
            </button>
          </div>
        </nav>
      </header>

      {/* ================= MOBILE BOTTOM NAV ================= */}
      <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white to-transparent backdrop-blur-2xl"></div>
        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-8px_30px_rgba(0,0,0,0.12)]"></div>

        <div className="relative max-w-md mx-auto">
          {/* NÚT GIỮA TO — PHỤC HỒI */}
          <Link
            to="/restore"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-7 z-50 group"
          >
            <div className="relative flex items-center justify-center w-18 h-18">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-xl opacity-60 animate-pulse"></div>

              <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 shadow-2xl ring-4 ring-white group-hover:scale-110 transition-all">
                <FaRedoAlt className="text-white text-2xl drop-shadow-md" />
              </div>

              <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-30"></div>
            </div>
          </Link>

          {/* 4 NÚT NHỎ 2 BÊN */}
          <ul className="relative flex justify-around items-center text-xs py-2 pb-2">

            {links.slice(0, 2).map((l, i) => (
              <li key={i} className="flex-1">
                <Link
                  to={l.to}
                  className={`flex flex-col items-center transition-all ${
                    location.pathname === l.to
                      ? "text-blue-700 scale-105"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <div className="text-xl mb-1.5">{l.icon}</div>
                  <span className="text-[10px] font-medium">{l.label}</span>
                </Link>
              </li>
            ))}

            <li className="flex-1"></li>

            {links.slice(3).map((l, i) => (
              <li key={i + 3} className="flex-1">
                <Link
                  to={l.to}
                  className={`flex flex-col items-center transition-all ${
                    location.pathname === l.to
                      ? "text-blue-700 scale-105"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <div className="text-xl mb-1.5">{l.icon}</div>
                  <span className="text-[10px] font-medium">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </>
  );
}
