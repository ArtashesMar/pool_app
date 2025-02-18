import React from "react";

export const Button = ({ children, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

