import React from "react";
import { forwardRef } from "react";
function Input({ type, className, id, label, ...props }, ref) {
  return (
    <div className="flex flex-col px-3 py-3 justify-center space-y-3">
      {label && <label>{label}</label>}
      <input
        type={type}
        id={id}
        className={`${className} px-2 py-2  bg-slate-900 border-2  border-gray-400   `}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
