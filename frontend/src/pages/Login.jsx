import React, { useId, useState } from "react";
import { Input, Button } from "../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const id = useId();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const warnings = (data) => toast.warning(data);
  const sucessful = (data) => toast.success(data);
  const errors = (data) => toast.error(data);

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          warnings("all fields must be filled");
        } else if (res.status === 201) {
          setTimeout(() => navigate("/User"), 5000);

          sucessful("login successful");
        } else if (res.status === 500) {
          errors("somthing went wrong");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen ">
      <form
        action=""
        onSubmit={handleLogin}
        className="flex flex-col  h-auto w-80 bg-slate-900 p-5"
      >
        <h3 className="text-center font-bold">Login</h3>

        <Input
          label="Email:"
          type="email"
          id={id}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter your email"
        />
        <Input
          label="password:"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
      <ToastContainer />
    </div>
  );
}

export default Login;
