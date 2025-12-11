import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialFloating from "./components/SocialFloating";
import Home from "./page/Home";
import About from "./page/About";
import Products from "./page/Products";
import Restore from "./page/Restore";
import News from "./page/News";
import NewsDetail from "./page/NewsDetail";
import Contact from "./page/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        {/* Nội dung chính */}
        <main className="flex-1 pt-4 pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/restore" element={<Restore />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Nút mạng xã hội nổi */}
        <SocialFloating />
      </div>
    </Router>
  );
}

export default App;
