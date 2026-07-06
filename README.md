# Landing Page Cá Nhân

Đây là một landing page hiện đại, tối giản và responsive để hiển thị các kênh liên hệ cá nhân. Trang có thể mở trực tiếp bằng file index.html mà không cần backend hoặc database.

## Cấu trúc project

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── avatar.jpg
│   └── logo.png
└── README.md
```

## Cách thay avatar

1. Thay ảnh mới vào thư mục assets.
2. Đổi tên file thành avatar.jpg hoặc cập nhật đường dẫn trong file js/script.js:

```javascript
const profile = {
  avatar: "assets/avatar.jpg"
};
```

## Cách sửa link

Toàn bộ thông tin liên hệ được khai báo ở đầu file js/script.js trong object profile. Chỉ cần chỉnh các giá trị tương ứng:

```javascript
const profile = {
  zalo: "https://zalo.me/your-id",
  whatsapp: "https://wa.me/8490xxxxxxx",
  facebook: "https://facebook.com/your-profile",
  tiktok: "https://www.tiktok.com/@your-profile",
  instagram: "https://www.instagram.com/your-profile",
  website: "https://yourwebsite.com",
  email: "hello@yourdomain.com",
  phone: "+84 901 234 567"
};
```

## Cách deploy lên GitHub Pages

1. Tạo repository trên GitHub.
2. Đẩy toàn bộ project lên repository.
3. Vào Settings > Pages.
4. Chọn nguồn Deploy from a branch.
5. Chọn branch main hoặc master và thư mục root.
6. Lưu lại và chờ GitHub Pages triển khai.
7. Mở URL được cung cấp để xem landing page.

## Cách tạo QR Code tới landing page

1. Đảm bảo landing page đã được deploy lên GitHub Pages hoặc hosting khác.
2. Dùng một công cụ tạo QR Code như:
   - https://www.qrcode-monkey.com/
   - https://www.qr-code-generator.com/
3. Dán URL landing page vào ô nhập liệu.
4. Tải file QR Code về và in hoặc chia sẻ.

## Ghi chú

- Nếu muốn bỏ một nút liên hệ, có thể để giá trị rỗng trong object profile.
- Trang được thiết kế mobile-first và có hiệu ứng nhẹ để tăng trải nghiệm người dùng.
