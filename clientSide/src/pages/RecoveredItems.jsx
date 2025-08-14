import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { FaList } from "react-icons/fa";
import { MdGridView } from "react-icons/md";

const RecoveredItems = () => {
  const { user } = use(AuthContext);
  // console.log(user.email);
  const initialItems = useLoaderData();
  const [items, setItems] = useState(initialItems);
  const [isList, setIsList] = useState(false);

  const handleLayoutChange = () => {
    setIsList(!isList);
  };

  useEffect(() => {
    if (user.email) {
      const filtered = initialItems.filter(
        (item) => item.recoveryUserEmail === user.email,
      );
      setItems(filtered);
    }
  }, [initialItems, user]);
  // console.log(items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <title>WhereIsIt | Recovered Items</title>
      <h1 className="text-primary font-gummy my-8 text-center text-4xl font-bold">
        My Recovered Items
      </h1>

      <button onClick={handleLayoutChange} className="btn">
        {isList ? (
          <p className="flex items-center gap-3">
            List View <FaList />
          </p>
        ) : (
          <p className="flex items-center gap-3">
            Grid View <MdGridView />
          </p>
        )}
      </button>

      {isList ? (
        <div className="mx-auto min-h-[580px] max-w-2xl overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-center">
                <th>Icon</th>
                <th>Name</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {items.length > 0 ? (
                items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center justify-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.image} alt={item.postTitle} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{item.postTitle}</div>
                    </td>
                    <td>{item.date}</td>
                    <td className="">{item.location}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-4 text-center">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-base-100 mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              className="card bg-base-200 shadow-sm transition-all duration-300 ease-in-out hover:scale-105"
              key={item._id}
            >
              <figure className="px-10 pt-10">
                <img
                  src={item.image}
                  alt={item.postTitle}
                  className="h-20 w-20 rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{item.postTitle}</h2>
                <p>{item.description}</p>
                <p className="text-gray-500">{item.location}</p>
                <div className="card-actions">
                  <Link
                    to={`/recovered-item-details/${item._id}`}
                    className="btn btn-outline btn-primary"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecoveredItems;
