import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase"; // sửa đúng path firebase của bạn

const ADMIN_EMAIL = "mychau181094@gmail.com"; // đổi đúng email admin của bạn

export default function AdminRoute() {
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      const isAdmin = !!user && user.email === ADMIN_EMAIL;
      setOk(isAdmin);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <div className="p-6">Đang kiểm tra đăng nhập...</div>;

  if (!ok) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
