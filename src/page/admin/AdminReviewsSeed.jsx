import { useEffect, useMemo, useState } from "react";
import { db } from "../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

const inputClass =
  "w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900/10";
const btnPrimary =
  "rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition disabled:opacity-60 disabled:cursor-not-allowed";
const btnSoft =
  "rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-neutral-50 transition";
const btnDanger =
  "rounded-xl bg-red-600 text-white px-4 py-3 text-sm font-semibold hover:bg-red-700 transition";

export default function AdminReviews() {
  const [items, setItems] = useState([]);
  const [preview, setPreview] = useState(null); // item
  const [form, setForm] = useState({
    id: null,
    url: "",
    text: "",
    rating: 5,
  });

  const isEditing = !!form.id;
  const canSave = form.url.trim() && form.text.trim() && Number(form.rating) >= 1;

  useEffect(() => {
    const qRef = query(collection(db, "customer_reviews"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qRef, (snap) => {
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  const reset = () =>
    setForm({
      id: null,
      url: "",
      text: "",
      rating: 5,
    });

  const save = async () => {
    if (!canSave) return;

    const payload = {
      url: form.url.trim(),
      text: form.text.trim(),
      rating: Number(form.rating) || 5,
      updatedAt: serverTimestamp(),
    };

    try {
      if (!form.id) {
        await addDoc(collection(db, "customer_reviews"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      } else {
        await updateDoc(doc(db, "customer_reviews", form.id), payload);
      }
      reset();
    } catch (err) {
      console.error(err);
      alert(err?.message || "Lỗi lưu đánh giá");
    }
  };

  const edit = (item) => {
    setForm({
      id: item.id,
      url: item.url || "",
      text: item.text || "",
      rating: item.rating ?? 5,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = async (id) => {
    if (!window.confirm("Xoá đánh giá này nhé?")) return;
    try {
      await deleteDoc(doc(db, "customer_reviews", id));
    } catch (err) {
      console.error(err);
      alert(err?.message || "Lỗi xoá đánh giá");
    }
  };

  const stats = useMemo(() => ({ total: items.length }), [items.length]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900">
              Admin • Đánh giá khách hàng
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              Thêm / sửa / xoá đánh giá (URL ảnh + nội dung + sao).
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm">
            Tổng đánh giá: <b>{stats.total}</b>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-bold text-neutral-900">
              {isEditing ? "Sửa đánh giá" : "Thêm đánh giá"}
            </h2>

            <div className="mt-5 space-y-3">
              <input
                className={inputClass}
                placeholder="URL ảnh (postimg / drive public ...)"
                value={form.url}
                onChange={(e) => setForm((s) => ({ ...s, url: e.target.value }))}
              />

              <textarea
                className={`${inputClass} min-h-[120px]`}
                placeholder='Nội dung (vd: "Dịch vụ tuyệt vời...")'
                value={form.text}
                onChange={(e) => setForm((s) => ({ ...s, text: e.target.value }))}
              />

              <div className="grid grid-cols-2 gap-3">
                <select
                  className={inputClass}
                  value={form.rating}
                  onChange={(e) => setForm((s) => ({ ...s, rating: Number(e.target.value) }))}
                >
                  {[5, 4, 3, 2, 1].map((n) => (
                    <option key={n} value={n}>
                      {n} sao
                    </option>
                  ))}
                </select>

                <button
                  className={btnSoft}
                  onClick={() =>
                    setPreview({
                      url: form.url,
                      text: form.text,
                      rating: form.rating,
                    })
                  }
                  disabled={!form.url.trim()}
                  type="button"
                >
                  Xem thử
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <button className={btnPrimary} onClick={save} disabled={!canSave} type="button">
                  {isEditing ? "Lưu thay đổi" : "Thêm mới"}
                </button>
                <button className={btnSoft} onClick={reset} type="button">
                  Xoá form
                </button>
              </div>
            </div>

            {form.url && (
              <div className="mt-6 rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="aspect-square bg-neutral-100">
                  <img src={form.url} alt="preview" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* List */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-bold text-neutral-900">Danh sách đánh giá</h2>

            <div className="mt-5">
              {items.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-neutral-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        className="w-full text-left"
                        onClick={() => setPreview(item)}
                      >
                        <div className="aspect-square bg-neutral-100">
                          <img
                            src={item.url}
                            alt="review"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>

                      <div className="p-3">
                        <div className="text-xs text-neutral-500">
                          {"★".repeat(Number(item.rating || 5))}
                        </div>
                        <div className="mt-1 text-sm text-neutral-800 line-clamp-2">
                          “{item.text || "Đánh giá"}”
                        </div>

                        <div className="mt-3 flex gap-2">
                          <button className={btnSoft} onClick={() => edit(item)} type="button">
                            Sửa
                          </button>
                          <button className={btnDanger} onClick={() => remove(item.id)} type="button">
                            Xoá
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-neutral-600">Chưa có đánh giá nào.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preview modal */}
      {preview && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setPreview(null);
          }}
        >
          <div className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden border border-neutral-200">
            <button
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold"
              onClick={() => setPreview(null)}
              type="button"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-[1fr_340px]">
              <div className="bg-black">
                <img
                  src={preview.url}
                  alt="review"
                  className="w-full h-[80vh] object-contain bg-black"
                  draggable={false}
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-neutral-600">
                  {"★".repeat(Number(preview.rating || 5))}
                </div>
                <p className="mt-3 text-neutral-900 leading-relaxed">“{preview.text}”</p>
                <div className="mt-6 text-xs text-neutral-500">{preview.id}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
