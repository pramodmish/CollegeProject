import React, { useEffect, useState } from "react";
import { Button } from "../index";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { verify, logout } from "../../store/authSlice";
import axios from "axios";
function Header() {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");
  axios
    .get("http://localhost:8000/api/v1/getCurUser")
    .then((res) => {
      if (res) {
        // setStatus(true);
        dispatch(verify(res.data));
        setUser(res.data.user.email);
        console.log(res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  const authStatus = useSelector((state) => state.auth.status);
  // const userData = useSelector((state) => state.auth.user);
  // const [status, setStatus] = useState(false);
  // useEffect(() => {
  // }, [status]);
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  const handleLogout = (e) => {
    //localStorage.removeItem("token");
    //e.preventdefault();
    axios
      .get("http://localhost:8000/api/v1/logout")
      .then((res) => {
        if (res) {
          // setStatus(false);

          navigate("/login");
          dispatch(logout(null));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-between mx-5 px-2 py-5">
        <div className="font-bold text-3xl">LOGO</div>
        <ul className="flex flex-row space-x-5 hidden md:flex md:space-x-10 py-2">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500 border-b-1  " : "text-white"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${isActive ? "text-orange-500" : "text-white"}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex space-x-5">
          {!authStatus ? (
            <div className="bg-blue-500 px-2 py-1 rounded-md">
              <Link to="/login">login</Link>
            </div>
          ) : (
            // <div className="flex space-x-5">
            //   <h1 className="w-16 overflow-hidden ">{user}</h1>
            // </div>
            <Button
              className="bg-red-500 px-2 py-1 rounded-md"
              onClick={handleLogout}
            >
              logout
            </Button>
            // <div className="bg-red-500 px-2 py-1 rounded-md">
            //   <Link to="/login">logout</Link>
            // </div>
          )}
          {!authStatus && (
            <div className="bg-green-500 px-2 py-1 rounded-md">
              <Link to="/signUp">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
