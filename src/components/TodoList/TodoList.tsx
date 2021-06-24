import React, { FormEvent, useContext } from "react";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Todos } from "../Todos";
import shordid from "shortid";
import { ThemeContext } from "../../ThemeContext";

export interface ITodo {
  id: string;
  task: string;
}

export const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function onSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!currentTodo) return;

    setTodoList([...todoList, currentTodo]);
    setCurrentTodo(null);
  }

  function onCloseTodo(id: string) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <div className="h-full w-1/2 mx-auto">
      <div className="fixed top-5 right-5">
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleTheme}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={toggleTheme}
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
      <h1 className="text-center relative top-10 dark:text-gray-200">
        My Todolist
      </h1>
      <form className="my-20 text-center" onSubmit={onSubmitForm}>
        <Input
          value={currentTodo ? currentTodo.task : ""}
          placeholder="Type here"
          onChange={(e) =>
            setCurrentTodo({ id: shordid.generate(), task: e.target.value })
          }
        />
        <Button type="submit">Submit</Button>
      </form>
      <Todos todoList={todoList} onCloseTodo={onCloseTodo} />
    </div>
  );
};
