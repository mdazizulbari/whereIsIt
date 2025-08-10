import React from "react";
import { Link } from "react-router";

const ItemsSection = ({ items }) => {
  const displayItems = [...items].reverse().slice(0, 6);
  // console.log(displayItems)

  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h2 className="text-5xl text-primary font-bold">
        Latest Lost and Found Items
      </h2>

      <div className="grid bg-base-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {displayItems.map((item) => (
          <div key={item._id} className="card bg-base-200 shadow-sm">
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
                  className="btn btn-primary btn-soft"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to={`/lost-and-found-items`} className="btn btn-primary btn-xl">
        View All Items
      </Link>
    </div>
  );
};

export default ItemsSection;
