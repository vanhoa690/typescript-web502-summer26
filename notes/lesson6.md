# React TypeScript Cơ Bản - Thực hành Todo List với JSON Server

## Mục tiêu

Sau bài học này, bạn sẽ biết cách:

- Tạo Fake REST API bằng JSON Server
- Sử dụng `useState`
- Sử dụng `useEffect`
- Gọi API bằng `axios`
- Hiển thị dữ liệu dạng Table
- Xóa một TodoItem
- Reload lại danh sách sau khi xóa

---

# Kiến thức cần học

- React Component
- JSX
- TypeScript Interface
- useState
- useEffect
- Fetch API
- JSON Server

---

# 1. Cài JSON Server

Tạo file `db.json`

```json
{
  "todos": [
    {
      "id": 1,
      "title": "Học React",
      "completed": false
    },
    {
      "id": 2,
      "title": "Học TypeScript",
      "completed": true
    },
    {
      "id": 3,
      "title": "Làm bài tập",
      "completed": false
    }
  ]
}
```

Chạy Server

```bash
npm run db
```

API

```text
GET http://localhost:3000/todos

DELETE http://localhost:3000/todos/1
```

JSON Server tạo nhanh một REST API từ file `db.json`, rất phù hợp để thực hành CRUD ở môi trường local.

---

# 2. Tạo Interface

```ts
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
```

---

# 3. useState

Dùng để lưu State.

```ts
const [todos, setTodos] = useState<Todo[]>([]);
```

Ý nghĩa

- todos → dữ liệu
- setTodos → cập nhật dữ liệu

TypeScript giúp xác định rõ kiểu dữ liệu của State để phát hiện lỗi ngay khi lập trình. :contentReference[oaicite:1]{index=1}

---

# 4. useEffect

`useEffect` dùng để thực hiện các công việc sau khi Component được render.

Ví dụ:

- Gọi API
- Đọc Local Storage
- Đăng ký sự kiện

```ts
useEffect(() => {}, []);
```

Mảng `[]`

Có nghĩa:

```text
Chỉ chạy 1 lần

↓

Khi Component được tạo
```

Theo tài liệu React, `useEffect` thường được dùng để đồng bộ Component với các nguồn dữ liệu bên ngoài như API hoặc trình duyệt.

---

# 5. Gọi API

```ts
const loadTodos = async () => {
  const res = await axios.get("http://localhost:3000/todos");

  const data = res.data;

  setTodos(data);
};
```

Gọi khi Component mở

```ts
useEffect(() => {
  loadTodos();
}, []);
```

---

# 6. Hiển thị Todo

```tsx
<tbody>
  {todos.map((todo) => (
    <tr key={todo.id}>
      <td>{todo.id}</td>

      <td>{todo.title}</td>

      <td>{todo.completed ? "Done" : "Pending"}</td>
    </tr>
  ))}
</tbody>
```

React sẽ render danh sách bằng `.map()` và mỗi phần tử cần có `key` để tối ưu việc cập nhật giao diện.

---

# 7. Xóa Todo

```ts
const deleteTodo = async (id: number) => {
  await axios.delete(`http://localhost:3000/todos/${id}`);

  loadTodos();
};
```

Sau khi xóa cần gọi lại

```ts
loadTodos();
```

để cập nhật giao diện.

---

# 8. Giao diện Table

```tsx
<div className="max-w-4xl mx-auto mt-10">
  <table className="w-full border">
    <thead>
      <tr className="bg-gray-200">
        <th>ID</th>

        <th>Title</th>

        <th>Status</th>

        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {todos.map((todo) => (
        <tr key={todo.id}>
          <td>{todo.id}</td>

          <td>{todo.title}</td>

          <td>{todo.completed ? "Done" : "Pending"}</td>

          <td>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

---

# 9. Luồng hoạt động

```text
Component mở

↓

useEffect()

↓

loadTodos()

↓

call API fetch data()

↓

JSON Server

↓

Danh sách Todo

↓

setTodos()

↓

React Render Table
```

---

# 10. Luồng xóa

```text
Click Delete

↓

deleteTodo()

↓

DELETE API

↓

JSON Server

↓

loadTodos()

↓

GET API

↓

Render lại Table
```

---

# 11. Các Hook đã sử dụng

## useState

Dùng để quản lý dữ liệu.

```ts
const [todos, setTodos] = useState([]);
```

---

## useEffect

Dùng để gọi API khi Component được render lần đầu.

```ts
useEffect(() => {
  loadTodos();
}, []);
```

---

# 12. Các lỗi thường gặp

- Quên chạy JSON Server
- Sai URL API
- Quên `await`
- Quên `useEffect`
- Quên `setTodos()`
- Quên `key` trong `map`
- Quên reload sau khi DELETE
- Sai kiểu dữ liệu TypeScript
- Không khai báo Interface

---

# 13. Bài tập thực hành

Hoàn thiện ứng dụng Todo List với các chức năng:

- Hiển thị danh sách Todo
- Xóa Todo
- Thêm Todo mới
- Đánh dấu Completed
- Tìm kiếm Todo theo tên
- Hiển thị số lượng Todo
- Thêm Loading khi gọi API
- Hiển thị thông báo khi API lỗi

---

# 14. Câu hỏi ôn tập

### Câu 1

`useState` dùng để làm gì?

---

### Câu 2

Vai trò của `setTodos()` là gì?

---

### Câu 3

`useEffect` chạy khi nào nếu Dependency Array là `[]`?

---

### Câu 4

Tại sao nên khai báo `interface Todo` trong TypeScript?

---

### Câu 5

Sau khi xóa dữ liệu, tại sao cần gọi lại `loadTodos()`?

---
