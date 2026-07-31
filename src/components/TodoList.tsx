import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface IToDoItem {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export default function ToDoList() {
  const [todos, setTodos] = useState<IToDoItem[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  async function loadTodos() {
    try {
      const res = await axios.get("http://localhost:3000/todos");
      setTodos(res.data);
    } catch (error) {
      alert("mesagge");
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Xoas hay ko")) return;
    await axios.delete("http://localhost:3000/todos/" + id);
    loadTodos();
  }
  return (
    <div>
      <h2>ToDoList</h2>
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
            <th className="px-4 py-2 border border-gray-300 text-left">Name</th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Description
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Status
            </th>
            <th className="px-4 py-2 border border-gray-300 text-left">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {todos.map((item: IToDoItem) => (
            <tr className="hover:bg-gray-50" key={item.id}>
              <td className="px-4 py-2 border border-gray-300">{item.id}</td>
              <td className="px-4 py-2 border border-gray-300">{item.title}</td>
              <td className="px-4 py-2 border border-gray-300">
                {item.description}
              </td>
              <td className="px-4 py-2 border border-gray-300">
                {item.completed ? "Da hoan thanh" : "Chua hoan thanh"}
              </td>
              <td className="px-4 py-3 border border-gray-200">
                <div className="flex items-center justify-center gap-2">
                  <Link
                    to={`/update/${item.id}`}
                    className="inline-flex items-center rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
