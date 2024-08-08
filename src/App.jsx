import { createContext, useContext, useEffect, useState } from "react";
import TodoSection from "./components/TodoSection";

const AppContext = createContext();

const getTodosFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos || [];
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme");
  return theme || "light";
};
function App() {
  const [todos, setTodos] = useState(getTodosFromLocalStorage());
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const addTodo = (data) => {
    setTodos([...todos, data]);
  };
  const editTodo = (checked, id) => {
    const newTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, checked };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.checked);
    setTodos(newTodos);
  };
  const swapPosition = (i, j) => {
    let k, l;
    todos.forEach((todo, index) => {
      if (todo.id === i) {
        k = index;
      }
      if (todo.id === j) {
        l = index;
      }
    });
    const newTodos = todos;
    const temp = newTodos[k];
    newTodos[k] = newTodos[l];
    newTodos[l] = temp;
    setTodos([...newTodos]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        editTodo,
        deleteTodo,
        theme,
        setTheme,
        clearCompleted,
        swapPosition,
      }}
    >
      <main>
        <header></header>
        <footer></footer>
        <TodoSection />
      </main>
    </AppContext.Provider>
  );
}
export const useAppContext = () => useContext(AppContext);
export default App;
