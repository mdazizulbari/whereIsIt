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
        (item) => item.recoveryUserEmail === user.email
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
      <h1 className="text-4xl font-bold text-center text-primary my-8">
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
        <div className="overflow-x-auto max-w-2xl mx-auto">
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
                      <div className="flex justify-center items-center gap-3">
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
                  <td colSpan="4" className="text-center py-4">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid bg-base-100 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {items.map((item) => (
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
                    className="btn btn-primary"
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
