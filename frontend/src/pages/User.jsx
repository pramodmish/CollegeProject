import React, { useEffect, useState } from "react";
import axios from "axios";
import Editor from "../components/Editor";
import { Input, Button } from "../components/index";
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
      <div className="flex justify-center items-center h-screen ">
        <div className="h-full w-full flex justify-center md:justify-center ">
          <form action="" className="flex flex-col space-y-2">
            <div className="flex justify-end  px-3 py-3  space-y-3">
              <Button className={`bg-green-500`}>ADD</Button>
            </div>
            <div>
              <Input
                className="outline-none w-96 md:w-[600px] lg:w-[800px]"
                placeholder="Enter title for your blog"
              />
            </div>
            <div>
              <Editor />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default User;
