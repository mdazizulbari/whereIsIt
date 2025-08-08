import React from "react";

const Footer = ({ links }) => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-300 rounded-t-4xl text-base-content rounded p-10 mt-20">
      <h3 className="italic text-primary text-3xl font-bold">WhereIsIt</h3>
      <ul className="grid grid-flow-col gap-4">{links}</ul>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Hobby
          Hub Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
