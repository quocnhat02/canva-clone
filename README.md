# Canva Clone

Canva Clone là một ứng dụng web cho phép người dùng thiết kế, chỉnh sửa hình ảnh trực tuyến với các tính năng mạnh mẽ như AI tạo ảnh, quản lý dự án, xác thực người dùng và thanh toán. Dự án được xây dựng với Next.js, Drizzle ORM, Stripe, TailwindCSS và nhiều công nghệ hiện đại khác.

## 🚀 Tính năng nổi bật

- **Chỉnh sửa ảnh trực quan:** Kéo thả, thêm văn bản, hình khối, màu sắc, bộ lọc, v.v.
- **AI tạo ảnh:** Tích hợp AI để tạo, chỉnh sửa hoặc xóa nền ảnh tự động.
- **Quản lý dự án:** Lưu, mở, chỉnh sửa nhiều dự án thiết kế.
- **Xác thực & phân quyền:** Đăng ký, đăng nhập, bảo vệ tài khoản.
- **Thanh toán & nâng cấp:** Tích hợp Stripe cho các gói dịch vụ cao cấp.
- **Tải lên & quản lý ảnh:** Hỗ trợ upload, quản lý thư viện ảnh cá nhân.

## 🛠️ Công nghệ sử dụng

- **Next.js** (React, SSR, API routes)
- **Drizzle ORM** (quản lý database, migration)
- **Stripe** (thanh toán)
- **TailwindCSS** (giao diện)
- **Bun, npm, pnpm, yarn** (chạy dự án)
- **AI/ML** (tạo và xử lý ảnh)
- **Zustand, React Query** (quản lý trạng thái)
- **Radix UI, Lucide, React Icons** (UI components)

## 📂 Cấu trúc thư mục chính

- `src/features/editor/`: Tính năng chỉnh sửa ảnh, toolbar, sidebar, AI, template...
- `src/features/ai/`: Tích hợp AI tạo ảnh, xóa nền, filter...
- `src/features/projects/`: Quản lý dự án thiết kế.
- `src/features/images/`: Quản lý, upload ảnh.
- `src/features/auth/`: Xác thực, phân quyền.
- `src/features/subscriptions/`: Quản lý gói dịch vụ, thanh toán.
- `src/components/ui/`: Các thành phần UI tái sử dụng.
- `src/db/`: Cấu hình Drizzle ORM, schema database.
- `public/`: Ảnh, icon, tài nguyên tĩnh.

## ⚡️ Hướng dẫn cài đặt & chạy

1. **Clone dự án:**
   ```bash
   git clone <repo-url>
   cd canva-clone
   ```

````
2. **Cài đặt dependencies:**
   ```bash
bun install # hoặc npm install, yarn, pnpm
````

3. **Cấu hình môi trường:**
   - Tạo file `.env` theo mẫu `.env.example` (nếu có).
   - Thiết lập các biến môi trường cho database, Stripe, v.v.
4. **Chạy dự án:**
   ```bash
   bun dev # hoặc npm run dev, yarn dev, pnpm dev
   ```

```
5. **Truy cập:**
   Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt.

## 🧑‍💻 Đóng góp
- Fork, tạo branch mới, commit và gửi pull request.
- Mọi ý kiến đóng góp, báo lỗi hoặc tính năng mới đều được hoan nghênh!

## 📦 Triển khai
- Có thể triển khai dễ dàng trên Vercel, Netlify hoặc server riêng.
- Tham khảo tài liệu Next.js để biết thêm chi tiết.

## 📞 Liên hệ
- Nếu có thắc mắc hoặc cần hỗ trợ, vui lòng tạo issue hoặc liên hệ qua email của tác giả.
```
