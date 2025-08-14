import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const LostAndFoundItems = () => {
  const items = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  // const displayItems = [...items]
  //   .reverse()
  //   .filter((item) =>
  //     item.postTitle.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  //   );

  const sortedAndFilteredItems = [...items]
    .filter((item) =>
      item.postTitle.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-base-100 min-h-[580px] p-6 sm:p-10">
      <title>WhereIsIt | Add Item</title>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-primary font-gummy my-5 text-center text-3xl font-bold sm:text-4xl">
          All Lost & Found Items
        </h1>

        <div className="mb-8 flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
          <label className="input flex w-full items-center sm:w-3/4">
            <svg
              className="mr-2 h-[1em] opacity-50"
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
              placeholder="Search By Title"
              aria-label="Search lost and found items by title"
            />
          </label>
          <select
            className="select select-bordered w-full sm:w-1/4"
            value={sortOrder}
            onChange={handleSortChange}
            aria-label="Sort items by date"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sortedAndFilteredItems.length > 0 ? (
            sortedAndFilteredItems.map((item) => (
              <div
                key={item._id}
                className="card bg-base-200 shadow-sm transition-all duration-300 ease-in-out hover:scale-105"
                role="article"
                aria-labelledby={`item-${item._id}`}
              >
                <figure className="px-10 pt-10">
                  <img
                    src={item.image}
                    alt={item.postTitle}
                    className="h-20 w-20 rounded-xl object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 id={`item-${item._id}`} className="card-title">
                    {item.postTitle}
                  </h2>
                  <p className="line-clamp-2">{item.description}</p>
                  <p className="text-gray-500">{item.location}</p>
                  <div className="card-actions">
                    <Link
                      to={`/item-details/${item._id}`}
                      className="btn btn-primary btn-outline"
                      aria-label={`View details for ${item.postTitle}`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No items found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LostAndFoundItems;
