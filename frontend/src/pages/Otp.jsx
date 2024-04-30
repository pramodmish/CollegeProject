import React, { useId, useState } from "react";
import axios from "axios";
import { Input, Button } from "../components/index";
function Otp() {
  const id = useId();
  const [otp, setOtp] = useState("");
  const handleOtp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/otpVerify", {
        otp: otp,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setOtp("");
  };
  return (
    <div className="flex justify-center items-center h-screen">
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
