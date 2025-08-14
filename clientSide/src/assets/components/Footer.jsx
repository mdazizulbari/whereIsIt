import React from "react";
import { NavLink } from "react-router";

const Footer = ({ links }) => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary-content text-base-content dark:bg-base-300 mt-20 rounded rounded-t-2xl p-10 md:rounded-t-4xl">
      <h3 className="text-primary font-gummy text-5xl font-bold italic">
        WhereIsIt
      </h3>
      <ul className="grid grid-flow-col gap-4">
        {links}
        {/* hidden for mobile */}
        <ul className="hidden grid-flow-col gap-4 md:grid">
          <li>
            <NavLink to={`/terms`}>Terms & Conditions</NavLink>
          </li>
          <li>
            <NavLink to={`/privacy-policy`}>Privacy Policy</NavLink>
          </li>
        </ul>
      </ul>
      {/* in new line for mobile */}
      <ul className="grid grid-flow-col gap-4 md:hidden">
        <li>
          <NavLink to={`/terms`}>Terms & Conditions</NavLink>
        </li>
        <li>
          <NavLink to={`/privacy-policy`}>Privacy Policy</NavLink>
        </li>
      </ul>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-primary">WhereIsIt</span> Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
