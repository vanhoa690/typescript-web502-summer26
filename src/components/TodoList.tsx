import { useEffect, useState } from "react";
import ToDoItem from "./TodoItem";
import axios from "axios";

interface IToDoItem {
  id: number;
  title: string;
}

export default function ToDoList() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  // const loadTodos = async () => {};
  async function loadTodos() {
    // axios / asycn await
    const res = await axios.get("http://localhost:3000/todos");
    setTodos(res.data);

    // show error: try / catch
  }
  return (
    <div>
      <h2>ToDoList</h2>
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
          {todos.map((item: IToDoItem) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td></td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
