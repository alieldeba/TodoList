import React from "react";

const HomePage = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Checking that todo not empty and unique
    if (!todos.includes(newTodo) && !newTodo.replaceAll(" ", "") == "") {
      setTodos([...todos, newTodo.trim().replaceAll(/\s+/g, " ")]);
      setNewTodo("");
    }
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className="container m-auto">
      <form
        className="bg-white rounded-lg p-4 shadow-md flex items-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full border border-gray-400 px-5 h-10 rounded-lg"
          type="text"
          value={newTodo}
          onChange={handleChange}
          placeholder="Add a new to-do"
        />
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded-lg"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="mt-8">
        {todos.map((todo, index) => (
          <li key={index} className="mt-2 bg-white rounded-lg p-4 shadow-md">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(HomePage);
