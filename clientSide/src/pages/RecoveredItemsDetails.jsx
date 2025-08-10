import React, { use, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const RecoveredItemDetails = () => {
  const { user } = use(AuthContext);
  const { displayName, email, photoURL } = user;
  const item = useLoaderData();
  const {
    postTitle,
    image,
    description,
    location,
    userName,
    userEmail,
    postType,
    status,
  } = item;
  const [value, onChange] = useState(new Date());
  const handleChange = (date) => {
    onChange(date);
  };
  // console.log(status);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRecoverItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newRecoveredItem = {
      ...Object.fromEntries(formData.entries()),
      postTitle,
      image,
      description,
      location,
      postType,
      userName,
      userEmail,
      originalItemId: item._id,
    };
    fetch("https://b11a11-server-side-mdazizulbari.vercel.app/recoveredItems", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newRecoveredItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          console.log("added successfully", data);
          toast.success("Added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    addRecoveredStatus();
  };

  const addRecoveredStatus = () => {
    fetch(
      `https://b11a11-server-side-mdazizulbari.vercel.app/items/${item._id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status: "Recovered" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("Item status updated to Recovered");
          document.getElementById("my_modal_3").close();
          document.getElementById("modal-button").classList.add("btn-disabled");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-base-100 p-10">
      <title>WhereIsIt | Item Details</title>
      <div className="flex-col justify-center items-center ">
        <div className="card bg-base-200 shadow-sm">
          <figure className="px-10 pt-10">
            <img src={item.image} alt={item.postTitle} className="rounded-xl" />
          </figure>
          <h1 className="text-4xl font-bold text-primary text-center my-5 mt-15">
            {item.postTitle}
          </h1>
          <div className="card-body items-center text-lg text-center">
            <p>{item.description}</p>
            <p className="text-gray-500">Location: {item.location}</p>
            <p className="text-gray-500">Date: {item.date}</p>
            <p className="text-gray-500">Name: {item.userName}</p>
            <p className="text-gray-500">Email: {item.userEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveredItemDetails;
