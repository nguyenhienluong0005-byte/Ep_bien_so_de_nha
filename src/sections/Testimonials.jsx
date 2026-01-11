import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/cPNwc5zueyXv4muG7";

  useEffect(() => {
    const qRef = query(collection(db, "customer_reviews"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qRef, (snap) => {
      setReviews(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  // ESC + arrows + lock scroll when modal open
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight" && activeIndex !== null) {
        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = activeIndex !== null ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeIndex, reviews.length]);

  const active = activeIndex !== null ? reviews[activeIndex] : null;

  return (
    <section className="bg-white pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            Đánh giá khách hàng
          </div>

          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
            Hình ảnh phản hồi thực tế
          </h2>

          <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
            Nhấn vào ảnh để xem phóng to.
          </p>
        </div>

        {reviews.length === 0 ? (
          <div className="mt-10 text-sm text-neutral-600">
            Chưa có đánh giá nào. Admin vào thêm sau nhé.
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {reviews.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveIndex(i)}
                className="
                  group text-left rounded-2xl border border-neutral-200 bg-white
                  overflow-hidden shadow-sm hover:shadow-md transition
                  focus:outline-none focus:ring-2 focus:ring-neutral-900/20
                "
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={img.url}
                    alt={`Review ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-neutral-500">
                      {"★".repeat(Number(img.rating || 5))}
                    </div>
                    <span className="text-[11px] text-neutral-500">Nhấn để xem</span>
                  </div>

                  <p className="mt-2 text-sm text-neutral-700 leading-relaxed line-clamp-2">
                    “{img.text || "Đánh giá"}”
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="grid md:grid-cols-[1fr_340px] gap-3 md:gap-4">
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <img
                  src={active.url}
                  alt="Review preview"
                  className="w-full h-[72vh] md:h-[70vh] object-contain bg-black"
                  draggable={false}
                />

                <button
                  onClick={() => setActiveIndex(null)}
                  className="absolute top-3 right-3 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white text-lg flex items-center justify-center shadow-lg shadow-red-600/25"
                  aria-label="Đóng"
                  type="button"
                >
                  ✕
                </button>

                <button
                  onClick={() =>
                    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full"
                  aria-label="Ảnh trước"
                  type="button"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % reviews.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full"
                  aria-label="Ảnh sau"
                  type="button"
                >
                  ›
                </button>

                <div className="md:hidden absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="w-full py-3 rounded-xl bg-white text-black text-sm font-semibold"
                    type="button"
                  >
                    Đóng
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 text-white p-4 md:p-5">
                <div className="text-xs text-white/70">
                  {"★".repeat(Number(active.rating || 5))}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-white/90">
                  “{active.text}”
                </p>

                <div className="mt-6 text-xs text-white/60">
                  (PC: ESC để đóng — ← → để chuyển)
                </div>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-xs underline text-white/80 hover:text-white"
                >
                  Mở Google Maps (Chỉ đường)
                </a>

                <button
                  onClick={() => setActiveIndex(null)}
                  className="hidden md:inline-flex mt-6 px-4 py-2 rounded-full border border-white/20 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
                  type="button"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
