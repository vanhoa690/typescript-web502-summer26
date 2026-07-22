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
  }
  return (
    <div>
      <h2>ToDoList</h2>
      {todos.map((item: IToDoItem) => {
        return (
          <div>
            Item co ID: {item.id} va ten cong viec: {item.title}
          </div>
        );
      })}
    </div>
  );
}
