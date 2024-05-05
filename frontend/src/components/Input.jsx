import React from "react";
import { forwardRef } from "react";
function Input({ type, className, id, label, ...props }, ref) {
  return (
    <div className="flex flex-col px-3 py-3 justify-center space-y-3">
      {label && <label>{label}</label>}
      <input
        type={type}
        id={id}
        className={`${className} px-2 py-1  bg-slate-900 hover:border-b-2 hover:border-blue-500 border-b-2 border-slate-800  outline-none `}
        ref={ref}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
