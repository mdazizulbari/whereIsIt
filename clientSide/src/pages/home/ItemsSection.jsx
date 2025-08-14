import React from "react";
import { Link } from "react-router";

const ItemsSection = ({ items }) => {
  const displayItems = [...items].reverse().slice(0, 8);
  // console.log(displayItems)

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-primary font-gummy text-center text-4xl font-bold">
        Latest Lost and Found Items
      </h2>

      <div className="bg-base-100 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {displayItems.map((item) => (
          <div
            key={item._id}
            className="card bg-base-200 shadow-sm transition-all duration-300 ease-in-out hover:scale-105"
          >
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                alt={item.postTitle}
                className="h-20 w-20 rounded-xl object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.postTitle}</h2>
              <p>{item.description}</p>
              <p className="text-gray-500">{item.location}</p>
              <div className="card-actions">
                <Link
                  to={`/item-details/${item._id}`}
                  className="btn btn-primary btn-outline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        to={`/lost-and-found-items`}
        className="btn btn-primary btn-soft btn-xl"
      >
        View All Items
      </Link>
    </div>
  );
};

export default ItemsSection;
