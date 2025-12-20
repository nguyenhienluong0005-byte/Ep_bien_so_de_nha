import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();

 const news = {
  1: {
    title: "Phục hồi biển số gãy – lún đế – mờ sơn: Làm lại sắc nét như mới",
    img: "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Sau thời gian sử dụng, nhiều biển số xe gặp tình trạng <strong>gãy góc, lún đế, cong vênh hoặc mờ sơn</strong>.
    Nếu không xử lý đúng kỹ thuật, biển sẽ mất thẩm mỹ và dễ bị nhắc nhở khi lưu thông.
  </p>

  <p>
    Tại <strong>ÉP BIỂN SỐ ĐỆ NHẤT</strong>, chúng tôi chuyên phục hồi biển số ô tô – xe máy
    bằng <strong>máy ép thủy lực công suất lớn</strong>, giúp biển trở lại trạng thái
    <strong>phẳng – chuẩn form – sắc nét như mới</strong>.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">🔧 Quy trình phục hồi</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Kiểm tra mức độ gãy, cong, lún đế.</li>
    <li>Ép định hình lại bằng máy ép thủy lực.</li>
    <li>Thay mica chuẩn ISO dày 3 ly.</li>
    <li>Gia cố inox nguyên khối tăng độ cứng.</li>
    <li>Hoàn thiện – kiểm tra thẩm mỹ.</li>
  </ul>

  <p>
    Biển sau phục hồi sắc nét, chắc chắn, không ố vàng và sử dụng bền lâu.
  </p>
</div>
`
  },

  2: {
    title: "Máy ép thủy lực công suất lớn: Ép chuẩn form, góc cạnh sắc sảo",
    img: "https://i.postimg.cc/jStxv9gW/55.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Chất lượng ép biển phụ thuộc rất lớn vào <strong>máy ép thủy lực</strong>.
    ÉP BIỂN SỐ ĐỆ NHẤT sử dụng máy ép thủy lực công suất lớn,
    cho lực ép đều và ổn định trên toàn bộ bề mặt biển.
  </p>

  <p>
    Nhờ đó, biển số sau khi ép <strong>phẳng tuyệt đối</strong>,
    góc cạnh sắc sảo, chắc chắn và không cong vênh theo thời gian.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">⚙️ Ưu điểm nổi bật</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Lực ép mạnh – đều – chính xác.</li>
    <li>Không nứt mica, không biến dạng biển.</li>
    <li>Làm nhanh – nhận ngay.</li>
  </ul>
</div>
`
  },

  3: {
    title: "Mica chuẩn ISO dày 3 ly + inox nguyên khối: Bền đẹp vượt trội",
    img: "https://i.postimg.cc/vZbYXjqW/61.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Vật liệu quyết định trực tiếp đến độ bền của biển số.
    Chúng tôi sử dụng <strong>mica chuẩn ISO dày 3 ly</strong>
    kết hợp <strong>inox nguyên khối</strong>.
  </p>

  <p>
    Mica dày giúp biển cứng cáp, không giòn gãy,
    đặc biệt <strong>không ố vàng theo thời gian</strong>.
    Inox giúp gia cố đế biển chắc chắn hơn.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">💎 Lợi ích</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Độ bền cao, sử dụng lâu dài.</li>
    <li>Giữ màu và độ nét ổn định.</li>
    <li>Chịu va đập tốt.</li>
  </ul>
</div>
`
  },

  4: {
    title: "Tay nghề thợ hơn 15 năm: Kỹ – cẩn thận – tỉ mỉ",
    img: "https://i.postimg.cc/Vkmf4TGr/56.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Máy móc hiện đại cần đi cùng <strong>tay nghề thợ giỏi</strong>.
    Đội ngũ tại ÉP BIỂN SỐ ĐỆ NHẤT có hơn <strong>15 năm kinh nghiệm</strong>.
  </p>

  <p>
    Mỗi biển số đều được thao tác cẩn thận, chỉnh từng chi tiết nhỏ
    để đảm bảo thành phẩm đẹp, đều và chắc chắn.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">🛠️ Giá trị tay nghề</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Xử lý tốt biển hư hỏng nặng.</li>
    <li>Ép chuẩn, không lệch méo.</li>
    <li>Hoàn thiện thẩm mỹ cao.</li>
  </ul>
</div>
`
  },

  5: {
    title: "Ép biển số đúng chuẩn form: Đẹp – chắc – bền theo thời gian",
    img: "https://i.postimg.cc/GmKcfQVq/67.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Ép biển số không chỉ để đẹp mà còn phải <strong>đúng chuẩn form gốc</strong>.
    Đây là yếu tố quan trọng giúp biển sử dụng hợp pháp lâu dài.
  </p>

  <p>
    ÉP BIỂN SỐ ĐỆ NHẤT cam kết không thay đổi kích thước,
    không ảnh hưởng ký tự và đảm bảo form chuẩn.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">✔️ Tiêu chí</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Chuẩn form – phẳng đẹp.</li>
    <li>Góc cạnh sắc nét.</li>
    <li>Bền đẹp theo thời gian.</li>
  </ul>
</div>
`
  },

  6: {
    title: "Sản phẩm hoàn thiện sắc nét – Bảo hành 2 năm",
    img: "https://i.postimg.cc/4xSLqdxj/42.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Mỗi biển số sau khi hoàn thiện đều được kiểm tra kỹ lưỡng
    về độ phẳng, độ nét và độ chắc chắn.
  </p>

  <p>
    Chúng tôi cam kết <strong>bảo hành 24 tháng</strong>,
    hỗ trợ xử lý nếu có lỗi kỹ thuật trong quá trình sử dụng.
  </p>

  <h3 class="text-2xl font-bold text-red-600 mt-8">🔒 Chính sách bảo hành</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Bảo hành bong tróc, lỗi ép.</li>
    <li>Hỗ trợ kiểm tra – vệ sinh miễn phí.</li>
    <li>Yên tâm sử dụng lâu dài.</li>
  </ul>
</div>
`
  },

  7: {
    title: "Tinh thần Việt trong từng tấm biển số",
    img: "https://i.postimg.cc/L58dLBCw/co2.png",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Với ÉP BIỂN SỐ ĐỆ NHẤT, mỗi tấm biển không chỉ là sản phẩm
    mà còn là <strong>tâm huyết và niềm tự hào nghề nghiệp</strong>.
  </p>

  <p>
    Chúng tôi làm nghề bằng sự tận tâm, tỉ mỉ và trách nhiệm,
    giữ chữ tín với khách hàng trong từng sản phẩm.
  </p>

  <p>
    Chính sự chỉn chu đó đã giúp Đệ Nhất được khách hàng tin tưởng
    và giới thiệu suốt nhiều năm qua.
  </p>
</div>
`
  },

  8: {
    title: "Khách hàng tin chọn ÉP BIỂN SỐ ĐỆ NHẤT: Chuẩn – nhanh – đẹp",
    img: "https://i.postimg.cc/9QCm1S80/52.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    Sự hài lòng của khách hàng là minh chứng rõ nhất cho chất lượng dịch vụ.
    Nhiều khách sau khi làm đã quay lại và giới thiệu cho bạn bè, người thân.
  </p>

  <p>
    Khách hàng đánh giá cao sự <strong>làm nhanh – làm kỹ – bảo hành rõ ràng</strong>
    tại ÉP BIỂN SỐ ĐỆ NHẤT.
  </p>

  <p>
    Đó chính là động lực để chúng tôi không ngừng nâng cao chất lượng mỗi ngày.
  </p>
</div>
`
  }
};


  const article = news[id];

  if (!article) {
    return (
      <div className="p-20 text-center text-gray-600 text-xl">
        Không tìm thấy tin tức.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Ảnh minh họa */}
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10"
      />

      {/* Tiêu đề */}
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">
        {article.title}
      </h1>

      {/* Nội dung */}
        <div
            className="text-gray-700 leading-relaxed prose prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

      {/* Nút quay lại */}
      <div className="mt-10">
        <Link
          to="/news"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold shadow transition"
        >
          ← Quay lại danh sách tin
        </Link>
      </div>
    </div>
  );
}
