import axios from "axios";
import { useForm } from "react-hook-form";

interface FormData {
  title: string;
  description: string;
}

function TodoForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const submitForm = (data: FormData) => {
    console.log(data);
    axios.post("http://localhost:3000/todos", data).then(() => {
      alert("Them thanh cong");
    });
  };

  return (
    <div>
      <h2 className="text-3xl mb-2">TodoForm</h2>
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
            Mo ta
          </label>
          <input
            {...register("description")}
            type="text"
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
  );
}

export default TodoForm;
