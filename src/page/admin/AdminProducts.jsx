// src/page/admin/AdminProducts.jsx
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
  "rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition";
const btnSoft =
  "rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold hover:bg-neutral-50 transition";
const btnDanger =
  "rounded-xl bg-red-600 text-white px-4 py-3 text-sm font-semibold hover:bg-red-700 transition";

export default function AdminProducts() {
  const [tab, setTab] = useState("pair"); // pair | real

  // lists
  const [pairs, setPairs] = useState([]);
  const [reals, setReals] = useState([]);

  // form states
  const [pairForm, setPairForm] = useState({ id: null, title: "", before: "", after: "" });
  const [realForm, setRealForm] = useState({ id: null, title: "", url: "" });

  // preview modal
  const [preview, setPreview] = useState(null); // {type:'pair'|'real', data}

  // load data realtime
  useEffect(() => {
    const qPairs = query(collection(db, "beforeAfter"), orderBy("createdAt", "desc"));
    const qReals = query(collection(db, "realImages"), orderBy("createdAt", "desc"));
    const unsub1 = onSnapshot(qPairs, (snap) => {
      setPairs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    const unsub2 = onSnapshot(qReals, (snap) => {
      setReals(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  const isEditingPair = !!pairForm.id;
  const isEditingReal = !!realForm.id;

  const canSavePair = pairForm.before.trim() && pairForm.after.trim();
  const canSaveReal = realForm.url.trim();

  const resetPair = () => setPairForm({ id: null, title: "", before: "", after: "" });
  const resetReal = () => setRealForm({ id: null, title: "", url: "" });

  // CRUD: pair
  const savePair = async () => {
    if (!canSavePair) return;
    if (!pairForm.id) {
      await addDoc(collection(db, "beforeAfter"), {
        title: pairForm.title.trim() || "",
        before: pairForm.before.trim(),
        after: pairForm.after.trim(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
     await updateDoc(doc(db, "beforeAfter", pairForm.id), {
        title: pairForm.title.trim() || "",
        before: pairForm.before.trim(),
        after: pairForm.after.trim(),
        updatedAt: serverTimestamp(),
      });
    }
    resetPair();
  };

  const editPair = (item) => {
    setTab("pair");
    setPairForm({
      id: item.id,
      title: item.title || "",
      before: item.before || "",
      after: item.after || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removePair = async (id) => {
    if (!confirm("Xóa mẫu Trước/Sau này nhé?")) return;
   await deleteDoc(doc(db, "beforeAfter", id));
  };

  // CRUD: real
  const saveReal = async () => {
  if (!canSaveReal) return;

  try {
    if (!realForm.id) {
      await addDoc(collection(db, "realImages"), {
        title: realForm.title.trim() || "",
        url: realForm.url.trim(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    } else {
      await updateDoc(doc(db, "realImages", realForm.id), {
        title: realForm.title.trim() || "",
        url: realForm.url.trim(),
        updatedAt: serverTimestamp(),
      });
    }
    resetReal();
  } catch (err) {
    console.error(err);
    alert(err?.message || "Lỗi thêm/sửa ảnh thực tế");
  }
};


  const editReal = (item) => {
    setTab("real");
    setRealForm({
      id: item.id,
      title: item.title || "",
      url: item.url || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const removeReal = async (id) => {
    if (!confirm("Xóa hình thực tế này nhé?")) return;
    await deleteDoc(doc(db, "realImages", id));
  };

  const stats = useMemo(
    () => ({
      pairs: pairs.length,
      reals: reals.length,
    }),
    [pairs.length, reals.length]
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-16">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-neutral-900">Admin • Sản phẩm</h1>
            <p className="text-sm text-neutral-600 mt-1">
              Quản lý Trước/Sau & hình ảnh thực tế (nhập URL ảnh).
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm">
              Trước/Sau: <b>{stats.pairs}</b>
            </div>
            <div className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm">
              Ảnh thực tế: <b>{stats.reals}</b>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-8 flex gap-2">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              tab === "pair"
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50"
            }`}
            onClick={() => setTab("pair")}
          >
            Trước / Sau
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              tab === "real"
                ? "bg-neutral-900 text-white border-neutral-900"
                : "bg-white text-neutral-800 border-neutral-200 hover:bg-neutral-50"
            }`}
            onClick={() => setTab("real")}
          >
            Hình ảnh thực tế
          </button>
        </div>

        {/* Form */}
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {tab === "pair" ? (
            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-neutral-900">
                {isEditingPair ? "Sửa mẫu Trước/Sau" : "Thêm mẫu Trước/Sau"}
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Dán link ảnh (postimg / drive public / …). Khuyến nghị ảnh rõ nét.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  className={inputClass}
                  placeholder="Tiêu đề (tuỳ chọn) - ví dụ: Mẫu #1"
                  value={pairForm.title}
                  onChange={(e) => setPairForm((s) => ({ ...s, title: e.target.value }))}
                />
                <input
                  className={inputClass}
                  placeholder="URL ảnh TRƯỚC"
                  value={pairForm.before}
                  onChange={(e) => setPairForm((s) => ({ ...s, before: e.target.value }))}
                />
                <input
                  className={inputClass}
                  placeholder="URL ảnh SAU"
                  value={pairForm.after}
                  onChange={(e) => setPairForm((s) => ({ ...s, after: e.target.value }))}
                />

                <div className="flex flex-wrap gap-2 mt-4">
                  <button className={btnPrimary} onClick={savePair} disabled={!canSavePair}>
                    {isEditingPair ? "Lưu thay đổi" : "Thêm mới"}
                  </button>
                  <button className={btnSoft} onClick={resetPair}>
                    Xóa form
                  </button>
                </div>
              </div>

              {/* quick preview */}
              {(pairForm.before || pairForm.after) && (
                <div className="mt-6 rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden">
                      {pairForm.before ? (
                        <img src={pairForm.before} alt="before" className="w-full h-full object-cover" />
                      ) : null}
                    </div>
                    <div className="aspect-[4/3] bg-neutral-100 overflow-hidden border-l border-white">
                      {pairForm.after ? (
                        <img src={pairForm.after} alt="after" className="w-full h-full object-cover" />
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-neutral-200 bg-white p-6">
              <h2 className="text-lg font-bold text-neutral-900">
                {isEditingReal ? "Sửa ảnh thực tế" : "Thêm ảnh thực tế"}
              </h2>

              <div className="mt-5 space-y-3">
                <input
                  className={inputClass}
                  placeholder="Tiêu đề (tuỳ chọn) - ví dụ: Thành phẩm"
                  value={realForm.title}
                  onChange={(e) => setRealForm((s) => ({ ...s, title: e.target.value }))}
                />
                <input
                  className={inputClass}
                  placeholder="URL ảnh thực tế"
                  value={realForm.url}
                  onChange={(e) => setRealForm((s) => ({ ...s, url: e.target.value }))}
                />

                <div className="flex flex-wrap gap-2 mt-4">
                  <button className={btnPrimary} onClick={saveReal} disabled={!canSaveReal}>
                    {isEditingReal ? "Lưu thay đổi" : "Thêm mới"}
                  </button>
                  <button className={btnSoft} onClick={resetReal}>
                    Xóa form
                  </button>
                </div>
              </div>

              {realForm.url && (
                <div className="mt-6 rounded-2xl border border-neutral-200 overflow-hidden">
                  <div className="aspect-square bg-neutral-100">
                    <img src={realForm.url} alt="real" className="w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* List */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-neutral-900">
                  Danh sách {tab === "pair" ? "Trước/Sau" : "Ảnh thực tế"}
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  Bấm “Xem” để preview, “Sửa”, “Xóa”.
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {tab === "pair" ? (
                pairs.length ? (
                  pairs.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-neutral-200 p-4 flex gap-4 items-center"
                    >
                      <div className="grid grid-cols-2 w-28 h-20 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 flex-shrink-0">
                        <img src={item.before} alt="before" className="w-full h-full object-cover" />
                        <img src={item.after} alt="after" className="w-full h-full object-cover border-l border-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-neutral-900 truncate">
                          {item.title || "Mẫu Trước/Sau"}
                        </div>
                        <div className="text-xs text-neutral-500 truncate">{item.id}</div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          className={btnSoft}
                          onClick={() => setPreview({ type: "pair", data: item })}
                        >
                          Xem
                        </button>
                        <button className={btnSoft} onClick={() => editPair(item)}>
                          Sửa
                        </button>
                        <button className={btnDanger} onClick={() => removePair(item.id)}>
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-neutral-600">Chưa có mẫu nào.</div>
                )
              ) : reals.length ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {reals.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-neutral-200 overflow-hidden">
                      <button
                        className="w-full text-left"
                        onClick={() => setPreview({ type: "real", data: item })}
                        type="button"
                      >
                        <div className="aspect-square bg-neutral-100">
                          <img src={item.url} alt="real" className="w-full h-full object-cover" />
                        </div>
                      </button>

                      <div className="p-3">
                        <div className="text-sm font-semibold text-neutral-900 truncate">
                          {item.title || "Ảnh thực tế"}
                        </div>
                        <div className="mt-2 flex gap-2">
                          <button className={btnSoft} onClick={() => editReal(item)}>
                            Sửa
                          </button>
                          <button className={btnDanger} onClick={() => removeReal(item.id)}>
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-neutral-600">Chưa có ảnh nào.</div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
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
            >
              ✕
            </button>

            {preview.type === "pair" ? (
              <div className="grid sm:grid-cols-2">
                <div className="bg-black">
                  <img
                    src={preview.data.before}
                    alt="before"
                    className="w-full h-[70vh] object-contain"
                    draggable={false}
                  />
                </div>
                <div className="bg-black sm:border-l border-white/10">
                  <img
                    src={preview.data.after}
                    alt="after"
                    className="w-full h-[70vh] object-contain"
                    draggable={false}
                  />
                </div>
              </div>
            ) : (
              <div className="bg-black">
                <img
                  src={preview.data.url}
                  alt="real"
                  className="w-full h-[80vh] object-contain"
                  draggable={false}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
