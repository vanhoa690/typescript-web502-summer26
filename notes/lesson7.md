# Lesson 7 - React Hook Form với React + TypeScript

## Mục tiêu bài học

Sau bài học này, sinh viên có thể:

- Hiểu React Hook Form là gì.
- Hiểu lợi ích so với useState.
- Cài đặt React Hook Form.
- Sử dụng useForm(), register(), handleSubmit().
- Validate dữ liệu và hiển thị lỗi.
- Reset form.
- Kết hợp React Hook Form với TypeScript.
- Áp dụng vào Todo App.

---

# 1. React Hook Form là gì?

React Hook Form là thư viện quản lý form trong React theo hướng tối ưu
hiệu năng, ít render, dễ validate và viết code ngắn gọn.

Ví dụ useState:

```tsx
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [status, setStatus] = useState(false);
```

Với React Hook Form:

```tsx
const { register, handleSubmit } = useForm();
```

---

# 2. Cài đặt

```bash
npm install react-hook-form
```

# 3. Interface

```tsx
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

# 4. Sử dụng useForm()

```tsx
import { useForm } from "react-hook-form";

interface TodoFormData {
  title: string;
}

const { register, handleSubmit } = useForm<TodoFormData>();

const onSubmit = (data: TodoFormData) => {
  console.log(data);
};
```

```tsx
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("title")} />
  <button>Add</button>
</form>
```

# 5. register()

```tsx
<input {...register("title")} />
```

Đăng ký input với React Hook Form.

# 6. handleSubmit()

```tsx
const onSubmit = (data: TodoFormData) => {
  console.log(data);
};
```

Ví dụ:

```json
{
  "title": "Learn React Hook Form"
}
```

# 7. Validate

```tsx
<input
  {...register("title", {
    required: "Không được để trống",
    minLength: { value: 5, message: "Ít nhất 5 ký tự" },
    maxLength: { value: 50, message: "Không quá 50 ký tự" },
  })}
/>
```

Hiển thị lỗi:

```tsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<TodoFormData>();

{
  errors.title && <p>{errors.title.message}</p>;
}
```

# 8. TodoForm hoàn chỉnh

```tsx
import { useForm } from "react-hook-form";
import axios from "axios";

interface TodoFormData {
  title: string;
}

export default function TodoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TodoFormData>();

  const onSubmit = async (data: TodoFormData) => {
    try {
      await axios.post("http://localhost:3000/todos", data);
      alert("Thêm thành công");
    } catch (error) {
      alert("Lỗi");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nhập công việc..."
        {...register("title", {
          required: "Không được để trống",
          minLength: { value: 5, message: "Tối thiểu 5 ký tự" },
        })}
      />
      {errors.title && <p>{errors.title.message}</p>}
      <button>Thêm</button>
    </form>
  );
}
```

# 9. Tổng kết

- useForm()
- register()
- handleSubmit()
- formState.errors

# 10. Bài tập thực hành

## Bài 1

Thêm Todo bằng React Hook Form, validate tiêu đề, reset form.

## Bài 2

Thêm Description, validate tối thiểu 10 ký tự.

## Bài 3

Thêm Priority (Low, Medium, High).

## Bài 4

Tìm kiếm Todo theo tên và hiển thị số kết quả.
