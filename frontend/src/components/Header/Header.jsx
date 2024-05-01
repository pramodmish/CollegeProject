import React, { useEffect } from "react";
import { Button } from "../index";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
function Header() {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getCookie")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          <div className="bg-blue-500 px-2 py-1 rounded-md">
            <Link to="/login">login</Link>
          </div>
          <div className="bg-green-500 px-2 py-1 rounded-md">
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
