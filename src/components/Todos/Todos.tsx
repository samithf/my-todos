import React from "react";
import { Todo } from "../Todo";
import { ITodo } from "../TodoList";

interface TodosProps {
  todoList: ITodo[];
  onCloseTodo: (id: string) => void;
}

export const Todos: React.FC<TodosProps> = ({ todoList, onCloseTodo }) => {
  return (
    <ul className="mx-auto md:w-1/2">
      {todoList.map((todo, index) => (
        <li key={todo.id}>
          <Todo todo={todo} onClose={onCloseTodo} index={index} />
        </li>
      ))}
    </ul>
  );
};
