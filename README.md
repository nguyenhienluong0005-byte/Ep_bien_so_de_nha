# Portfolio React + Tailwind + Framer Motion

Website giới thiệu bản thân đẹp, hiệu ứng mượt. Bạn chỉ cần đổi ảnh và thông tin trong `src/config/personal.js` là xong.

## Cài đặt & chạy
```bash
npm install
npm run dev
```
Build production:
```bash
npm run build && npm run preview
```

## Thay thông tin
- Ảnh avatar: thay file `public/profile.jpg` bằng ảnh của bạn (giữ tên file).
- Ảnh dự án: thay trong `public/projects/` (giữ đường dẫn trong `src/config/personal.js`).
- Nội dung: sửa trong `src/config/personal.js` (tên, mô tả, kỹ năng, dự án, link).
- Màu tối/sáng: bấm nút 🌙/☀️ trên navbar.

## Cấu trúc
- `src/sections/*`: các section Hero, About, Skills, Projects, Contact.
- `src/components/*`: các component dùng chung.
- `src/config/personal.js`: dữ liệu cá nhân dễ thay.
