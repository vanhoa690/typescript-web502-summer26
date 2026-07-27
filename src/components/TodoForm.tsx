function TodoForm() {
  return (
    <div>
      <h2>TodoForm</h2>
      <div>
        <label htmlFor="text" className="block font-medium mb-1">
          Title
        </label>
        <input
          type="text"
          id="text"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default TodoForm;
