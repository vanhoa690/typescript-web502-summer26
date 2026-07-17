import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
  const handleClick = (): void => {
    alert("click button");
  };
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB502 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB502</h1>
        {/* click chu cuoi cung ctrl + space => import component */}
        <div className="flex gap-2">
          <Button
            bgColor="bg-red-600"
            onClick={() => alert("Click button")}
          ></Button>
          <Button label="Submit" onClick={handleClick}></Button>
        </div>
      </div>

      <Toaster />
    </>
  );
}

export default App;
