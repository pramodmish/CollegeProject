import React, { useEffect, useState } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
function User() {
  const [user, setuser] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getCurUser", {
        withCredentials: true,
      })
      .then((res) => {
        if (res) {
          console.log(res.data.user.email);
          setuser(res.data.user.email);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="flex justify-end  h-screen ">
        <h1 className="px-2 py1">{user}</h1>
      </div>
    </>
  );
}

export default User;
