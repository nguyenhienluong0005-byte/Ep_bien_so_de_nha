import React, { useState } from "react";

function CustomerReviews() {
  const reviewImages = [
    { url: "https://i.postimg.cc/8PbLHkcL/1.jpg",  text: "Dịch vụ tuyệt vời, làm nhanh và đẹp!", rating: 5 },
    { url: "https://i.postimg.cc/K8vBsX3W/10.jpg",  text: "Biển số sáng bóng, đúng chuẩn, rất hài lòng!", rating: 5 },
    { url: "https://i.postimg.cc/P5rYFGvB/11.jpg",  text: "Làm kỹ, chăm chút từng chi tiết!", rating: 5 },
    { url: "https://i.postimg.cc/qvMyZfCH/12.jpg",  text: "Giá tốt, chất lượng cao!", rating: 5 },
    { url: "https://i.postimg.cc/HksXPG7x/13.jpg",  text: "Biển số nhìn như mới 100%, tuyệt!", rating: 5 },
    { url: "https://i.postimg.cc/zGtWsdnr/14.jpg",  text: "Phục hồi quá đẹp, ngoài mong đợi!", rating: 5 },
    { url: "https://i.postimg.cc/Jz6JfTbW/15.jpg",   text: "Làm rất có tâm, rất uy tín!", rating: 5 },
    { url: "https://i.postimg.cc/3xSpsLgK/16.jpg",  text: "Trước – sau khác biệt rõ rệt, tuyệt vời!", rating: 5 },
    { url: "https://i.postimg.cc/wjfJCWhB/17.jpg",  text: "Rất chuyên nghiệp, chất lượng cao!", rating: 5 },
    { url: "https://i.postimg.cc/K8qL69nR/18.jpg",  text: "Quy trình làm việc rõ ràng, nhanh chóng!", rating: 5 },
    { url: "https://i.postimg.cc/P53Zg6mL/19.jpg",  text: "Rất hài lòng với dịch vụ!", rating: 5 },
    { url: "https://i.postimg.cc/8PbLHkcM/2.jpg",  text: "Biển số đẹp – giá tốt – làm nhanh!", rating: 5 },
    { url: "https://i.postimg.cc/mgXMvdQM/20.jpg",  text: "Làm xe máy rất đẹp, chuẩn form!", rating: 5 },
    { url: "https://i.postimg.cc/Gm7YWMkF/21.jpg",  text: "Làm xe ô tô tuyệt vời!", rating: 5 },
    { url: "https://i.postimg.cc/YCng5X1f/22.jpg",  text: "Phục hồi biển số quá chất lượng!", rating: 5 },
    { url: "https://i.postimg.cc/g0xRmvDX/23.jpg",  text: "Khác biệt rõ rệt sau khi làm!", rating: 5 },
    { url: "https://i.postimg.cc/tgsPph5N/24.jpg",  text: "Quá chuyên nghiệp!", rating: 5 },
    { url: "https://i.postimg.cc/3wkpYgBL/25.jpg",  text: "Rất uy tín và chất lượng!", rating: 5 },
    { url: "https://i.postimg.cc/wB1JghVP/26.jpg",  text: "Biển số ô tô làm cực đẹp!", rating: 5 },
    { url: "https://i.postimg.cc/s2MSspmF/27.jpg",  text: "Phục hồi biển số như mới!", rating: 5 },
    { url: "https://i.postimg.cc/nLNmzCRd/28.jpg",  text: "Trước sau khác biệt 100%!", rating: 5 },
    { url: "https://i.postimg.cc/N0ZXM5JW/29.jpg",  text: "Quy trình nhanh, rõ ràng!", rating: 5 },
    { url: "https://i.postimg.cc/8PbLHkcJ/3.jpg",  text: "Làm biển số quá đẹp!", rating: 5 },
    { url: "https://i.postimg.cc/m2S7wZkt/4.jpg",  text: "Xe máy làm rất chuẩn!", rating: 5 },
    { url: "https://i.postimg.cc/YqxQ320Z/5.jpg",  text: "Ô tô làm hoàn hảo!", rating: 5 },
    { url: "https://i.postimg.cc/GhjvQ3tN/6.jpg",  text: "Phục hồi chất lượng cao!", rating: 5 },
    { url: "https://i.postimg.cc/X7g98NqP/7.jpg",  text: "Trước – sau đẹp hết nấc!", rating: 5 },
    { url: "https://i.postimg.cc/K8vBsX35/8.jpg",  text: "Quy trình làm việc tuyệt!", rating: 5 },
    { url: "https://i.postimg.cc/9QFZN3wN/9.jpg",  text: "Biển số xe máy đẹp chuẩn!", rating: 5 },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-2 bg-yellow-400 rounded-full mb-4 font-bold">
          ⭐ ĐÁNH GIÁ KHÁCH HÀNG
        </div>
        <h2 className="text-5xl font-black text-indigo-700 mb-4">
          Hình Ảnh Khách Hàng Đánh Giá
        </h2>
        <p className="text-gray-600 text-lg">
          Tổng hợp những phản hồi chân thực nhất từ khách hàng
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {reviewImages.map((img, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition cursor-pointer"
          >
            <div className="aspect-square rounded-xl overflow-hidden mb-4">
              <img src={img.url} className="w-full h-full object-cover" />
            </div>

            <h4 className="font-bold text-gray-800">{img.name}</h4>

            <div className="flex text-yellow-400 text-lg">
              {Array(img.rating).fill().map((_, j) => (
                <span key={j}>⭐</span>
              ))}
            </div>

            <p className="text-gray-600 italic mt-2">
              "{img.text}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomerReviews;
