import React, { use } from "react";
import Navbar from "../assets/components/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../assets/components/Footer";
import { NavLink, Outlet } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const RootLayout = () => {
  const { user } = use(AuthContext);

  const links = [
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/lost-and-found-items`}>Lost & Found Items</NavLink>
      </li>
      <li>
        <NavLink to={`/404`}>404</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to={`/sign-in`}>Sign In</NavLink>
          </li>
          <li>
            <NavLink to={`/sign-up`}>Sign Up</NavLink>
          </li>
        </>
      )}
    </>,
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar links={links} />
      <ToastContainer />
      <Outlet />
      <Footer links={links} />
    </div>
  );
};

export default RootLayout;
