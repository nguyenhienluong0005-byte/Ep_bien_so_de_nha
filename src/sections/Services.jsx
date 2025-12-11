import React from 'react';

function Services() {
  const services = [
    {
      title: "Ép Biển Số Xe Máy",
      desc: "Dịch vụ ép biển số xe máy chuyên nghiệp với mica trong suốt, chống trầy, sáng bóng, bền lâu theo thời gian.",
      img: "https://i.postimg.cc/zXqmnpgt/6.jpg",
      alt: "Ép biển số xe máy - mica trong suốt, chống trầy, sáng bóng",
      features: ["Mica trong suốt", "Chống trầy xước", "Bền màu lâu"],
      icon: "🏍️"
    },
    {
      title: "Ép Biển Số Ô Tô",
      desc: "Ép biển số ô tô bằng khung inox cao cấp, ép kính chống nước, giữ màu cực tốt và đúng chuẩn quy định.",
      img: "https://i.postimg.cc/PrdGmKwV/7.jpg",
      alt: "Ép biển số ô tô - khung inox ép kính chống nước, bền đẹp",
      features: ["Khung inox cao cấp", "Chống nước tuyệt đối", "Đúng chuẩn quy định"],
      icon: "🚗"
    },
    {
      title: "Phục Hồi Biển Số Cũ",
      desc: "Làm phẳng, sơn lại, đánh bóng và ép lại toàn bộ biển số xe cũ – đảm bảo đẹp như mới, bền và đúng chuẩn.",
      img: "https://i.postimg.cc/CLwyjJqW/8.jpg",
      alt: "Phục hồi biển số cũ - làm phẳng, sơn lại, đánh bóng biển số xe",
      features: ["Phục hồi như mới", "Sơn chuẩn màu", "Giá cả hợp lý"],
      icon: "✨"
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-4">
            <span className="text-sm font-bold text-gray-900">⭐ DỊCH VỤ CHUYÊN NGHIỆP</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 mb-6 leading-tight">
            Dịch Vụ Nổi Bật
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tại <span className="font-bold text-indigo-700">ĐỆ NHẤT BIỂN SỐ</span> - Chất lượng hàng đầu, uy tín số 1
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  {s.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {s.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {s.desc}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {s.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-blue-700 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
                  Tìm hiểu thêm →
                </button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent transform -translate-x-10 -translate-y-10 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl p-10 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-5xl">🏆</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Cam Kết Chất Lượng Hàng Đầu
            </h3>
            
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Tất cả dịch vụ tại <strong className="text-yellow-300">ÉP BIỂN SỐ ĐỆ NHẤT</strong> đều được thực hiện bởi đội ngũ
              <strong className="text-yellow-300"> thợ lành nghề</strong> cùng <strong className="text-yellow-300">thiết bị ép hiện đại</strong>,
              đảm bảo chất lượng, thẩm mỹ và độ bền cao nhất cho khách hàng.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 font-bold rounded-full hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>📞 Liên hệ ngay</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
              
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <span>🖼️ Xem mẫu làm</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/20">
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">1000+</div>
                <div className="text-sm text-blue-100">Khách hàng</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">10+</div>
                <div className="text-sm text-blue-100">Năm kinh nghiệm</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">100%</div>
                <div className="text-sm text-blue-100">Hài lòng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;