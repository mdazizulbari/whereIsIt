import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { Link, useLoaderData } from "react-router";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const MyItems = () => {
  const { user } = use(AuthContext);
  // console.log(user.email);
  const initialItems = useLoaderData();
  // console.log(initialItems);
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    if (user.email) {
      const filtered = initialItems.filter(
        (item) => item.userEmail === user.email,
      );
      setItems(filtered);
    }
  }, [initialItems, user]);
  // console.log(items);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b11a11-server-side-mdazizulbari.vercel.app/items/${id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = items.filter((item) => item._id !== id);
              setItems(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[580px]">
      <title>WhereIsIt | My Items</title>
      <h1 className="text-primary font-gummy my-8 text-center text-4xl font-bold">
        My Lost or Found Items
      </h1>
      <div className="mx-auto max-w-2xl overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Icon</th>
              <th>Name</th>
              <th>Category</th>
              <th>Action</th>
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
                      <div>
                        <div className="font-bold">{item.postTitle}</div>
                        <div className="text-sm opacity-50">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.postTitle}</td>
                  <td>{item.postType}</td>
                  <td className="">
                    <div className="flex gap-1">
                      <Link
                        to={`/item-details/${item._id}`}
                        className="btn btn-primary btn-outline btn-xs"
                      >
                        <FaEye />
                      </Link>
                      <Link
                        to={`/update-item/${item._id}`}
                        className="btn btn-primary btn-outline btn-xs"
                      >
                        <FaPen />
                      </Link>
                      <button
                        onClick={() => handleDeleteItem(item._id)}
                        className="btn btn-primary btn-xs btn-outline"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
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
    </div>
  );
};

export default MyItems;
