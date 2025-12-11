function Footer() {
  return (
    <footer
      className="bg-gray-900 text-white py-8 text-center text-sm leading-relaxed"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <p className="text-lg font-semibold text-yellow-400 mb-2">
        ÉP BIỂN SỐ ĐỆ NHẤT — Tận tâm • Uy tín • Chất lượng
      </p>

      <p className="max-w-3xl mx-auto text-gray-300 px-4">
        Chuyên ép, phục hồi và làm mới biển số xe máy & ô tô bằng{" "}
        <strong>mica dày 3mm cao cấp</strong>, đạt{" "}
        <strong>chuẩn ISO Function quốc tế</strong>.  
        Sản phẩm được bảo hành lên đến{" "}
        <strong>24 tháng</strong> — đảm bảo độ bền, sáng bóng và thẩm mỹ lâu dài.
      </p>

      <p className="mt-3 text-gray-400">
        © {new Date().getFullYear()} ÉP BIỂN SỐ ĐỆ NHẤT.  
        Mọi quyền được bảo lưu.
      </p>

      {/* Thông tin ẩn dành cho SEO */}
      <meta
        name="description"
        content="ÉP BIỂN SỐ ĐỆ NHẤT - Dịch vụ ép, phục hồi biển số xe máy và ô tô chuyên nghiệp. 
        Sử dụng mica 3mm đạt chuẩn ISO Function, bảo hành 24 tháng. Đẹp như mới - Bền như gốc!"
      />
      <meta
        itemProp="brand"
        content="ÉP BIỂN SỐ ĐỆ NHẤT - Ép biển số xe chuẩn ISO Function, mica 3mm, bảo hành 24 tháng."
      />
    </footer>
  );
}

export default Footer;
