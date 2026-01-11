import { Link, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaHome,
  FaTools,
  FaRedoAlt,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";

const links = [
  { to: "/", label: "Trang chủ", icon: <FaHome /> },
  { to: "/products", label: "Sản phẩm", icon: <FaTools /> },
  { to: "/restore", label: "Phục hồi", icon: <FaRedoAlt /> },
  { to: "/news", label: "Tin tức", icon: <FaNewspaper /> },
  { to: "/contact", label: "Liên hệ", icon: <FaEnvelope /> },
];

export default function NavBar() {
  const location = useLocation();

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg font-medium text-neutral-900">
              Ép Biển Số Đệ Nhất
            </span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative pb-1 transition-colors ${
                    active
                      ? "text-neutral-900"
                      : "text-neutral-500 hover:text-neutral-900"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-neutral-900" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CALL */}
          <a
            href="tel:0797910179"
            className="hidden md:flex items-center gap-2 text-sm text-neutral-900 border border-neutral-300 px-4 py-2 rounded-full hover:bg-neutral-100 transition"
          >
            <FaPhoneAlt className="text-xs" />
            07979 101 79
          </a>
        </div>
      </header>

      {/* ================= MOBILE NAV ================= */}
      <nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-neutral-200 md:hidden">
        <ul className="flex justify-around items-center h-14 text-xs">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`flex flex-col items-center gap-1 ${
                    active
                      ? "text-neutral-900"
                      : "text-neutral-400"
                  }`}
                >
                  <div className="text-lg">{l.icon}</div>
                  <span>{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
