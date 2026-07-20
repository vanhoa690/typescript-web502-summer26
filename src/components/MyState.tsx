import { useState } from "react";
import Button from "./Button";

function MyState() {
  const [money, setMoney] = useState(100000);

  const handleJob = () => {
    console.log("money hom nay", money);
    setMoney(money + 50000);
    // money = money + 50000
  };

  return (
    <div>
      <h2>MyState</h2>
      <p>So tien dang co: {money} VND</p>
      <Button onClick={handleJob} label="Di lam them moi ngay"></Button>
    </div>
  );
}

export default MyState;
