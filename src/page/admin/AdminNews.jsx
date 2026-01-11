// src/page/admin/AdminNews.jsx
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

const btnPrimaryBase =
  "rounded-xl px-4 py-3 text-sm font-semibold transition";
const btnPrimaryEnabled =
  "bg-neutral-900 text-white hover:bg-neutral-800";
const btnPrimaryDisabled =
  "bg-neutral-300 text-neutral-600 cursor-not-allowed";

const btnSoft =
  "rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-neutral-50 transition";
const btnDanger =
  "rounded-xl bg-red-600 text-white px-4 py-3 text-sm font-semibold hover:bg-red-700 transition";

const CATEGORIES = [
  "Phục Hồi",
  "Công Nghệ",
  "Vật Liệu",
  "Thợ Nghề",
  "Quy Trình",
  "Bảo Hành",
  "Kiến Thức",
  "Đánh Giá",
];

function todayVN() {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function makeDescFallback(desc, content) {
  const src = (desc || content || "").trim();
  if (!src) return "";
  return src.length > 160 ? src.slice(0, 160) + "…" : src;
}

export default function AdminNews() {
  const [items, setItems] = useState([]);
  const [openPreview, setOpenPreview] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [form, setForm] = useState({
    id: null,
    title: "",
    category: "Phục Hồi",
    date: todayVN(),
    img: "",
    desc: "",
    content: "",
  });

  const isEditing = !!form.id;

  useEffect(() => {
    setLoading(true);
    setErrMsg("");

    const qNews = query(collection(db, "news"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(
      qNews,
      (snap) => {
        setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setErrMsg(err?.message || "Không tải được dữ liệu.");
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  // ✅ CHỈ CẦN title + img (desc không bắt buộc)
  const canSave = form.title.trim() && form.img.trim();

  const reset = () => {
    setForm({
      id: null,
      title: "",
      category: "Phục Hồi",
      date: todayVN(),
      img: "",
      desc: "",
      content: "",
    });
    setOpenPreview(null);
    setErrMsg("");
  };

  const save = async () => {
    if (!canSave || saving) return;

    setSaving(true);
    setErrMsg("");

    try {
      const title = form.title.trim();
      const img = form.img.trim();
      const content = form.content.trim();
      const desc = makeDescFallback(form.desc, content); // ✅ fallback desc
      const payload = {
        title,
        category: form.category,
        date: (form.date || "").trim() || todayVN(),
        img,
        desc,
        content: content || desc, // ✅ content fallback
        updatedAt: serverTimestamp(),
      };

      if (!form.id) {
        await addDoc(collection(db, "news"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
      } else {
        await updateDoc(doc(db, "news", form.id), payload);
      }

      reset();
    } catch (err) {
      console.error(err);
      setErrMsg(err?.message || "Lỗi đăng/sửa bài viết");
      alert(err?.message || "Lỗi đăng/sửa bài viết");
    } finally {
      setSaving(false);
    }
  };

  const edit = (item) => {
    setErrMsg("");
    setForm({
      id: item.id,
      title: item.title || "",
      category: item.category || "Phục Hồi",
      date: item.date || todayVN(),
      img: item.img || "",
      desc: item.desc || "",
      content: item.content || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const remove = async (id) => {
    if (!window.confirm("Xóa bài viết này nhé?")) return;

    try {
      await deleteDoc(doc(db, "news", id));
    } catch (err) {
      console.error(err);
      setErrMsg(err?.message || "Lỗi xóa bài viết");
      alert(err?.message || "Lỗi xóa bài viết");
    }
  };

  const stats = useMemo(() => ({ total: items.length }), [items.length]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900">
              Admin • Tin tức
            </h1>
            <p className="text-sm text-neutral-600 mt-1">
              Thêm / sửa / xóa bài viết (Firestore collection: <b>news</b>)
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm">
            Tổng bài: <b>{stats.total}</b>
          </div>
        </div>

        {errMsg && (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errMsg}
            <div className="mt-1 text-xs text-red-600">
              Nếu báo “Missing or insufficient permissions” thì bạn chưa đăng nhập đúng admin (Firebase Auth) hoặc rules chưa cho phép.
            </div>
          </div>
        )}

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* Form */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-bold text-neutral-900">
              {isEditing ? "Sửa bài viết" : "Thêm bài viết"}
            </h2>

            <div className="mt-5 space-y-3">
              <input
                className={inputClass}
                placeholder="Tiêu đề (*)"
                value={form.title}
                onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
              />

              <div className="grid sm:grid-cols-2 gap-3">
                <select
                  className={inputClass}
                  value={form.category}
                  onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <input
                  className={inputClass}
                  placeholder="Ngày (dd/mm/yyyy)"
                  value={form.date}
                  onChange={(e) => setForm((s) => ({ ...s, date: e.target.value }))}
                />
              </div>

              <input
                className={inputClass}
                placeholder="URL ảnh thumbnail (*)"
                value={form.img}
                onChange={(e) => setForm((s) => ({ ...s, img: e.target.value }))}
              />

              <textarea
                className={`${inputClass} min-h-[110px]`}
                placeholder="Mô tả ngắn (không bắt buộc — nếu bỏ trống sẽ lấy từ nội dung)"
                value={form.desc}
                onChange={(e) => setForm((s) => ({ ...s, desc: e.target.value }))}
              />

              <textarea
                className={`${inputClass} min-h-[160px]`}
                placeholder="Nội dung chi tiết (không bắt buộc)"
                value={form.content}
                onChange={(e) => setForm((s) => ({ ...s, content: e.target.value }))}
              />

              <div className="flex flex-wrap gap-2 mt-4 items-center">
                <button
                  className={`${btnPrimaryBase} ${
                    canSave && !saving ? btnPrimaryEnabled : btnPrimaryDisabled
                  }`}
                  onClick={save}
                  disabled={!canSave || saving}
                  type="button"
                >
                  {saving ? "Đang lưu..." : isEditing ? "Lưu thay đổi" : "Đăng bài"}
                </button>

                <button className={btnSoft} onClick={reset} type="button">
                  Xóa form
                </button>

                {form.img && (
                  <button
                    className={btnSoft}
                    onClick={() =>
                      setOpenPreview({
                        title: form.title || "Preview",
                        category: form.category,
                        date: form.date,
                        img: form.img,
                        desc: form.desc,
                        content: form.content,
                      })
                    }
                    type="button"
                  >
                    Xem thử
                  </button>
                )}
              </div>

              {!canSave && (
                <div className="text-xs text-neutral-500">
                  (*) Cần nhập <b>Tiêu đề</b> và <b>URL ảnh</b> thì mới đăng được.
                </div>
              )}
            </div>

            {form.img && (
              <div className="mt-6 rounded-2xl border border-neutral-200 overflow-hidden">
                <div className="aspect-[16/9] bg-neutral-100">
                  <img src={form.img} alt="preview" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </div>

          {/* List */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <h2 className="text-lg font-bold text-neutral-900">Danh sách bài viết</h2>

            <div className="mt-5 space-y-3">
              {loading ? (
                <div className="text-sm text-neutral-600">Đang tải dữ liệu...</div>
              ) : items.length ? (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-neutral-200 p-4 flex gap-4 items-center"
                  >
                    <div className="w-28 h-20 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-100 flex-shrink-0">
                      <img src={item.img} alt="thumb" className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[11px] px-2 py-1 rounded-full border border-neutral-200 bg-white">
                          {item.category || "Tin"}
                        </span>
                        <span className="text-[11px] text-neutral-500">{item.date}</span>
                      </div>

                      <div className="mt-1 font-semibold text-neutral-900 line-clamp-1">
                        {item.title}
                      </div>
                      <div className="text-xs text-neutral-500 line-clamp-1">{item.id}</div>
                    </div>

                    <div className="flex gap-2">
                      <button className={btnSoft} onClick={() => setOpenPreview(item)} type="button">
                        Xem
                      </button>
                      <button className={btnSoft} onClick={() => edit(item)} type="button">
                        Sửa
                      </button>
                      <button className={btnDanger} onClick={() => remove(item.id)} type="button">
                        Xóa
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-sm text-neutral-600">Chưa có bài nào.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preview modal */}
      {openPreview && (
        <div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenPreview(null);
          }}
        >
          <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden border border-neutral-200">
            <button
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold"
              onClick={() => setOpenPreview(null)}
              type="button"
            >
              ✕
            </button>

            <div className="relative">
              <img src={openPreview.img} alt="cover" className="w-full h-64 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="text-xs px-3 py-1 rounded-full border border-neutral-200 bg-white">
                    {openPreview.category}
                  </span>
                  <span className="text-xs text-neutral-500">{openPreview.date}</span>
                </div>
                <h3 className="mt-3 text-xl md:text-2xl font-black text-neutral-900">
                  {openPreview.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-700 whitespace-pre-line">
                  {openPreview.content || openPreview.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
