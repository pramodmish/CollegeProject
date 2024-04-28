import React, { useId, useState } from "react";
import { Input, Button } from "./index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const id = useId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v1/signUp", {
        userName: name,
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 400) {
          setStatus("Error");
          setError("Bad request");
        } else if (res.status === 201) {
          setStatus("Success");
          setTimeout(() => navigate("/otpVerify"), 5000);
          setError("Reister successful");
        } else if (res.status === 204) {
          setStatus("Warning");
          setError("All Fields must be filled");
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen ">
      <h1
        className={`${
          status === "Success" && "text-green-500 border border-green-500"
        } ${
          status === "Warning" && "text-yellow-500 border border-yellow-500"
        } ${
          status === "Error" && "text-red-500 border border-red-500"
        } rounded-lg   px-5 py-5   w-80 text-center`}
      >
        {error}
      </h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col  h-96 w-80 bg-slate-900 "
      >
        <h3 className="text-center font-bold">Sign Up</h3>
        <Input
          label="User Name:"
          id={id}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email::"
          id={id}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="password:"
          id={id}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-start items-center ">
          <Input type="checkbox" className="" />
          <span className="text-base opacity-10">are yor sure for it</span>
        </div>
        <div className="flex justify-end px-3">
          <Button className={`bg-green-500 `}>Register</Button>
        </div>
      </form>
    </div>
  );
}

export default Register;
