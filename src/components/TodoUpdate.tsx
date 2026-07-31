import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

interface FormData {
  title: string;
  description: string;
  completed: boolean;
}

function TodoUpdate() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  // id

  // lay id nhu nao
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    axios.get("http://localhost:3000/todos/" + id).then((res) => {
      console.log(res.data);
      reset(res.data);
      // fill data vao form
    });
  }, [id]);

  const nav = useNavigate();

  const submitForm = (data: FormData) => {
    axios.put("http://localhost:3000/todos/" + id, data).then(() => {
      alert("Update thanh cong");
      nav("/list");
    });
  };
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-6">Todo TodoUpdateUpdate</h1>

        <form onSubmit={handleSubmit(submitForm)}>
          <div>
            <label htmlFor="text" className="block font-medium mb-1">
              Title
            </label>
            <input
              {...register("title")}
              type="text"
              id="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* errors */}
          </div>
          <div>
            <label htmlFor="text" className="block font-medium mb-1">
              Description
            </label>
            <input
              {...register("description")}
              type="text"
              id="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* errors */}
          </div>
          <div>
            <label htmlFor="text" className="block font-medium mb-1">
              Description
            </label>
            <input
              {...register("description")}
              type="text"
              id="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* errors */}
          </div>
          <div>
            <label htmlFor="text" className="block font-medium mb-1">
              Trang thai
            </label>

            <input
              {...register("completed")}
              type="checkbox"
              id="text"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoUpdate;
