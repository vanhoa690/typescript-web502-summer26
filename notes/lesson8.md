# Lesson 8 - Chỉnh sửa Todo với React Hook Form

## Mục tiêu bài học

Sau bài học này, sinh viên có thể:

- Điều hướng sang trang chỉnh sửa Todo theo `id`.
- Lấy `id` từ URL.
- Gọi API lấy thông tin Todo.
- Hiển thị dữ liệu lên Form bằng `reset()`.
- Cập nhật Todo bằng React Hook Form.
- Gọi API Update với Axios (`then/catch`).

---

# 1. Điều hướng sang trang Edit

Trong danh sách Todo, thêm nút **Edit**.

```tsx
import { Link } from "react-router-dom";

<Link to={`/edit/${todo.id}`}>Edit</Link>;
```

Ví dụ:

```text
http://localhost:5173/edit/1
```

---

# 2. Khai báo Router

```tsx
<Route path="/edit/:id" element={<TodoEdit />} />
```

---

# 3. Lấy id từ URL

Sử dụng `useParams()`.

```tsx
import { useParams } from "react-router-dom";

const { id } = useParams();
```

Kết quả:

```text
id = "1"
```

---

# 4. Tạo Form

```tsx
import { useForm } from "react-hook-form";

interface TodoFormData {
  title: string;
}

const { register, handleSubmit, reset } = useForm<TodoFormData>();
```

---

# 5. Lấy dữ liệu Todo

Khi mở trang Edit, gọi API lấy thông tin Todo.

```tsx
import axios from "axios";
import { useEffect } from "react";

useEffect(() => {
  axios
    .get(`http://localhost:3000/todos/${id}`)
    .then((response) => {
      reset(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, [id, reset]);
```

Giải thích:

- Gọi API theo `id`.
- Khi có dữ liệu, dùng `reset()` để đưa dữ liệu lên Form.

---

# 6. Hiển thị dữ liệu

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
  <input
    {...register("title", {
      required: "Không được để trống",
    })}
  />

  <button>Update</button>
</form>
```

Kết quả:

Nếu Todo có tiêu đề:

```text
Học React
```

Input sẽ tự động hiển thị:

```text
Học React
```

---

# 7. Cập nhật Todo

```tsx
const onSubmit = (data: TodoFormData) => {
  axios
    .put(`http://localhost:3000/todos/${id}`, data)
    .then(() => {
      alert("Cập nhật thành công");
    })
    .catch(() => {
      alert("Có lỗi xảy ra");
    });
};
```

Giải thích:

- Gửi dữ liệu mới lên server.
- Thành công → thông báo.
- Thất bại → hiển thị lỗi.

---

# 8. TodoEdit hoàn chỉnh

```tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

interface TodoFormData {
  title: string;
}

export default function TodoEdit() {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/todos/${id}`)
      .then((response) => {
        reset(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, reset]);

  const onSubmit = (data: TodoFormData) => {
    axios
      .put(`http://localhost:3000/todos/${id}`, data)
      .then(() => {
        alert("Cập nhật thành công");
      })
      .catch(() => {
        alert("Có lỗi xảy ra");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nhập công việc..."
        {...register("title", {
          required: "Không được để trống",
          minLength: {
            value: 5,
            message: "Tối thiểu 5 ký tự",
          },
        })}
      />

      {errors.title && <p>{errors.title.message}</p>}

      <button>Update</button>
    </form>
  );
}
```

---

# 9. Tổng kết

Sau bài học này, sinh viên đã biết:

- Sử dụng `Link` để chuyển sang trang Edit.
- Lấy `id` từ URL bằng `useParams()`.
- Gọi API lấy chi tiết Todo.
- Hiển thị dữ liệu bằng `reset()`.
- Cập nhật Todo với `axios.put()`.
- Xử lý thành công và thất bại bằng `then()` và `catch()`.

---

# 10. Bài tập thực hành

## Bài 1

Hoàn thành chức năng **Edit Todo**.

Yêu cầu:

- Thêm nút **Edit** ở danh sách Todo.
- Chuyển sang trang `/edit/:id`.
- Hiển thị dữ liệu của Todo lên Form.

---

## Bài 2

Validate trường `title`.

Yêu cầu:

- Bắt buộc nhập.
- Tối thiểu 5 ký tự.
- Hiển thị thông báo lỗi nếu không hợp lệ.

---

## Bài 3

Sau khi cập nhật thành công:

- Hiển thị thông báo **"Cập nhật thành công"**.
- Điều hướng về trang danh sách Todo.

---

## Bài 4

Thêm trường `completed` (checkbox) vào Form và cho phép cập nhật trạng thái hoàn thành của Todo.
