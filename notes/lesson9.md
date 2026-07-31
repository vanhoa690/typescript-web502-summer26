# Lesson 9 - Đăng ký tài khoản (Register) với React Hook Form + TypeScript

## API Register : /register

# Nội dung bài học

1.  Luồng đăng ký tài khoản
2.  Chuẩn bị API
3.  Tạo Register Page
4.  Khởi tạo React Hook Form
5.  Validate dữ liệu
6.  Gọi API Register
7.  Loading
8.  Hiển thị lỗi
9.  Chuyển trang sau khi đăng ký
10. Bài tập thực hành

---

# 1. Luồng đăng ký

```text
Người dùng
      │
      ▼
Nhập thông tin
      │
      ▼
React Hook Form Validate
      │
      ▼
POST /register
      │
      ▼
Server tạo tài khoản
      │
      ▼
Đăng ký thành công
      │
      ▼
Chuyển sang Login
```

---

# 2. API Register

```http
POST http://localhost:3000/register
```

Body

```json
{
  "name": "Nguyễn Văn A",
  "email": "a@gmail.com",
  "password": "123456"
}
```

Response

```json
{
  "id": 1,
  "name": "Nguyễn Văn A",
  "email": "a@gmail.com"
}
```

---

# 3. Tạo trang Register

```text
src/pages/RegisterPage.tsx
```

---

# 4. Interface

```ts
interface RegisterForm {
  name: string;
  email: string;
  password: string;
}
```

---

# 5. Khởi tạo React Hook Form

```tsx
const {
  register,
  handleSubmit,
  formState: { errors, isSubmitting },
} = useForm<RegisterForm>();
```

- register(): kết nối input.
- handleSubmit(): xử lý submit.
- errors: chứa lỗi validate.
- isSubmitting: trạng thái đang gửi dữ liệu.

---

# 6. Thiết kế Form

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
```

Tên

```tsx
<input
  {...register("name", {
    required: "Vui lòng nhập họ tên",
  })}
/>

<p>{errors.name?.message}</p>
```

Email

```tsx
<input
  {...register("email", {
    required: "Email là bắt buộc",
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Email không hợp lệ",
    },
  })}
/>

<p>{errors.email?.message}</p>
```

Password

```tsx
<input
  type="password"
  {...register("password", {
    required: "Vui lòng nhập mật khẩu",
    minLength: {
      value: 6,
      message: "Tối thiểu 6 ký tự",
    },
  })}
/>

<p>{errors.password?.message}</p>
```

---

# 7. Gọi API

Import

```tsx
import axios from "axios";
```

Submit

```tsx
const onSubmit = async (data: RegisterForm) => {
  try {
    await axios.post("http://localhost:3000/register", data);

    alert("Đăng ký thành công");
  } catch (error) {
    alert("Đăng ký thất bại");
  }
};
```

---

# 8. Điều hướng

```tsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
```

```tsx
const onSubmit = async (data: RegisterForm) => {
  try {
    await axios.post("http://localhost:3000/register", data);

    alert("Đăng ký thành công");

    navigate("/login");
  } catch (error) {
    alert("Có lỗi xảy ra");
  }
};
```

---

# 9. Loading

```tsx
<button disabled={isSubmitting}>
  {isSubmitting ? "Đang đăng ký..." : "Đăng ký"}
</button>
```

---

# 10. Bài tập

1.  Thêm Confirm Password.
2.  Thêm trường Số điện thoại.
3.  Reset form sau khi đăng ký thành công.
4.  Hiển thị lỗi dưới từng ô nhập.
5.  Tách API sang services/auth.ts.

---

# Tổng kết

- React Hook Form
- Validate dữ liệu
- Axios
- Loading
- Điều hướng
