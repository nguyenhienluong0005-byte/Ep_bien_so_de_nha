import React, { useState } from 'react';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: "https://i.postimg.cc/gJcRVCGj/10.jpg",
      alt: "Ép biển số xe máy bằng mica trong suốt chống trầy, sáng bóng, bền đẹp theo thời gian.",
      category: "Xe máy"
    },
    {
      url: "https://i.postimg.cc/wvxJXC93/11.jpg",
      alt: "Ép biển số ô tô khung inox ép kính cao cấp, giữ màu cực tốt.",
      category: "Ô tô"
    },
    {
      url: "https://i.postimg.cc/LX4ftcmq/12.jpg",
      alt: "Phục hồi biển số xe cũ - làm phẳng, sơn lại, ép mới đẹp như gốc.",
      category: "Phục hồi"
    },
    {
      url: "https://i.postimg.cc/MTZR7Cz7/13.jpg",
      alt: "Biển số ô tô sau khi ép lại sáng bóng, thẩm mỹ cao.",
      category: "Ô tô"
    },
    {
      url: "https://i.postimg.cc/rmyW1BqG/14.jpg",
      alt: "Thợ ép biển số Đệ Nhất đang thao tác cẩn thận từng chi tiết.",
      category: "Quy trình"
    },
    {
      url: "https://i.postimg.cc/nzV74ynT/15.jpg",
      alt: "So sánh biển số trước và sau khi phục hồi - đẹp như mới.",
      category: "Phục hồi"
    },
    {
      url: "https://i.postimg.cc/G23YFWbQ/16.jpg",
      alt: "Khách hàng hài lòng sau khi ép biển số ô tô mới tại ÉP BIỂN SỐ ĐỆ NHẤT.",
      category: "Khách hàng"
    },
    {
      url: "https://i.postimg.cc/yd69mM7g/9.jpg",
      alt: "Tiệm ÉP BIỂN SỐ ĐỆ NHẤT - chuyên phục hồi và ép biển số xe máy, ô tô uy tín.",
      category: "Cửa hàng"
    },
    {
      url: "https://i.postimg.cc/cJC89Vvb/17.jpg",
      alt: "Hình ảnh thực tế tại tiệm ÉP BIỂN SỐ ĐỆ NHẤT - khách hàng sử dụng dịch vụ ép biển số chuyên nghiệp.",
      category: "Cửa hàng"
    },
  ];

  const flags = [
    {
      url: "https://i.postimg.cc/T138gq7z/co1.png",
      alt: "Cờ Việt Nam - tượng trưng cho thương hiệu trong nước uy tín.",
    },
    {
      url: "https://i.postimg.cc/L58dLBCw/co2.png",
      alt: "Cờ tổ quốc Việt Nam tung bay - niềm tự hào và uy tín thương hiệu ÉP BIỂN SỐ ĐỆ NHẤT.",
    },
  ];

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-4">
            <span className="text-sm font-bold text-white">📸 GALLERY</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800 mb-6 leading-tight">
            Hình Ảnh Thực Tế
          </h2>
          
          <p className="text-2xl font-bold text-gray-800 mb-4">
            Tại <span className="text-yellow-500">ĐỆ NHẤT BIỂN SỐ</span>
          </p>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            Đây là bộ sưu tập hình ảnh thật được chụp tại{" "}
            <strong className="text-indigo-700">ÉP BIỂN SỐ ĐỆ NHẤT</strong> — nơi chuyên{" "}
            <strong>phục hồi, ép và làm mới biển số xe máy & ô tô</strong> với công
            nghệ hiện đại. Chúng tôi tự hào mang đến những sản phẩm{" "}
            <strong>thẩm mỹ, bền đẹp và đúng chuẩn quy định</strong>.
          </p>
        </div>

        {/* Gallery Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                {img.category}
              </div>

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <p className="text-white text-sm font-medium leading-relaxed">
                    {img.alt}
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-2xl">🔍</span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Flags Section - Vietnam Pride */}
        <div className="relative bg-gradient-to-br from-red-50 via-white to-yellow-50 rounded-3xl p-12 shadow-xl mb-20 overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>

          <div className="relative text-center mb-10">
            <div className="inline-block mb-4">
              <span className="text-6xl">🇻🇳</span>
            </div>
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-600 mb-4">
              Tinh Thần & Niềm Tự Hào Dân Tộc
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              <strong className="text-red-700">ÉP BIỂN SỐ ĐỆ NHẤT</strong> tự hào là thương hiệu Việt Nam, mang trong
              mình tinh thần lao động sáng tạo, bền bỉ và tận tâm phục vụ khách hàng trên
              khắp cả nước.
            </p>
          </div>

          <div className="relative grid md:grid-cols-2 gap-8">
            {flags.map((flag, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={flag.url}
                    alt={flag.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {flag.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button to Products */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl p-1 shadow-2xl">
            <a
              href="/products"
              className="group flex items-center gap-4 px-10 py-5 bg-white rounded-3xl hover:bg-transparent transition-all duration-500"
            >
              <span className="text-4xl group-hover:scale-110 transition-transform duration-500">🔍</span>
              <div className="text-left">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700 group-hover:from-white group-hover:to-white transition-all duration-500">
                  Xem Hình Ảnh Trước & Sau
                </div>
                <div className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors duration-500">
                  So sánh chất lượng thật tại ÉP BIỂN SỐ ĐỆ NHẤT
                </div>
              </div>
              <span className="text-2xl group-hover:translate-x-2 group-hover:text-white transition-all duration-500">→</span>
            </a>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 rounded-3xl p-12 shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-5xl">✨</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Mỗi Hình Ảnh Là Minh Chứng
            </h3>
            
            <p className="text-lg text-blue-50 leading-relaxed mb-8">
              Mỗi hình ảnh là minh chứng cho{" "}
              <strong className="text-yellow-300">chất lượng và uy tín</strong> của{" "}
              <strong className="text-yellow-300">ÉP BIỂN SỐ ĐỆ NHẤT</strong>.  
              Hãy đến với chúng tôi để trải nghiệm dịch vụ{" "}
              <strong className="text-yellow-300">ép biển số xe chuyên nghiệp - đẹp như mới</strong>!
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
                href="#services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <span>🛠️ Xem dịch vụ</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/20">
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">9+</div>
                <div className="text-sm text-blue-100">Ảnh thực tế</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">100%</div>
                <div className="text-sm text-blue-100">Hình ảnh thật</div>
              </div>
              <div>
                <div className="text-3xl font-black text-yellow-300 mb-1">⭐⭐⭐⭐⭐</div>
                <div className="text-sm text-blue-100">Chất lượng</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-yellow-400 transition-colors"
            >
              ✕
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="mt-6 text-center">
              <div className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full mb-2">
                {selectedImage.category}
              </div>
              <p className="text-white text-lg">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;