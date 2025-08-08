import React, { use, useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const item = useLoaderData();
  // console.log(item);
  const { user } = use(AuthContext);
  const { displayName, email, accessToken } = user;
  const [value, onChange] = useState(new Date());
  const handleChange = (date) => {
    onChange(date);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const postType = formData.get("postType");
    if (!postType) {
      toast.error("You Must select a post type");
      return;
    }
    const newItem = Object.fromEntries(formData.entries());
    fetch("https://b11a11-server-side-mdazizulbari.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          // console.log("added successfully", data);
          toast.success("Added Successfully");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="bg-base-100 p-10 pb-0">
      <title>WhereIsIt | Update Item</title>
      <div className="flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center my-5 text-primary">
          Create Post
        </h1>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleUpdateItem}>
              <div>
                <fieldset className="fieldset space-y-2 justify-items-center">
                  <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1">
                      Select Post Type
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      {["Lost", "Found"].map((type, index) => (
                        <label
                          key={index}
                          className="label cursor-pointer justify-start gap-2"
                        >
                          <input
                            type="radio"
                            name="postType"
                            className="radio"
                            value={type}
                            defaultChecked={item.postType === type} // Pre-select based on item.postType
                          />
                          <span className="label-text">{type}</span>
                        </label>
                      ))}
                    </ul>
                  </div>

                  <input
                    type="text"
                    name="image"
                    className="input"
                    placeholder="Image URL"
                    defaultValue={item.image}
                    required
                  />

                  <input
                    type="text"
                    name="postTitle"
                    className="input"
                    placeholder="Post Title"
                    defaultValue={item.postTitle}
                    required
                  />

                  <input
                    type="text"
                    name="description"
                    className="input"
                    placeholder="Description"
                    defaultValue={item.description}
                    required
                  />

                  <input
                    type="text"
                    name="location"
                    className="input"
                    placeholder="Where the item was lost or found"
                    defaultValue={item.location}
                    required
                  />

                  <span className="text-base">Enter Lost or Found Date:</span>
                  <DatePicker required onChange={handleChange} value={value} />

                  <input
                    type="text"
                    name="userName"
                    className="input"
                    placeholder="User Name"
                    defaultValue={displayName}
                    readOnly
                    required
                  />

                  <input
                    type="email"
                    name="userEmail"
                    className="input"
                    placeholder="User Email"
                    defaultValue={email}
                    required
                    readOnly
                  />

                  <button type="submit" className="btn btn-neutral mt-4 w-full">
                    Update Item
                  </button>
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
