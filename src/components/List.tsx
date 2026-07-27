import axios from "axios";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  year: number;
}

function ListPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  function getAllMovies() {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data));
  }
  useEffect(() => {
    getAllMovies();
  }, []);

  function handleDelete(id: number) {
    axios.delete("http://localhost:3000/movies/" + id).then(() => {
      alert("Xoa thanh cong");
      getAllMovies();
    });
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Danh sách</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300 text-left">ID</th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Description
              </th>
              <th className="px-4 py-2 border border-gray-300 text-left">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie: Movie) => {
              return (
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-300">
                    {movie.id}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {movie.title}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {movie.year}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    <button onClick={() => handleDelete(movie.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListPage;
