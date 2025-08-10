import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const LostAndFoundItems = () => {
  const items = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const displayItems = [...items]
    .reverse()
    .filter((item) =>
      item.postTitle.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-100 p-10">
      <title>WhereIsIt | Add Item</title>
      <div className="flex flex-col justify-center items-center">
        <div className="flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold text-primary text-center my-5">
            All Lost & Fond Items
          </h1>

          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearchChange}
              required
              placeholder="Search By Title"
            />
          </label>

          <div className="grid bg-base-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {displayItems.map((item) => (
              <div className="card bg-base-200 shadow-sm">
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt={item.postTitle}
                    className="rounded-xl w-20 h-20"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{item.postTitle}</h2>
                  <p>{item.description}</p>
                  <p className="text-gray-500">{item.location}</p>
                  <div className="card-actions">
                    <Link
                      to={`/item-details/${item._id}`}
                      className="btn btn-soft btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundItems;
