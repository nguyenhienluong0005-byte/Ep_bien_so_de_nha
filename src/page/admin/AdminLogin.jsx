import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // sửa đúng path

export default function AdminLogin() {
  const [email, setEmail] = useState("mychau181094@gmail.com");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const nav = useNavigate();
  const location = useLocation();
  const goTo = location.state?.from?.pathname || "/admin";

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      nav(goTo, { replace: true });
    } catch (e2) {
      setErr(e2?.message || "Đăng nhập lỗi");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-xl font-bold">Admin Login</h1>
        <p className="text-white/60 text-sm mt-1">Chỉ admin mới vào được trang quản trị.</p>

        <div className="mt-5 space-y-3">
          <input
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            type="password"
          />
        </div>

        {err && <div className="mt-3 text-red-300 text-sm break-words">{err}</div>}

        <button className="mt-5 w-full py-3 rounded-xl bg-amber-400 text-black font-semibold">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
