import { useEffect, useState } from "react";
import Button from "./Button";

function MyUseEffect() {
  const [title, setTitle] = useState("React + Typescript");

  useEffect(() => {
    document.title = title;
    // call api
  }, [title]);

  console.log(title); // "React Update Title"

  const handleChangeTitle = () => {
    setTitle("React Update Title");
  };
  return (
    <div>
      <h2>MyUseEffect</h2>
      <Button
        label="Thay dieu tieu de trang"
        onClick={handleChangeTitle}
      ></Button>
    </div>
  );
}

export default MyUseEffect;
