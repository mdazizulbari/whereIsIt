import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 h-[625px]">
      <span className="loading loading-bars text-primary loading-xl"></span>
      <h1 className="text-4xl font-bold">Loading</h1>
    </div>
  );
};

export default Loader;
