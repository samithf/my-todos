import React from "react";

export const Input = (
  props: Partial<React.InputHTMLAttributes<HTMLInputElement>>
) => {
  return (
    <input
      className="p-2 rounded outline-none shadow-md border border-gray-200"
      {...props}
    ></input>
  );
};
