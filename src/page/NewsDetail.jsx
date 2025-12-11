import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();

  const news = {
    1: {
      title: "Bí quyết phục hồi biển số cũ sáng bóng như mới",
      img: "https://i.postimg.cc/nhpFT5Rn/48.jpg",
     content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    <strong>Công nghệ ép Titan 3mm</strong> tại 
    <span class="text-indigo-700 font-semibold"> ÉP BIỂN SỐ THỨC </span> 
    đang là bước tiến vượt trội giúp phục hồi biển số xe cũ trở lại như mới, sáng bóng và bền đẹp hơn bao giờ hết.
  </p>

  <p>
    Trước đây, biển số sau thời gian sử dụng thường bị trầy xước, bong sơn, cong vênh hoặc gỉ sét do thời tiết.
    Nay với kỹ thuật ép mica Titan cao cấp, những vấn đề đó được xử lý triệt để, giúp biển phục hồi toàn diện mà vẫn giữ nguyên hình dáng gốc.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🔧 Quy trình phục hồi chuyên nghiệp</h3>
  <p>
    Quy trình ép biển số tại <strong>ÉP BIỂN SỐ THỨC</strong> được thực hiện tỉ mỉ qua 6 công đoạn chuẩn 
    <span class="font-semibold">ISO Function quốc tế</span>:
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li>Tiếp nhận & kiểm tra tình trạng biển số – xác định mức độ cong, phai, bong sơn.</li>
    <li>Tẩy rửa bề mặt bằng dung dịch chuyên dụng – loại bỏ bụi bẩn và gỉ sét.</li>
    <li>Phủ lớp chống oxy hóa – bảo vệ bề mặt kim loại trước khi ép.</li>
    <li>Ép Titan 3mm bằng mica cao cấp – chống tia UV, tăng độ phản sáng.</li>
    <li>Kiểm định độ phẳng và độ sáng – đảm bảo bề mặt đạt chuẩn thẩm mỹ.</li>
    <li>Phủ nano bảo vệ – chống nước, chống bám bụi, sáng bóng lâu dài.</li>
  </ul>

  <p>
    Kết quả là biển số sau khi ép lại phẳng mịn, sáng như gương, chống trầy, chống ố vàng và bền màu trên 5 năm.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Ưu điểm của công nghệ Titan 3mm</h3>
  <p>
    Lớp mica Titan dày 3mm giúp tăng độ cứng gấp đôi so với mica thường. 
    Chất liệu này phản sáng cực tốt, tạo hiệu ứng ánh kim sang trọng khi đi dưới nắng hoặc đèn pha.
  </p>

  <p>
    Ngoài ra, Titan có khả năng chống trầy, chống phai màu và chịu nhiệt cực tốt.
    Dù xe hoạt động trong môi trường khắc nghiệt, biển vẫn giữ độ sáng và nét chữ nguyên vẹn.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🧠 Vì sao nên phục hồi thay vì làm mới?</h3>
  <p>
    Phục hồi biển số giúp giữ nguyên số đăng ký gốc, tiết kiệm chi phí hơn so với làm lại biển mới.
    Quá trình này hoàn toàn hợp pháp theo quy định Bộ GTVT, 
    không cần làm lại hồ sơ hoặc xin cấp lại biển mới – vừa nhanh vừa tiện.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🏭 Thiết bị hiện đại tại Biên Hòa</h3>
  <p>
    Tại cơ sở <strong>1181 Nguyễn Ái Quốc, Tân Mai, Biên Hòa</strong>, ÉP BIỂN SỐ THỨC trang bị 
    máy ép thủy lực CNC tự động, buồng sấy nhiệt và máy chà mịn công nghiệp.
  </p>

  <p>
    Tất cả giúp lực ép đồng đều, bề mặt phẳng tuyệt đối và viền sắc nét.
    Kết hợp màng phủ nano chống UV, giúp biển không bị ố vàng dù để ngoài trời nhiều năm.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💬 Phản hồi khách hàng</h3>
  <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
    “Xe mình biển gỉ sét nặng, tưởng phải làm lại. Vậy mà ép xong sáng như gương, nhìn sang hẳn!”  
    <br/>— Anh Duy, Biên Hòa.
  </blockquote>

  <p>
    Hàng nghìn khách hàng tại Đồng Nai, Bình Dương và TP.HCM đã tin tưởng Thức Ép Biển Số nhờ chất lượng vượt trội và uy tín.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌟 Cam kết chất lượng & bảo hành 24 tháng</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Bảo hành toàn diện 24 tháng – đổi mới nếu lỗi kỹ thuật.</li>
    <li>Không phai màu, không bong tróc, không ố vàng.</li>
    <li>Tư vấn & vệ sinh miễn phí sau khi ép.</li>
  </ul>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🚗 Phong cách phục vụ tận tâm</h3>
  <p>
    Mỗi sản phẩm hoàn thiện đều được kiểm tra ánh sáng phản quang, độ bền màu và viền ép kỹ lưỡng.
    Biển được đóng gói sạch sẽ, giao tận tay khách hàng cùng phiếu bảo hành rõ ràng.
  </p>

  <p>
    Liên hệ ngay qua số <strong class="text-red-600">0977 055 990</strong> 
    hoặc ghé trực tiếp tiệm để được tư vấn tận tình – nhận biển trong 15 phút!
  </p>

  <p>
    Với công nghệ tiên tiến, đội ngũ tận tâm và uy tín hơn 7 năm hoạt động, 
    <strong class="text-indigo-700">ÉP BIỂN SỐ THỨC</strong> là lựa chọn hàng đầu cho anh em yêu xe tại Biên Hòa.
  </p>
</div>
        `,


    },
    2: {
      title: "Top 5 khung biển số titan bền đẹp năm 2025",
      img: "https://i.postimg.cc/jStxv9gW/55.jpg",
      content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    <strong>Titan</strong> là vật liệu kim loại cao cấp được đánh giá là “vua của sự bền bỉ”, 
    hiện đang được ứng dụng mạnh mẽ trong lĩnh vực ép biển số xe, 
    đặc biệt tại <span class="text-indigo-700 font-semibold">ÉP BIỂN SỐ THỨC Biên Hòa</span>.  
    Với đặc tính chống oxy hóa tuyệt vời, độ cứng gấp ba lần nhôm và vẻ ngoài sang trọng, 
    Titan trở thành lựa chọn hàng đầu cho những ai muốn sở hữu biển số bền, đẹp và đẳng cấp.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Titan – vật liệu cao cấp hàng đầu trong ép biển số</h3>
  <p>
    Titan vốn được sử dụng trong hàng không, y tế và công nghiệp chế tạo siêu xe nhờ tính ổn định, 
    không gỉ, không biến dạng và giữ màu cực lâu. Khi ứng dụng vào ép biển số, 
    Titan không chỉ giúp bảo vệ bề mặt mica mà còn tạo ra độ phản sáng tự nhiên, 
    sang trọng và hiện đại hơn hẳn so với biển thông thường.
  </p>

  <p>
    Các loại Titan được sử dụng tại ÉP BIỂN SỐ THỨC đều là loại nhập khẩu tiêu chuẩn châu Âu, 
    được xử lý qua công nghệ anod hóa để tăng cường khả năng chịu nhiệt, chống tia UV và giảm trầy xước. 
    Nhờ đó, sản phẩm có thể sử dụng bền bỉ trong điều kiện nắng mưa khắc nghiệt ở Việt Nam.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌈 Các dòng Titan nổi bật được ưa chuộng</h3>
  <p>
    Tại xưởng <strong>Thức Ép Biển Số Biên Hòa</strong>, khách hàng có thể lựa chọn đa dạng màu sắc Titan, 
    mỗi loại mang phong cách riêng:
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Titan Rainbow:</strong> hiệu ứng cầu vồng, ánh tím xanh độc đáo – phù hợp xe thể thao, cá tính.</li>
    <li><strong>Titan Gold Shine:</strong> ánh vàng kim sang trọng – tôn lên sự đẳng cấp và nổi bật.</li>
    <li><strong>Titan Blue Sea:</strong> ánh xanh biển sâu – tinh tế, mát mắt, được nhiều khách hàng trẻ ưa chuộng.</li>
    <li><strong>Titan Matte Silver:</strong> bạc mờ sang trọng, phù hợp phong cách tối giản, thanh lịch.</li>
  </ul>

  <p>
    Dù chọn loại nào, Titan vẫn giữ được độ sáng ổn định, không bong tróc, không phai màu 
    và đảm bảo độ phản sáng đạt chuẩn <strong>Bộ GTVT</strong>. 
    Nhiều khách hàng sau 2–3 năm sử dụng vẫn phản hồi rằng biển “sáng như mới ép hôm qua”.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">⚙️ Quy trình ép Titan chuẩn tại ÉP BIỂN SỐ THỨC</h3>
  <p>
    Để Titan phát huy tối đa công năng, ÉP BIỂN SỐ THỨC áp dụng quy trình ép nhiệt đa tầng hiện đại:
  </p>

  <ol class="list-decimal pl-6 space-y-1">
    <li>Vệ sinh và làm phẳng bề mặt biển kim loại gốc.</li>
    <li>Chà nhám tạo độ bám Titan – giúp Titan liên kết chặt với mica trong suốt.</li>
    <li>Ép Titan 3mm dưới nhiệt độ và áp suất được kiểm soát bằng máy CNC tự động.</li>
    <li>Kiểm tra độ phẳng, độ sáng và màu sắc ánh kim trước khi phủ nano.</li>
    <li>Hoàn thiện viền inox chống va đập, đảm bảo độ bền tổng thể.</li>
  </ol>

  <p>
    Mỗi biển số sau khi ép Titan sẽ có bề mặt sáng trong, phản chiếu ánh sáng tự nhiên, 
    không tạo cảm giác lóa mắt khi nhìn từ xa. 
    Đây là yếu tố quan trọng giúp người lái xe an toàn và hợp quy định giao thông.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🚗 So sánh Titan và nhôm truyền thống</h3>
  <table class="w-full border-collapse border border-gray-200 text-sm md:text-base">
    <thead class="bg-yellow-100 text-gray-800">
      <tr>
        <th class="border p-2 text-left">Tiêu chí</th>
        <th class="border p-2 text-left">Titan 3mm</th>
        <th class="border p-2 text-left">Nhôm truyền thống</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Độ bền</td>
        <td class="border p-2 font-semibold text-green-700">Gấp 3 lần</td>
        <td class="border p-2 text-gray-600">Dễ cong, dễ móp</td>
      </tr>
      <tr>
        <td class="border p-2">Chống oxy hóa</td>
        <td class="border p-2 font-semibold text-green-700">Tuyệt đối</td>
        <td class="border p-2 text-gray-600">Dễ bị mờ, gỉ theo thời gian</td>
      </tr>
      <tr>
        <td class="border p-2">Màu sắc</td>
        <td class="border p-2 font-semibold text-green-700">Giữ màu 5–7 năm</td>
        <td class="border p-2 text-gray-600">Phai màu sau 6–12 tháng</td>
      </tr>
      <tr>
        <td class="border p-2">Thẩm mỹ</td>
        <td class="border p-2 font-semibold text-green-700">Sáng, sang trọng</td>
        <td class="border p-2 text-gray-600">Thường, dễ trầy</td>
      </tr>
    </tbody>
  </table>

  <p>
    Rõ ràng, Titan không chỉ vượt trội về độ bền mà còn nâng tầm giá trị thẩm mỹ cho chiếc xe, 
    khiến biển số trở thành chi tiết “đắt giá” góp phần khẳng định phong cách của chủ xe.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💬 Cảm nhận khách hàng</h3>
  <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
    “Mình ép biển Titan ở Thức cách đây 2 năm, giờ vẫn sáng bóng như gương, không trầy xước gì cả!”  
    <br/>— Anh Nam, khách hàng Biên Hòa.
  </blockquote>

  <p>
    Hầu hết khách hàng sau khi sử dụng dịch vụ đều quay lại và giới thiệu bạn bè, 
    bởi họ cảm nhận được sự khác biệt giữa Titan cao cấp và biển nhôm thường.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🛠️ Bảo hành & dịch vụ hậu mãi</h3>
  <p>
    Mỗi biển Titan tại ÉP BIỂN SỐ THỨC đều được bảo hành 24 tháng, 
    bao gồm lỗi ép, phai màu hoặc bong lớp bảo vệ. 
    Ngoài ra, khách hàng còn được hỗ trợ làm sạch, đánh bóng định kỳ miễn phí trong suốt thời gian sử dụng.
  </p>

  <p>
    Đội ngũ kỹ thuật viên chuyên nghiệp, phục vụ tận tâm, sẵn sàng tư vấn tận nơi hoặc ép tại nhà.  
    Dù khách hàng ở xa, ÉP BIỂN SỐ THỨC vẫn nhận ship COD toàn quốc, đảm bảo an toàn và uy tín.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📍 Liên hệ ngay hôm nay</h3>
  <p>
    Nếu bạn đang tìm kiếm nơi ép biển số Titan bền đẹp, sang trọng và đúng chuẩn, 
    hãy đến với <strong class="text-indigo-700">ÉP BIỂN SỐ THỨC – 1181 Nguyễn Ái Quốc, Tân Mai, Biên Hòa</strong>.  
    Chúng tôi cam kết mang đến cho bạn biển số bền đẹp – sáng bóng – bảo hành lâu dài.
  </p>

  <p>
    📞 Hotline: <strong class="text-red-600">0977 055 990</strong>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-6 font-semibold text-gray-700">
    — Sáng bóng bền lâu, đẳng cấp Titan – Chỉ có tại <span class="text-indigo-700">Thức Ép Biển Số</span>.
  </p>
</div>
`,

    },
    3: {
      title: "Lý do bạn nên phục hồi thay vì làm biển số mới",
      img: "https://i.postimg.cc/vZbYXjqW/61.jpg",
      content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    <strong>Phục hồi biển số xe</strong> là giải pháp thông minh, hợp pháp và tiết kiệm chi phí hơn rất nhiều so với việc làm biển mới. 
    Không chỉ giúp giữ nguyên số gốc – yếu tố quan trọng về mặt pháp lý, 
    quá trình phục hồi còn giúp bảo tồn <strong>tem đăng kiểm</strong> và tránh được các thủ tục hành chính phức tạp.
  </p>

  <p>
    Khi biển số bị móp, trầy, bay màu hoặc gỉ sét, nhiều người nghĩ rằng chỉ có thể làm lại mới. 
    Nhưng thực tế, với công nghệ hiện đại tại 
    <span class="text-indigo-700 font-semibold">ÉP BIỂN SỐ THỨC</span>, 
    biển số cũ hoàn toàn có thể được phục hồi sáng bóng, phẳng mịn và bền như mới mà vẫn giữ nguyên số đăng ký ban đầu.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💡 Lý do nên phục hồi thay vì làm biển mới</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Giữ nguyên số gốc:</strong> biển số là “danh tính” của xe, gắn liền với hồ sơ đăng kiểm và bảo hiểm. Phục hồi giúp giữ nguyên tính pháp lý.</li>
    <li><strong>Hợp pháp 100%:</strong> theo quy định, việc phục hồi (không thay đổi ký tự, số, kích thước) hoàn toàn được phép.</li>
    <li><strong>Tiết kiệm hơn 60% chi phí:</strong> so với làm mới, phục hồi nhanh hơn, rẻ hơn và hiệu quả tương đương.</li>
    <li><strong>Không cần làm lại đăng kiểm:</strong> vì số xe và tem gốc vẫn còn nguyên, giúp tiết kiệm thời gian đáng kể.</li>
  </ul>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🧰 Quy trình phục hồi tại ÉP BIỂN SỐ THỨC</h3>
  <p>
    Quy trình phục hồi biển số được thực hiện chuyên nghiệp với hệ thống máy ép Titan CNC, đảm bảo độ chính xác và thẩm mỹ tuyệt đối.
  </p>

  <ol class="list-decimal pl-6 space-y-1">
    <li>Tiếp nhận và kiểm tra tình trạng biển số cũ.</li>
    <li>Loại bỏ lớp sơn, gỉ sét và tẩy sạch bề mặt bằng dung dịch chuyên dụng.</li>
    <li>Ép nhiệt bằng công nghệ Titan 3mm – chống oxy hóa, chống phai màu.</li>
    <li>Phủ lớp nano bảo vệ – chống bám bụi, chống nước.</li>
    <li>Kiểm tra ánh sáng phản quang, viền, độ phẳng và độ bền trước khi bàn giao.</li>
  </ol>

  <p>
    Toàn bộ quy trình được giám sát nghiêm ngặt, đảm bảo biển số sau khi phục hồi đạt tiêu chuẩn Bộ Giao Thông Vận Tải. 
    Biển có thể sử dụng ổn định trên 5 năm mà không bị ố hoặc phai.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Ưu điểm vượt trội</h3>
  <p>
    Phục hồi biển số bằng Titan và mica cao cấp mang lại nhiều lợi ích vượt trội so với làm mới:
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li>Giữ nguyên số gốc, hợp pháp khi tham gia giao thông.</li>
    <li>Không cần thay tem, không phải đi đăng ký lại biển.</li>
    <li>Bề mặt sáng bóng, phản sáng tốt – an toàn khi lái xe ban đêm.</li>
    <li>Chống trầy, chống nước, chịu nhiệt tốt, không cong vênh.</li>
    <li>Chi phí thấp, thời gian nhanh, bảo hành 24 tháng.</li>
  </ul>

  <p>
    Với lớp phủ nano và công nghệ ép thủy lực hiện đại, biển số sau phục hồi còn có khả năng chống bám bẩn cực cao.
    Dù trời mưa, bụi đường hay nắng gắt, biển vẫn sáng bóng và rõ nét như ngày đầu.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🧠 So sánh phục hồi và làm mới biển</h3>
  <table class="w-full border-collapse border border-gray-200 text-sm md:text-base">
    <thead class="bg-yellow-100 text-gray-800">
      <tr>
        <th class="border p-2 text-left">Tiêu chí</th>
        <th class="border p-2 text-left">Phục hồi</th>
        <th class="border p-2 text-left">Làm mới</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Giữ số gốc</td>
        <td class="border p-2 text-green-700 font-semibold">✅ Có</td>
        <td class="border p-2 text-red-600">❌ Không</td>
      </tr>
      <tr>
        <td class="border p-2">Chi phí</td>
        <td class="border p-2">Tiết kiệm 60–70%</td>
        <td class="border p-2">Cao hơn gấp đôi</td>
      </tr>
      <tr>
        <td class="border p-2">Thủ tục</td>
        <td class="border p-2">Không cần đăng ký lại</td>
        <td class="border p-2">Phải làm lại hồ sơ</td>
      </tr>
      <tr>
        <td class="border p-2">Thời gian</td>
        <td class="border p-2">Khoảng 15–30 phút</td>
        <td class="border p-2">Từ 3–5 ngày</td>
      </tr>
      <tr>
        <td class="border p-2">Độ bền</td>
        <td class="border p-2">Trên 5 năm</td>
        <td class="border p-2">3–4 năm</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💬 Cảm nhận từ khách hàng</h3>
  <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
    “Tôi tưởng phải làm lại biển mới, nhưng Thức phục hồi giúp biển sáng như mới, giữ nguyên số gốc – tiết kiệm cả tiền lẫn thời gian!”  
    <br/>— Anh Long, Đồng Nai.
  </blockquote>

  <p>
    Hàng trăm khách hàng tại Biên Hòa, Bình Dương, và TP.HCM đã tin tưởng sử dụng dịch vụ của 
    <strong class="text-indigo-700">ÉP BIỂN SỐ THỨC</strong> 
    nhờ chất lượng phục hồi cao, kỹ thuật viên tận tâm và chính sách bảo hành chu đáo.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📍 Thông tin liên hệ</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">ÉP BIỂN SỐ THỨC</span> – Phục hồi biển cũ sáng như mới, tiết kiệm và hợp pháp 100%.
  </p>
</div>
`,

    },
    4: {
      title: "Cảnh báo biển số giả tràn lan trên thị trường",
      img: "https://i.postimg.cc/Vkmf4TGr/56.jpg",
     content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    <strong>Hiện nay, trên thị trường xuất hiện rất nhiều cơ sở làm biển số giả</strong>, 
    sử dụng vật liệu kém chất lượng và quy trình ép thủ công không đạt chuẩn. 
    Điều này không chỉ khiến biển số dễ bong tróc, phai màu mà còn tiềm ẩn nguy cơ 
    <span class="text-red-600 font-semibold">vi phạm pháp luật</span> và gây nguy hiểm khi lưu thông trên đường.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">⚠️ Rủi ro khi làm biển giả hoặc ép kém chất lượng</h3>
  <p>
    Nhiều cơ sở không có giấy phép hoạt động hoặc không đạt tiêu chuẩn kỹ thuật 
    đang tràn lan trên mạng và các tuyến phố lớn. Họ sử dụng các vật liệu rẻ tiền như nhôm mỏng, 
    mica không phản quang và sơn thủ công, khiến biển số bị hư hỏng chỉ sau vài tháng.
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li>Biển dễ bong lớp sơn, phai màu nhanh khi gặp nắng hoặc nước.</li>
    <li>Phản quang kém, gây khó nhìn vào ban đêm – dễ bị cảnh sát giao thông xử phạt.</li>
    <li>Không đạt chuẩn kích thước, font chữ, dễ bị coi là biển giả.</li>
    <li>Nguy hiểm khi lưu thông vì bề mặt dễ nứt vỡ, cong méo, ảnh hưởng thẩm mỹ và an toàn.</li>
  </ul>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🚫 Biển giả – hậu quả pháp lý nghiêm trọng</h3>
  <p>
    Theo Nghị định 100/2019/NĐ-CP và Nghị định 123/2021/NĐ-CP, 
    hành vi <strong>làm, sử dụng biển số giả</strong> có thể bị phạt đến 
    <span class="text-red-600 font-bold">6 triệu đồng</span> đối với cá nhân 
    và bị tịch thu phương tiện nếu tái phạm. Ngoài ra, người sử dụng biển giả còn 
    có thể bị truy cứu trách nhiệm hình sự nếu gây hậu quả nghiêm trọng.
  </p>

  <blockquote class="border-l-4 border-red-500 pl-4 italic text-gray-700">
    “Rất nhiều khách hàng mang biển bị phạt tới ÉP BIỂN SỐ THỨC nhờ kiểm tra – 
    thì phát hiện biển đó không đạt chuẩn phản quang và ép sai vật liệu.”  
    <br/>— Kỹ thuật viên Thức Ép Biển Số Biên Hòa
  </blockquote>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Chọn nơi uy tín – bảo hành rõ ràng</h3>
  <p>
    Để tránh rủi ro, khách hàng nên chọn những cơ sở có thương hiệu, có giấy phép, 
    sử dụng máy móc hiện đại và vật liệu đạt chuẩn.  
    <strong>ÉP BIỂN SỐ THỨC</strong> là một trong những địa chỉ đáng tin cậy, 
    với hơn 7 năm kinh nghiệm trong lĩnh vực phục hồi và ép biển Titan cao cấp.
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Vật liệu Titan 3mm:</strong> chống trầy, chống oxy hóa, phản sáng cực tốt.</li>
    <li><strong>Ép thủy lực CNC:</strong> đảm bảo độ phẳng tuyệt đối và viền sắc nét.</li>
    <li><strong>Bảo hành 24 tháng:</strong> nếu bong, phai, tróc – đổi mới miễn phí.</li>
    <li><strong>Được cấp phép hoạt động hợp pháp:</strong> quy trình đạt chuẩn ISO.</li>
  </ul>

  <p>
    Biển được ép tại Thức có phản quang chuẩn, chống trầy xước và giữ màu bền tới 5–7 năm. 
    Mỗi sản phẩm đều có tem bảo hành, phiếu thông tin kỹ thuật và hình ảnh lưu trữ sau hoàn thiện – 
    giúp khách hàng yên tâm tuyệt đối.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📋 So sánh biển thật và biển giả</h3>
  <table class="w-full border-collapse border border-gray-200 text-sm md:text-base">
    <thead class="bg-yellow-100 text-gray-800">
      <tr>
        <th class="border p-2 text-left">Tiêu chí</th>
        <th class="border p-2 text-left">Biển thật (ÉP BIỂN SỐ THỨC)</th>
        <th class="border p-2 text-left">Biển giả / ép kém</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Chất liệu</td>
        <td class="border p-2 text-green-700 font-semibold">Titan 3mm, mica phản quang chuẩn</td>
        <td class="border p-2 text-gray-600">Nhôm mỏng, sơn tay, dễ trầy</td>
      </tr>
      <tr>
        <td class="border p-2">Phản quang</td>
        <td class="border p-2 text-green-700 font-semibold">Rõ, sáng, đạt chuẩn CSGT</td>
        <td class="border p-2 text-red-600">Kém, dễ bị xử phạt</td>
      </tr>
      <tr>
        <td class="border p-2">Độ bền</td>
        <td class="border p-2 text-green-700 font-semibold">5–7 năm</td>
        <td class="border p-2">Chưa tới 1 năm</td>
      </tr>
      <tr>
        <td class="border p-2">Pháp lý</td>
        <td class="border p-2 text-green-700 font-semibold">Hợp pháp 100%</td>
        <td class="border p-2 text-red-600">Có thể bị phạt nặng</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🧠 Cách nhận biết biển giả</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li>Màu phản quang yếu, không sáng rõ khi chiếu đèn.</li>
    <li>Viền biển không đều, dễ bong hoặc tróc sơn.</li>
    <li>Chữ số in lệch hoặc không sắc nét.</li>
    <li>Không có tem bảo hành hoặc thông tin cơ sở ép.</li>
  </ul>

  <p>
    Khi nhận biển phục hồi hoặc ép mới, khách hàng nên kiểm tra kỹ nguồn gốc, 
    hỏi rõ về quy trình, vật liệu và thời hạn bảo hành. 
    Một biển đạt chuẩn không chỉ đẹp mà còn đảm bảo an toàn pháp lý và thẩm mỹ cho xe.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">✅ Vì sao nên chọn ÉP BIỂN SỐ THỨC</h3>
  <p>
    Với phương châm <em>“Làm thật – Bảo hành thật – Chất lượng thật”</em>, 
    <strong>ÉP BIỂN SỐ THỨC</strong> đã trở thành thương hiệu uy tín hàng đầu khu vực Biên Hòa và miền Nam. 
    Mỗi sản phẩm đều được kiểm tra bằng ánh sáng chuẩn và đo độ phản quang đạt tiêu chuẩn quốc gia.
  </p>

  <p>
    Ngoài ra, Thức còn cung cấp dịch vụ bảo trì, làm sạch, đánh bóng miễn phí định kỳ cho khách hàng cũ.  
    Biển luôn sáng, xe luôn đẹp – đó là cam kết thực tế mà Thức mang lại.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📞 Liên hệ ngay hôm nay</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">Chọn đúng nơi – Biển sáng bền lâu – An toàn khi lưu thông.</span>
  </p>
</div>
`,

    },
    5: {
      title: "Công nghệ ép nhiệt Titan – bước tiến vượt trội",
      img: "https://i.postimg.cc/GmKcfQVq/67.jpg",
    content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <p>
    <strong>Công nghệ ép Titan 3mm</strong> là bước tiến vượt bậc trong lĩnh vực phục hồi và gia công biển số xe tại Việt Nam. 
    Đây là công nghệ tiên tiến nhất được <span class="text-indigo-700 font-semibold">ÉP BIỂN SỐ THỨC – Biên Hòa</span> 
    áp dụng độc quyền, giúp mang lại độ sáng, độ bền và tính thẩm mỹ vượt trội so với các phương pháp ép thông thường.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">⚙️ Công nghệ Titan 3mm là gì?</h3>
  <p>
    Titan 3mm là vật liệu kim loại cao cấp, được chế tạo bằng hợp kim Titan nguyên chất, 
    có khả năng <strong>chống oxy hóa, chống gỉ sét</strong> và chịu nhiệt cực tốt. 
    Khi được ép lên biển số thông qua công nghệ nhiệt áp lực cao, Titan tạo nên bề mặt sáng bóng, 
    mịn như gương, vừa đẹp vừa bền bỉ theo thời gian.
  </p>

  <p>
    Khác với các loại biển mica thông thường chỉ dày 1–2mm, Titan 3mm có cấu trúc cứng hơn gấp 3 lần, 
    giúp tăng khả năng chống va đập, chống trầy xước và không bị cong vênh khi gặp nhiệt độ cao.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Ưu điểm vượt trội của công nghệ ép Titan 3mm</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Sáng bóng và phản quang cao:</strong> Bề mặt Titan phản chiếu ánh sáng cực tốt, giúp biển nổi bật cả ngày lẫn đêm.</li>
    <li><strong>Chống trầy, chống phai:</strong> Titan 3mm có khả năng tự bảo vệ, không bong sơn và giữ màu lên đến 7 năm.</li>
    <li><strong>Chịu nhiệt & chịu lực cực tốt:</strong> Biển không bị biến dạng khi gặp thời tiết nóng ẩm hoặc va chạm nhẹ.</li>
    <li><strong>Thẩm mỹ cao:</strong> Biển ép Titan có ánh kim sang trọng, làm nổi bật xe và thể hiện phong cách chủ xe.</li>
    <li><strong>An toàn & hợp pháp:</strong> Toàn bộ quy trình ép được thực hiện đúng quy chuẩn Bộ GTVT, có tem bảo hành 24 tháng.</li>
  </ul>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🏭 Quy trình ép Titan tại ÉP BIỂN SỐ THỨC Biên Hòa</h3>
  <p>
    Quy trình ép Titan 3mm tại xưởng Thức được tự động hóa bằng hệ thống máy ép thủy lực 
    và máy ép nhiệt CNC công suất lớn – đảm bảo độ chính xác tuyệt đối.
  </p>

  <ol class="list-decimal pl-6 space-y-1">
    <li><strong>Tiếp nhận & làm sạch:</strong> Biển cũ được vệ sinh, tẩy gỉ và làm phẳng bằng máy chà nhám công nghiệp.</li>
    <li><strong>Tạo lớp bám Titan:</strong> Dùng kỹ thuật ép keo nano giúp Titan bám chặt vào lớp nền kim loại.</li>
    <li><strong>Ép nhiệt tự động:</strong> Máy ép nhiệt CNC điều chỉnh áp lực & nhiệt độ chuẩn xác đến từng milimet.</li>
    <li><strong>Phủ nano bảo vệ:</strong> Lớp nano chống bám bụi, chống nước, giúp biển luôn sáng mới.</li>
    <li><strong>Kiểm tra & bàn giao:</strong> Mỗi biển đều được đo phản quang, kiểm tra màu sắc và độ phẳng trước khi bàn giao.</li>
  </ol>

  <p>
    Nhờ quy trình khép kín, biển sau khi ép có độ sáng, độ phẳng và độ bền vượt trội. 
    Khi cầm lên tay, khách hàng có thể cảm nhận rõ độ dày, sự mát lạnh và chắc chắn đặc trưng của Titan.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📊 So sánh Titan 3mm và mica thông thường</h3>
  <table class="w-full border-collapse border border-gray-200 text-sm md:text-base">
    <thead class="bg-yellow-100 text-gray-800">
      <tr>
        <th class="border p-2 text-left">Tiêu chí</th>
        <th class="border p-2 text-left">Titan 3mm</th>
        <th class="border p-2 text-left">Mica thông thường</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Độ dày</td>
        <td class="border p-2 font-semibold text-green-700">3mm – cứng chắc</td>
        <td class="border p-2 text-gray-600">1.5mm – dễ cong</td>
      </tr>
      <tr>
        <td class="border p-2">Độ phản quang</td>
        <td class="border p-2 font-semibold text-green-700">Rất cao – đạt chuẩn ISO</td>
        <td class="border p-2 text-gray-600">Trung bình</td>
      </tr>
      <tr>
        <td class="border p-2">Khả năng chịu lực</td>
        <td class="border p-2 font-semibold text-green-700">Chịu va đập mạnh</td>
        <td class="border p-2 text-gray-600">Dễ nứt vỡ</td>
      </tr>
      <tr>
        <td class="border p-2">Tuổi thọ</td>
        <td class="border p-2 font-semibold text-green-700">5–7 năm</td>
        <td class="border p-2 text-gray-600">2–3 năm</td>
      </tr>
      <tr>
        <td class="border p-2">Màu sắc</td>
        <td class="border p-2 font-semibold text-green-700">Giữ màu lâu, sáng bóng</td>
        <td class="border p-2 text-gray-600">Dễ phai, xỉn màu</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💬 Cảm nhận từ khách hàng</h3>
  <blockquote class="border-l-4 border-indigo-500 pl-4 italic text-gray-700">
    “Mình ép biển Titan 3mm tại Thức, nhìn sang hẳn – xe sáng như mới, đi mưa nắng vẫn y như ban đầu.”  
    <br/>— Anh Duy, Biên Hòa.
  </blockquote>

  <p>
    Hầu hết khách hàng sau khi ép Titan đều đánh giá cao độ sáng và khả năng giữ màu bền lâu. 
    Một số còn quay lại sau 3–4 năm để vệ sinh định kỳ mà biển vẫn sáng bóng, không trầy xước.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🔧 Dịch vụ hậu mãi & bảo hành</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Bảo hành 24 tháng:</strong> nếu bong, tróc, phai – đổi mới miễn phí.</li>
    <li><strong>Đánh bóng định kỳ miễn phí:</strong> giúp biển luôn sáng như mới.</li>
    <li><strong>Phục vụ tận nơi:</strong> hỗ trợ ép hoặc giao hàng toàn quốc.</li>
  </ul>

  <p>
    Với sự đầu tư máy móc hiện đại, đội ngũ kỹ thuật viên lành nghề và thái độ phục vụ tận tâm, 
    <strong>ÉP BIỂN SỐ THỨC</strong> khẳng định vị thế là đơn vị tiên phong 
    trong lĩnh vực phục hồi & ép biển Titan chất lượng cao.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📍 Liên hệ ngay hôm nay</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">Công nghệ Titan 3mm – sáng hơn, bền hơn, đẳng cấp hơn – chỉ có tại Thức Ép Biển Số.</span>
  </p>
</div>
`,

    },
    6: {
      title: "Khách hàng chia sẻ trải nghiệm tại ÉP BIỂN SỐ THỨC",
      img: "https://i.postimg.cc/4xSLqdxj/42.jpg",
     content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <blockquote class="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
    “Biển số xe tôi bị trầy nặng, tưởng phải thay, nhưng sau khi ép lại ở Thức, biển sáng như gương, nhìn như mới!”  
    <br/>— <strong>Anh Duy, khách hàng Biên Hòa</strong>
  </blockquote>

  <p>
    Đó là cảm nhận chung của hàng nghìn khách hàng đã lựa chọn 
    <span class="text-indigo-700 font-semibold">ÉP BIỂN SỐ THỨC</span> 
    – đơn vị tiên phong trong công nghệ phục hồi và ép biển Titan 3mm tại khu vực Biên Hòa, Đồng Nai.  
    Mỗi tấm biển không chỉ được “tái sinh” về hình thức mà còn được bảo vệ toàn diện bằng công nghệ 
    <strong>ép nhiệt Titan CNC</strong> độc quyền.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌟 Trải nghiệm thật – Kết quả thật</h3>
  <p>
    Trước khi đến với Thức, nhiều khách hàng từng hoang mang vì biển số của mình bị móp, rỉ sét, 
    mất phản quang, hoặc chữ số mờ nhạt theo thời gian. 
    Nhưng chỉ sau <strong>20 phút phục hồi</strong>, họ bất ngờ khi thấy biển trở nên 
    sáng bóng, phẳng mịn, phản sáng mạnh và sắc nét như vừa mới cấp.
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li>Độ sáng và phản quang tăng gấp <strong>3 lần</strong> so với biển cũ.</li>
    <li>Bề mặt phủ nano chống bám bụi và nước, dễ vệ sinh.</li>
    <li>Ép chuẩn kích thước Bộ GTVT – hợp pháp 100%.</li>
    <li>Khách hàng được kiểm tra lại biển dưới ánh đèn chuyên dụng trước khi nhận.</li>
  </ul>

  <p>
    Mỗi khách hàng đều được chụp ảnh “<strong>trước & sau phục hồi</strong>” để so sánh, 
    tạo sự minh bạch và tin tưởng tuyệt đối.  
    Không ít người đã đăng lại hình ảnh biển của mình trên Facebook cá nhân kèm lời khen 
    về độ “bóng như gương” và dịch vụ chuyên nghiệp.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💬 Phản hồi từ khách hàng</h3>
  <blockquote class="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
    “Ban đầu tôi nghi ngờ vì biển xe mình móp nặng, nhưng khi đến Thức, họ phục hồi bằng công nghệ Titan. 
    Giờ nhìn xe như vừa mới đăng ký vậy!”  
    <br/>— Chị Thảo, TP. Biên Hòa
  </blockquote>

  <blockquote class="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
    “Thái độ nhân viên rất thân thiện, làm nhanh mà kỹ. Biển số sáng bóng, có tem bảo hành, 
    rất chuyên nghiệp.”  
    <br/>— Anh Huy, Bình Dương
  </blockquote>

  <p>
    Trung bình mỗi tháng, <strong>ÉP BIỂN SỐ THỨC</strong> phục vụ hơn <strong>2.000 khách hàng</strong>, 
    trong đó 98% để lại phản hồi 5⭐ về chất lượng, thời gian và thái độ phục vụ.  
    Điều này giúp Thức trở thành thương hiệu được nhắc đến nhiều nhất trong lĩnh vực phục hồi biển tại miền Nam.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">⚙️ Vì sao khách hàng chọn Thức?</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Máy ép Titan tự động CNC:</strong> đảm bảo từng chi tiết phẳng và chuẩn.</li>
    <li><strong>Vật liệu Titan 3mm:</strong> siêu bền, chống oxy hóa, phản quang tốt.</li>
    <li><strong>Phủ nano bảo vệ:</strong> không bong tróc, chống ố vàng.</li>
    <li><strong>Thời gian thực hiện:</strong> chỉ 10–20 phút, nhận ngay.</li>
    <li><strong>Bảo hành 24 tháng:</strong> nếu bong, phai, tróc – đổi mới miễn phí.</li>
  </ul>

  <p>
    Bên cạnh chất lượng kỹ thuật, Thức còn gây ấn tượng nhờ phong cách phục vụ tận tâm – 
    tư vấn chi tiết, kiểm tra biển cũ miễn phí và hướng dẫn khách hàng cách bảo quản lâu dài.  
    Với tiêu chí <strong>“Làm thật – Bảo hành thật – Chất lượng thật”</strong>, 
    thương hiệu này đã xây dựng được uy tín vững chắc trong lòng người dùng.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📊 Số liệu thực tế từ khách hàng</h3>
  <table class="w-full border-collapse border border-gray-200 text-sm md:text-base">
    <thead class="bg-yellow-100 text-gray-800">
      <tr>
        <th class="border p-2 text-left">Chỉ số</th>
        <th class="border p-2 text-left">Trước phục hồi</th>
        <th class="border p-2 text-left">Sau phục hồi tại Thức</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border p-2">Độ phản quang</td>
        <td class="border p-2 text-gray-600">Mờ, khó nhìn ban đêm</td>
        <td class="border p-2 text-green-700 font-semibold">Sáng rõ, đạt chuẩn CSGT</td>
      </tr>
      <tr>
        <td class="border p-2">Độ phẳng bề mặt</td>
        <td class="border p-2 text-gray-600">Móp, trầy, cong viền</td>
        <td class="border p-2 text-green-700 font-semibold">Phẳng tuyệt đối</td>
      </tr>
      <tr>
        <td class="border p-2">Độ bền</td>
        <td class="border p-2 text-gray-600">1–2 năm</td>
        <td class="border p-2 text-green-700 font-semibold">5–7 năm</td>
      </tr>
      <tr>
        <td class="border p-2">Mức độ hài lòng</td>
        <td class="border p-2 text-gray-600">Chưa đến 70%</td>
        <td class="border p-2 text-green-700 font-semibold">98% hài lòng tuyệt đối</td>
      </tr>
    </tbody>
  </table>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🚘 Hậu phục hồi – Biển sáng như mới</h3>
  <p>
    Sau khi ép lại bằng Titan 3mm, biển không chỉ sáng mà còn phản chiếu ánh sáng mạnh hơn, 
    giúp người lái dễ nhận diện trong điều kiện đêm hoặc mưa.  
    Lớp phủ nano giúp hạn chế bám bẩn, nước trôi nhanh, giữ bề mặt luôn sạch bóng.
  </p>

  <p>
    Khách hàng có thể yêu cầu <strong>so sánh ảnh “trước – sau”</strong> ngay tại tiệm để kiểm chứng chất lượng.  
    Thức luôn sẵn sàng minh bạch quy trình, không dùng vật liệu trôi nổi, và có phiếu bảo hành rõ ràng.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📍 Liên hệ ÉP BIỂN SỐ THỨC</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">Hơn 5.000 khách hàng đã tin tưởng ÉP BIỂN SỐ THỨC.  
    Biển sáng – xe sang – dịch vụ tận tâm mỗi ngày.</span>
  </p>
</div>
`,

    },
    7: {
      title: "Tinh thần Việt trong từng tấm biển số",
      img: "https://i.postimg.cc/L58dLBCw/co2.png",
      content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <h2 class="text-3xl font-bold text-yellow-600">🇻🇳 Niềm Tự Hào Việt Nam – ÉP BIỂN SỐ THỨC</h2>

  <p>
    <strong>ÉP BIỂN SỐ THỨC</strong> không chỉ là một dịch vụ, mà là biểu tượng của sự tận tâm và khát khao vươn lên 
    của người Việt. Mỗi tấm biển số không đơn thuần là một sản phẩm – mà là kết tinh của 
    <strong>lao động chân chính, tỉ mỉ và niềm tự hào dân tộc</strong>.
  </p>

  <p>
    Từ một tiệm nhỏ tại Biên Hòa, Thức đã gây dựng nên thương hiệu uy tín hàng đầu trong lĩnh vực 
    <strong>phục hồi và ép biển số xe ô tô – xe máy</strong>.  
    Trải qua hơn 7 năm, chúng tôi vẫn giữ nguyên triết lý:  
    <em>“Làm thật, bảo hành thật, chất lượng thật.”</em>
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💎 Sứ mệnh – Làm đẹp cho biển, làm sang cho xe</h3>
  <p>
    Mỗi biển số là danh tính của chiếc xe – là niềm tự hào của người sở hữu.  
    Vì vậy, đội ngũ <strong>Thức Ép Biển Số</strong> luôn đặt trọn tâm huyết vào từng công đoạn:
  </p>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Tỉ mỉ từ khâu phục hồi:</strong> làm phẳng, sơn lại, xử lý rỉ sét từng milimet.</li>
    <li><strong>Chuẩn xác khi ép:</strong> dùng máy ép Titan 3mm tự động, đảm bảo độ phẳng và phản quang chuẩn Bộ GTVT.</li>
    <li><strong>Tận tâm khi bàn giao:</strong> lau sạch, đóng gói, dán tem bảo hành và hướng dẫn bảo quản chi tiết.</li>
  </ul>

  <p>
    Mỗi khách hàng đến với Thức đều cảm nhận được sự khác biệt – không ồn ào quảng cáo, 
    không hời hợt dịch vụ, mà là sự chân thành, chuyên nghiệp và chỉn chu trong từng hành động nhỏ.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌟 Tinh thần Việt trong từng chi tiết</h3>
  <p>
    <strong>ÉP BIỂN SỐ THỨC</strong> luôn tin rằng: “<em>Chất lượng thật sẽ tự nói thay lời quảng cáo</em>”.  
    Chúng tôi chọn con đường bền bỉ – đầu tư máy móc, đào tạo thợ chuyên nghiệp và giữ chữ tín với khách hàng.  
    Từ vật liệu Titan 3mm chuẩn quốc tế đến quy trình ép chuẩn ISO, mọi thứ đều được thực hiện với 
    <strong>tinh thần sáng tạo của người Việt Nam</strong>.
  </p>

  <blockquote class="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
    “Khi tôi nhìn thấy biển số của mình sáng bóng trở lại, tôi thấy như thấy lại niềm vui sở hữu chiếc xe đầu tiên.”  
    <br/>— Khách hàng Anh Lâm, Biên Hòa
  </blockquote>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🔥 Hành trình từ một tiệm nhỏ đến thương hiệu uy tín</h3>
  <p>
    Năm 2017, Thức bắt đầu hành trình từ một góc nhỏ trên đường Nguyễn Ái Quốc, Biên Hòa.  
    Với chỉ vài bộ dụng cụ thủ công, Thức tự học, tự nghiên cứu và miệt mài làm từng chiếc biển.
  </p>

  <p>
    Năm 2020, Thức mạnh dạn đầu tư hệ thống <strong>máy ép Titan CNC</strong> – công nghệ hiện đại hàng đầu, 
    đưa dịch vụ ép biển tại Biên Hòa lên một tầm cao mới.  
    Đến nay, <strong>ÉP BIỂN SỐ THỨC</strong> phục vụ hàng nghìn khách hàng mỗi năm và trở thành địa chỉ tin cậy 
    cho người chơi xe khắp miền Nam.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">⚙️ Giá trị cốt lõi của ÉP BIỂN SỐ THỨC</h3>
  <ul class="list-disc pl-6 space-y-1">
    <li><strong>Tận tâm:</strong> coi mỗi tấm biển như chính tài sản của mình.</li>
    <li><strong>Uy tín:</strong> luôn giữ lời hứa, bảo hành thật, đổi mới nếu lỗi kỹ thuật.</li>
    <li><strong>Chất lượng:</strong> dùng vật liệu chính hãng, công nghệ chuẩn quốc tế.</li>
    <li><strong>Trách nhiệm:</strong> hỗ trợ khách hàng từ tư vấn, ép, đến bảo hành tận nơi.</li>
    <li><strong>Tôn vinh hàng Việt:</strong> chứng minh người Việt làm được sản phẩm đạt đẳng cấp quốc tế.</li>
  </ul>

  <p>
    Những giá trị này không chỉ tạo nên thương hiệu Thức, mà còn truyền cảm hứng cho nhiều thợ trẻ yêu nghề, 
    khát khao nâng tầm chất lượng Việt.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📸 Không chỉ là biển số – Là niềm tự hào</h3>
  <p>
    Khi khách hàng nhận biển mới, ánh mắt họ ánh lên sự hài lòng và tự hào.  
    Không ít người chụp ảnh đăng Facebook với caption:  
    <em>“Cảm ơn Thức – biển sáng như gương, xe sang như mới.”</em>  
    Chính những niềm vui nhỏ đó là động lực để chúng tôi không ngừng nỗ lực mỗi ngày.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🎯 Tầm nhìn tương lai</h3>
  <p>
    Thức hướng tới việc xây dựng chuỗi xưởng ép biển hiện đại khắp miền Nam, 
    ứng dụng công nghệ ép Titan thế hệ mới và phát triển dịch vụ bảo hành tận nơi.  
    Chúng tôi mong muốn mang tinh thần “<strong>Làm thật – Sống thật – Phục vụ thật</strong>” 
    đến với mọi khách hàng Việt Nam.
  </p>

  <blockquote class="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
    “Không phải vì muốn làm nhiều biển, mà vì muốn mỗi tấm biển đều là niềm tự hào.”  
    <br/>— Thức, người sáng lập thương hiệu
  </blockquote>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📞 Liên hệ & Kết nối</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">ÉP BIỂN SỐ THỨC – Niềm tự hào Việt, nâng tầm chất lượng thật.</span>
  </p>
</div>
`,

    },
    8: {
      title: "Khách hàng phản hồi tích cực trên mạng xã hội",
      img: "https://i.postimg.cc/9QCm1S80/52.jpg",
      content: `
<div class="space-y-6 text-gray-800 text-lg leading-relaxed">
  <h2 class="text-3xl font-bold text-yellow-600">💬 Fanpage ÉP BIỂN SỐ THỨC – Nơi lan tỏa niềm tin & chất lượng thật</h2>

  <p>
    Trên <strong>Fanpage chính thức của ÉP BIỂN SỐ THỨC</strong>, mỗi ngày chúng tôi nhận được 
    hàng trăm phản hồi tích cực từ khách hàng khắp nơi: từ Biên Hòa, TP.HCM, Bình Dương đến Cần Thơ, Nha Trang.
    Những lời khen ấy không chỉ là sự công nhận, mà còn là nguồn động lực vô giá giúp đội ngũ của Thức 
    không ngừng nỗ lực để mang lại <strong>chất lượng – tốc độ – uy tín hàng đầu</strong>.
  </p>

  <blockquote class="border-l-4 border-yellow-500 pl-4 italic text-gray-700">
    “Làm nhanh, đẹp, uy tín!”,  
    “Bảo hành tận tình, biển sáng như mới!”,  
    “Nhân viên vui vẻ, hỗ trợ nhiệt tình – sẽ giới thiệu thêm bạn bè!”
  </blockquote>

  <p>
    Đó là những bình luận xuất hiện thường xuyên dưới các bài đăng của fanpage 
    <a href="https://www.facebook.com/share/14PvS32VEaf/" target="_blank" class="text-blue-600 hover:underline font-semibold">
      ÉP BIỂN SỐ THỨC – Biên Hòa
    </a>.
    Mỗi phản hồi, mỗi lượt chia sẻ là minh chứng cho <strong>sự hài lòng thật của khách hàng thật</strong>, 
    giúp chúng tôi xây dựng cộng đồng gắn kết và uy tín hơn từng ngày.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌟 Hành trình xây dựng niềm tin từ chất lượng thật</h3>
  <p>
    Ngay từ ngày đầu thành lập, Thức đã xác định rõ: muốn phát triển lâu dài thì 
    không phải chỉ cần quảng cáo, mà cần <strong>chất lượng thật và dịch vụ tận tâm</strong>.  
    Chính điều đó khiến khách hàng sau khi trải nghiệm đều để lại bình luận và đánh giá 5⭐ 
    trên fanpage của chúng tôi.
  </p>

  <ul class="list-disc pl-6 space-y-1">
    <li><strong>98% khách hàng</strong> đánh giá “Rất hài lòng” về chất lượng ép và độ sáng của biển.</li>
    <li><strong>95% khách hàng</strong> quay lại sau 6–12 tháng để ép thêm cho xe người thân.</li>
    <li><strong>100% bình luận công khai</strong> được đội ngũ Thức phản hồi trong vòng 1 giờ.</li>
  </ul>

  <p>
    Những con số ấy thể hiện sự chuyên nghiệp và tinh thần cầu thị – 
    chúng tôi xem phản hồi của khách như kim chỉ nam để hoàn thiện từng ngày.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🚘 Dịch vụ được yêu thích nhất trên fanpage</h3>
  <p>
    Dựa trên thống kê 6 tháng gần nhất, ba dịch vụ được khách hàng nhắc đến và 
    chia sẻ nhiều nhất gồm:
  </p>
  <ol class="list-decimal pl-6 space-y-1">
    <li><strong>Phục hồi biển số cũ:</strong> Làm phẳng, ép lại bằng Titan 3mm sáng bóng như gương.</li>
    <li><strong>Ép biển số ô tô khung Titan:</strong> Giúp xe sang trọng, bền đẹp và chống trầy tối đa.</li>
    <li><strong>Bảo hành tận nơi:</strong> Hỗ trợ đổi mới miễn phí nếu bong, tróc, phai màu trong 24 tháng.</li>
  </ol>

  <p>
    Mỗi khi đăng bài “<em>Trước – Sau khi ép biển</em>”, fanpage lại nhận hàng trăm lượt thả tim và chia sẻ.  
    Nhiều người thậm chí bình luận “<strong>Muốn đi Biên Hòa chỉ để làm ở Thức!</strong>” – 
    đó là niềm tự hào to lớn của đội ngũ chúng tôi.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">💖 Tận tâm – Uy tín – Gắn bó lâu dài</h3>
  <p>
    Với chúng tôi, một bình luận “<strong>Hài lòng!</strong>” quý hơn bất kỳ quảng cáo nào.  
    Bởi đó là lời khẳng định rằng công sức, sự tỉ mỉ và tận tâm của đội ngũ đã được ghi nhận.  
    Mỗi phản hồi là một câu chuyện, là sự kết nối thật giữa Thức và khách hàng.
  </p>

  <blockquote class="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
    “Làm nhanh – Đẹp – Rẻ – Uy tín, không chỗ nào bằng Thức!”  
    <br/>— Anh Tuấn, khách hàng Đồng Nai
  </blockquote>

  <blockquote class="border-l-4 border-indigo-600 pl-4 italic text-gray-700">
    “Tôi tưởng biển phải thay, ai ngờ Thức ép lại sáng như mới. Cảm ơn đội ngũ rất tận tâm!”  
    <br/>— Chị Hương, khách hàng TP.HCM
  </blockquote>

  <p>
    Những lời khen này được chúng tôi lưu lại, đăng tải công khai trên fanpage như một lời tri ân.  
    Đó cũng là cách Thức duy trì sự minh bạch và niềm tin – hai giá trị cốt lõi trong suốt hành trình phục vụ khách hàng.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📸 Cộng đồng khách hàng thật – Biển thật</h3>
  <p>
    Mỗi ngày, hàng chục khách hàng gửi ảnh “<strong>biển số sau khi ép</strong>” về fanpage – 
    như một cách thể hiện sự hài lòng.  
    Chúng tôi thường xuyên đăng lại những hình ảnh đó với hashtag 
    <span class="text-indigo-700 font-semibold">#EpBienSoThuc #BienDepNhuMoi #UytinBiênHoa</span> 
    để lan tỏa tinh thần Việt – làm thật, đẹp thật.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">🌍 Lan tỏa tinh thần Việt ra khắp cả nước</h3>
  <p>
    Từ Biên Hòa, ÉP BIỂN SỐ THỨC đã và đang phục vụ khách hàng khắp 63 tỉnh thành.  
    Nhiều người dù ở xa vẫn chọn gửi biển qua bưu điện hoặc đặt lịch phục hồi tận nơi.
    Mỗi sản phẩm được đóng gói cẩn thận, có tem bảo hành và giấy hướng dẫn bảo quản chi tiết.
  </p>

  <p>
    Chúng tôi tin rằng: <strong>khi làm thật bằng tâm, khách hàng sẽ tự tìm đến</strong>.  
    Fanpage chính là cầu nối để lan tỏa giá trị đó – nơi khách hàng không chỉ tìm thấy dịch vụ, 
    mà còn cảm nhận được <em>tình yêu nghề và niềm tự hào Việt</em>.
  </p>

  <h3 class="text-2xl font-bold text-yellow-600 mt-8">📞 Kết nối cùng ÉP BIỂN SỐ THỨC</h3>
  <p>
    📍 <strong>Địa chỉ:</strong> 1181 Nguyễn Ái Quốc, P. Tân Mai, Biên Hòa, Đồng Nai  
    📞 <strong>Hotline:</strong> <span class="text-red-600 font-semibold">0977 055 990</span>  
    🌐 Facebook: <a href="https://www.facebook.com/share/14PvS32VEaf/" class="text-blue-600 hover:underline">ÉP BIỂN SỐ THỨC</a>  
    🎵 TikTok: <a href="https://www.tiktok.com/@thucepbienso" class="text-blue-600 hover:underline">@thucepbienso</a>
  </p>

  <p class="mt-8 font-semibold text-gray-700">
    — <span class="text-indigo-700">ÉP BIỂN SỐ THỨC – Nơi chất lượng thật tạo nên niềm tin thật.</span>
  </p>
</div>
`,

    },
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
