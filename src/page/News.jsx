import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Bí quyết phục hồi biển số cũ sáng bóng như mới",
      desc: "Khám phá quy trình ép và phục hồi biển số chuyên nghiệp bằng công nghệ Titan 3mm – bền đẹp chuẩn ISO.",
      img: "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    },
    {
      id: 2,
      title: "Công nghệ ép Titan cao cấp – Chuẩn quốc tế",
      desc: "Công nghệ ép biển số tiên tiến giúp chống oxy hóa, chống phai màu và sáng bóng hơn gấp 3 lần so với biển truyền thống.",
      img: "https://i.postimg.cc/jStxv9gW/55.jpg",
    },
    {
      id: 3,
      title: "Quy trình ép biển số đạt chuẩn Bộ GTVT",
      desc: "Từng bước ép biển được thực hiện chính xác bằng máy ép thủy lực Titan, đảm bảo phẳng tuyệt đối và bền lâu.",
      img: "https://i.postimg.cc/vZbYXjqW/61.jpg",
    },
    {
      id: 4,
      title: "Trải nghiệm thực tế tại ÉP BIỂN SỐ ĐỆ NHẤT",
      desc: "Cửa hàng hiện đại, máy móc tiên tiến và đội ngũ kỹ thuật viên lành nghề luôn sẵn sàng phục vụ khách hàng.",
      img: "https://i.postimg.cc/Vkmf4TGr/56.jpg",
    },
    {
      id: 5,
      title: "Sự khác biệt giữa Titan và biển nhôm thường",
      desc: "Biển Titan có khả năng chịu nhiệt, chống trầy và phản quang mạnh hơn nhiều so với nhôm – lựa chọn số 1 hiện nay.",
      img: "https://i.postimg.cc/GmKcfQVq/67.jpg",
    },
    {
      id: 6,
      title: "Khách hàng hài lòng tuyệt đối sau khi phục hồi",
      desc: "Hơn 10.000 khách hàng đã tin tưởng ÉP BIỂN SỐ ĐỆ NHẤT với chất lượng vượt trội và bảo hành dài hạn.",
      img: "https://i.postimg.cc/4xSLqdxj/42.jpg",
    },
    {
      id: 7,
      title: "Tinh thần Việt trong từng tấm biển số",
      desc: "Đệ Nhất  Ép Biển Số mang niềm tự hào dân tộc Việt, tận tâm và tỉ mỉ trong từng chi tiết.",
      img: "https://i.postimg.cc/L58dLBCw/co2.png",
    },
    {
      id: 8,
      title: "Khách hàng phản hồi tích cực trên mạng xã hội",
      desc: "Những đánh giá 5 sao và hàng trăm bình luận tích cực là minh chứng cho uy tín của chúng tôi.",
      img: "https://i.postimg.cc/9QCm1S80/52.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-yellow-50 relative overflow-hidden">
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute -top-32 left-0 w-[600px] h-[600px] bg-yellow-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-indigo-200/30 blur-3xl rounded-full"></div>

      {/* Tiêu đề */}
      <motion.h1
        className=" mt-[10px] text-3xl font-extrabold text-center text-red-700 mb-16 drop-shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📰 TIN TỨC MỚI NHẤT TỪ{" "}
        <span className="text-yellow-500">ÉP BIỂN SỐ ĐỆ NHẤT </span>
      </motion.h1>

      {/* Danh sách bài viết */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 relative z-10">
        {news.map((n, i) => (
          <motion.div
            key={i}
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-300/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            {/* Ảnh */}
            <div className="overflow-hidden relative group">
              <img
                src={n.img}
                alt={n.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Nội dung */}
            <div className="p-6 text-left">
              <h2 className="text-xl font-bold text-indigo-700 mb-2 line-clamp-2">
                {n.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {n.desc}
              </p>
              <Link
                to={`/news/${n.id}`}
                className="inline-block text-red-600 font-semibold hover:underline text-sm mt-2"
              >
                Xem chi tiết →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA cuối */}
      <div className="text-center mt-20 py-20">
        <p className="text-gray-700 text-lg mb-6">
          Cập nhật tin tức mới nhất về công nghệ ép biển số và xu hướng xe Việt!
        </p>
        <Link
          to="/restore"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full shadow-md transition"
        >
          🔧 Xem Quy Trình Phục Hồi Biển Số →
        </Link>
      </div>
       <Contact />
      <Footer />
    </section>
  );
}
