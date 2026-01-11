import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialFloating from "./components/SocialFloating";

import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Restore from "./page/Restore";
import News from "./page/News";
import NewsDetail from "./page/NewsDetail";
import Contact from "./page/Contact";

// admin
import AdminRoute from "./components/AdminRoute";
import AdminLogin from "./page/admin/AdminLogin";
import AdminHome from "./page/admin/AdminHome";
import AdminProducts from "./page/admin/AdminProducts";
import AdminNews from "./page/admin/AdminNews";
import AdminReviews from "./page/admin/AdminReviewsSeed";


function AppLayout() {
  const location = useLocation();

  // Nếu route bắt đầu bằng /admin thì coi là trang admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Public mới hiện NavBar */}
      {!isAdminRoute && <NavBar />}

      {/* Public mới cần padding dưới để né SocialFloating */}
      <main className={`flex-1 ${isAdminRoute ? "" : "pt-4 pb-20 md:pb-0"}`}>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/restore" element={<Restore />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route element={<AdminRoute />}>
            <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/admin/products" element={<AdminProducts />} />
              <Route path="/admin/news" element={<AdminNews />} />
                <Route path="/admin/reviews" element={<AdminReviews />} />

          </Route>
        </Routes>
      </main>

      {/* Public mới hiện SocialFloating */}
      {!isAdminRoute && <SocialFloating />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
