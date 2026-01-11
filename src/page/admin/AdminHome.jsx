import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Bảng quản trị</h1>
        <p className="text-white/60 mt-1">Chỉ admin mới thấy trang này.</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <Link
            to="/admin/products"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            Quản lý Sản phẩm (Before/After + Hình thực tế)
          </Link>

          <Link
            to="/admin/news"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            Quản lý Tin tức
          </Link>

          <Link
            to="/admin/reviews"
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            Quản lý Đánh giá khách hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
