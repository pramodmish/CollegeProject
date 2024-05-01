import React, { useId, useState } from "react";
import axios from "axios";
import { Input, Button } from "../components/index";

function Otp() {
  const id = useId();
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const handleOtp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/otpVerify", {
        otp: otp,
      })
      .then((res) => {
        if (res.status === 400) {
          console.log(res.status);
          setStatus("Warning");
          setError("Bad request");
        } else if (res.status === 201) {
          setStatus("success");
          setError("user verify successful");
        } else if (res.status === 204) {
          setStatus("Warning");
          setError("please fill the otp");
        }
        setTimeout(() => {
          setStatus("");
          setError("");
        }, 5000);
      })
      .catch((err) => {
        setStatus("error");
        setError("invelid otp");
        console.log(err);
      });
    setOtp("");
  };
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <h1
        className={`${
          status === "success" && "text-green-500 border border-green-500"
        } ${
          status === "Warning" && "text-yellow-500 border border-yellow-500"
        } ${status === "error" && "text-red-500 border border-red-500"}
        
        rounded-lg   px-5 py-5   w-80 text-center`}
      >
        {error}
      </h1>
      <form
        action=""
        onSubmit={handleOtp}
        className="flex flex-col  h-40 w-80 bg-slate-900"
      >
        <Input
          label="OTP:"
          type="text"
          id={id}
          placeholder="Enter Otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <div className="flex justify-end px-3 py-3">
          <Button className={`bg-green-500 `}>verify</Button>
        </div>
      </form>
    </div>
  );
}

export default Otp;
