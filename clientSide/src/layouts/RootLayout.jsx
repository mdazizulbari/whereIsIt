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
        <NavLink to={`/terms`}>Terms & Conditions</NavLink>
      </li>
      <li>
        <NavLink to={`/privacy-policy`}>Privacy Policy</NavLink>
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
    <div className="">
      <Navbar links={links} />
      <ToastContainer />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <Footer links={links} />
    </div>
  );
};

export default RootLayout;
