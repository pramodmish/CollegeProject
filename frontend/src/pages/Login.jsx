import React, { useId } from "react";
import { Input, Button } from "../components";

function Login() {
  const id = useId();
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen ">
      <form action="" className="flex flex-col  h-auto w-80 bg-slate-900 p-5">
        <h3 className="text-center font-bold">Login</h3>

        <Input
          label="Email:"
          type="email"
          id={id}
          placeholder="Enter your email"
        />
        <Input
          label="password:"
          type="password"
          name="password"
          id={id}
          placeholder="Enter your password"
        />
        <div className="flex justify-start items-center ">
          <Input type="checkbox" required className="" />
          <span className="text-base opacity-10">are yor sure for it</span>
        </div>
        <div className="flex justify-end px-3">
          <Button className={`bg-green-500 `}>login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
