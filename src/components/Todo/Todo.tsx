import React from "react";
import { useEffect } from "react";
import { ITodo } from "../TodoList";

interface TodoProps {
  todo: ITodo;
  onClose: (id: string) => void;
  index: number;
}

export const Todo: React.FC<TodoProps> = ({ todo, onClose, index }) => {
  const [
    animatonStyle,
    setAnimationStyle,
  ] = React.useState<React.CSSProperties>({
    transition: "all 0.1s ease-out",
    opacity: 0,
    transform: "scale(0)",
  });

  useEffect(() => {
    setAnimationStyle({
      ...animatonStyle,
      opacity: 1,
      transform: "scale(1)",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onCloseTodo(id: string) {
    setAnimationStyle({
      ...animatonStyle,
      opacity: 0,
      transform: "scale(0)",
    });
    // setScale(1.3);
    setTimeout(() => {
      onClose(id);
    }, 100);
  }

  return (
    <div
      style={{ ...animatonStyle }}
      className="flex justify-between items-center p-4 rounded-full  text-gray-600 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600 "
    >
      <span className="text-lg">
        {index + 1}. {todo.task}
      </span>
      <span className="cursor-pointer" onClick={() => onCloseTodo(todo.id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  );
};
