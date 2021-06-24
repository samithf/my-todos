import React from "react";
import { TodoList } from "./components/TodoList";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <div className="h-full dark:bg-gray-800">
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>
    </div>
  );
}

export default App;
