import React from "react";

function Button({ type, className, children, ...props }) {
  return (
    <button
      type={type}
      className={`${className} px-2 py-1 rounded-md`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
