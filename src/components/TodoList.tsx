import ToDoItem from "./TodoItem";

interface IToDoItem {
  id: number;
  title: string;
}

export default function ToDoList() {
  // useState:  []
  // useEffect : update state
  const data: IToDoItem[] = [
    {
      id: 1,
      title: "Di hoc",
    },
    {
      id: 2,
      title: "Di choi",
    },
    {
      id: 3,
      title: "Di lam",
    },
  ];
  return (
    <div>
      <h2>ToDoList</h2>
      {data.map((item: IToDoItem) => {
        return (
          // <div>
          //   Item co ID: {item.id} va ten cong viec: {item.title}
          // </div>
          <ToDoItem id={item.id} title={item.title} />
        );
      })}
    </div>
  );
}
