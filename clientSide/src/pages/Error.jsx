import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="h-[625px]">
        <title>WhereIsIt | Error</title>
      <div className="py-20 flex flex-col gap-20 justify-center items-center">
        <h1
          className="text-4xl md:text-9xl text-center
            "
        >
          4🔎4
          <br />
          Page Not Found
        </h1>
        <Link to={"/"} className="btn-primary btn text-2xl rounded-full">
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
