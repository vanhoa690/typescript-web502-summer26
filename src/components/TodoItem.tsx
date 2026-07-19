interface Props {
  id: number;
  title: string;
}

export default function ToDoItem({ id, title }: Props) {
  return (
    <div>
      Ten cong viec: {title} voi ID: {id}
    </div>
  );
}
