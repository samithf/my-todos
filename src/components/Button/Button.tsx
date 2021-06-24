import React from "react";

export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className="p-2 bg-blue-600 text-white ml-2 rounded" {...props}>
      {props.children}
    </button>
  );
};
