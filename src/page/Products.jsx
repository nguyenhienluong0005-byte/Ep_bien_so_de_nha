import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

import { db } from "../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Products() {
  // Data from Firestore
  const [items, setItems] = useState([]); // before/after docs: {id, before, after, ...}
  const [realImages, setRealImages] = useState([]); // real docs: {id, url, ...}

  // Modal state:
  // { type: 'pair', index } | { type: 'real', index } | null
  const [modal, setModal] = useState(null);

  // Mobile: đang xem TRƯỚC hay SAU trong modal pair
  const [mobileSide, setMobileSide] = useState("after"); // "before" | "after"
  const closeModal = () => setModal(null);

  const goPrev = () => {
    if (!modal) return;
    if (modal.type === "pair") {
      setModal((m) => ({ ...m, index: (m.index - 1 + items.length) % items.length }));
      setMobileSide("after");
    } else {
      setModal((m) => ({ ...m, index: (m.index - 1 + realImages.length) % realImages.length }));
    }
  };

  const goNext = () => {
    if (!modal) return;
    if (modal.type === "pair") {
      setModal((m) => ({ ...m, index: (m.index + 1) % items.length }));
      setMobileSide("after");
    } else {
      setModal((m) => ({ ...m, index: (m.index + 1) % realImages.length }));
    }
  };

  const activePair = modal?.type === "pair" ? items[modal.index] : null;
  const activeReal = modal?.type === "real" ? realImages[modal.index] : null;

  // Load Firestore data realtime
  useEffect(() => {
    const q1 = query(collection(db, "beforeAfter"), orderBy("createdAt", "desc"));
    const q2 = query(collection(db, "realImages"), orderBy("createdAt", "desc"));

    const unsub1 = onSnapshot(q1, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    const unsub2 = onSnapshot(q2, (snap) => {
      setRealImages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  // ESC + arrows + lock scroll
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!modal) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = modal ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal, items.length, realImages.length]);

  return (
    <section id="products" className="bg-white">
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              Sản phẩm & thành phẩm
            </div>

            <h1 className="mt-4 text-3xl md:text-4xl font-medium text-neutral-900 tracking-tight">
              Trước / Sau — khác biệt rõ rệt, hoàn thiện gọn & sắc.
            </h1>

            <p className="mt-3 text-sm md:text-base text-neutral-600 leading-relaxed">
              Nhấn vào khung để xem ảnh phóng to. (PC: ← → để chuyển, ESC để đóng)
            </p>
          </motion.div>

          {/* BEFORE/AFTER GRID */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => {
                  setMobileSide("after");
                  setModal({ type: "pair", index: i });
                }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="
                  group text-left rounded-3xl border border-neutral-200 bg-white
                  overflow-hidden shadow-sm hover:shadow-md transition
                  focus:outline-none focus:ring-2 focus:ring-neutral-900/20
                "
              >
                <div className="grid grid-cols-2">
                  {/* Before */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img
                      src={item.before}
                      alt={`Trước ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full bg-white/90 border border-neutral-200 text-neutral-900">
                      TRƯỚC
                    </span>
                  </div>

                  {/* After */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 border-l border-white">
                    <img
                      src={item.after}
                      alt={`Sau ${i + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    <span className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-white/90 border border-neutral-200 text-neutral-900">
                      SAU
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-neutral-900">Mẫu #{i + 1}</p>
                    <span className="text-xs text-neutral-500">Nhấn để phóng to</span>
                  </div>
                  <div className="mt-3 h-px w-0 bg-neutral-900/60 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* REAL IMAGES */}
          <motion.div
            className="mt-16 md:mt-20"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-neutral-900">Hình ảnh thực tế</h2>
            <p className="mt-1 text-sm text-neutral-600">Thành phẩm & quy trình — bấm để xem lớn.</p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {realImages.map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setModal({ type: "real", index: idx })}
                  className="
                    group rounded-2xl border border-neutral-200 bg-white overflow-hidden
                    shadow-sm hover:shadow-md transition
                    focus:outline-none focus:ring-2 focus:ring-neutral-900/20
                  "
                >
                  <div className="relative aspect-square bg-neutral-100 overflow-hidden">
                    <img
                      src={img.url}
                      alt={`Ảnh thực tế ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Contact />
      <Footer />

      {/* MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 md:p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-6xl">
            <button
              onClick={closeModal}
              className="
                absolute -top-12 right-0
                md:top-3 md:right-3
                w-11 h-11
                rounded-full bg-red-600 hover:bg-red-700
                text-white text-lg
                flex items-center justify-center
                shadow-lg shadow-red-600/25
                z-20
              "
              aria-label="Đóng"
              title="Đóng"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-[1fr_340px] gap-3 md:gap-4">
              {/* Main content */}
              <div className="relative rounded-2xl overflow-hidden bg-black">
                {/* Pair: TRƯỚC/SAU */}
                {activePair && (
                  <>
                    {/* MOBILE: 1 ảnh / lần */}
                    <div className="sm:hidden relative">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
                        <div className="flex rounded-full overflow-hidden border border-white/15 bg-black/35 backdrop-blur">
                          <button
                            onClick={() => setMobileSide("before")}
                            className={`px-4 py-2 text-xs font-semibold transition ${
                              mobileSide === "before" ? "bg-white text-black" : "text-white/90"
                            }`}
                          >
                            TRƯỚC
                          </button>
                          <button
                            onClick={() => setMobileSide("after")}
                            className={`px-4 py-2 text-xs font-semibold transition ${
                              mobileSide === "after" ? "bg-white text-black" : "text-white/90"
                            }`}
                          >
                            SAU
                          </button>
                        </div>
                      </div>

                      <img
                        src={mobileSide === "before" ? activePair.before : activePair.after}
                        alt={mobileSide === "before" ? "Trước" : "Sau"}
                        className="w-full h-[82svh] object-contain bg-black"
                        draggable={false}
                      />
                    </div>

                    {/* DESKTOP: 2 ảnh song song */}
                    <div className="hidden sm:grid grid-cols-2">
                      <div className="relative bg-black">
                        <img
                          src={activePair.before}
                          alt="Trước"
                          className="w-full h-[72vh] object-contain bg-black"
                          draggable={false}
                        />
                        <span className="absolute top-3 left-3 text-[11px] px-2.5 py-1 rounded-full bg-white/90 border border-neutral-200 text-neutral-900">
                          TRƯỚC
                        </span>
                      </div>

                      <div className="relative bg-black sm:border-l border-white/10">
                        <img
                          src={activePair.after}
                          alt="Sau"
                          className="w-full h-[72vh] object-contain bg-black"
                          draggable={false}
                        />
                        <span className="absolute top-3 right-3 text-[11px] px-2.5 py-1 rounded-full bg-white/90 border border-neutral-200 text-neutral-900">
                          SAU
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Single image */}
                {activeReal && (
                  <img
                    src={activeReal.url}
                    alt="Ảnh thực tế"
                    className="w-full h-[82svh] sm:h-[72vh] object-contain bg-black"
                    draggable={false}
                  />
                )}

                {/* Prev/Next */}
                <button
                  onClick={goPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full"
                  aria-label="Trước"
                  title="Trước"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full"
                  aria-label="Sau"
                  title="Sau"
                >
                  ›
                </button>

                {/* Mobile bottom close */}
                <div className="md:hidden absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                  <button
                    onClick={closeModal}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold"
                  >
                    Đóng
                  </button>
                </div>
              </div>

              {/* Side info */}
              <div className="rounded-2xl border border-white/10 bg-white/10 text-white p-4 md:p-5">
                <p className="text-sm font-semibold">
                  {modal.type === "pair"
                    ? `Trước / Sau — Mẫu #${modal.index + 1}`
                    : `Ảnh thực tế #${modal.index + 1}`}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Nhấn ‹ › để chuyển ảnh. Mobile: chọn TRƯỚC/SAU ở trên.
                </p>

                <div className="mt-6 text-xs text-white/60">(PC: dùng ← →, ESC)</div>

                <button
                  onClick={closeModal}
                  className="hidden md:inline-flex mt-6 px-4 py-2 rounded-full border border-white/20 text-sm text-white/90 hover:text-white hover:bg-white/10 transition"
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
