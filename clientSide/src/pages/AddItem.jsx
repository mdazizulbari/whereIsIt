import React, { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import { AuthContext } from "../contexts/AuthContext";

const AddItem = () => {
  const { user } = use(AuthContext);
  const { displayName, email } = user;
  const postType = ["Lost", "Found"];
  const [value, onChange] = useState(new Date());
  const handleChange = (date) => {
    onChange(date);
  };
  // console.log(value);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCreateItem = (e) => {
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
      headers: { "content-type": "application/json" },
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
      <title>WhereIsIt | Add Item</title>
      <div className="flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center my-5 text-primary">
          Create Post
        </h1>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleCreateItem}>
              <div>
                <fieldset className="fieldset space-y-2 justify-items-center">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1 btn-outline btn-primary"
                    >
                      Select Post Type
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content space-y-2 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      {postType.map((type, index) => (
                        <label
                          key={index}
                          className="label cursor-pointer justify-start gap-2"
                        >
                          <input
                            type="radio"
                            name="postType"
                            className="radio radio-primary"
                            value={type}
                          />
                          <span className="label-text">{type}</span>
                        </label>
                      ))}
                    </ul>
                  </div>

                  <input
                    type="text"
                    name="image"
                    className="input input "
                    placeholder="Image URL"
                    required
                  />

                  <input
                    type="text"
                    name="postTitle"
                    className="input"
                    placeholder="Post Title"
                    required
                  />

                  <input
                    type="text"
                    name="description"
                    className="input"
                    placeholder="Description"
                    required
                  />

                  <input
                    type="text"
                    name="location"
                    className="input"
                    placeholder="Where the item was lost or found"
                    required
                  />

                  <span className="text-base">Enter Lost or Found Date:</span>
                  {/* <input
                    type="date"
                    name="startDate"
                    className="input"
                    placeholder="Start and joining deadline Date"
                    required
                  /> */}
                  <DatePicker required onChange={handleChange} value={value} />

                  <input
                    type="text"
                    name="userName"
                    className="input"
                    placeholder="User Name"
                    required
                    defaultValue={displayName}
                  />

                  <input
                    type="email"
                    name="userEmail"
                    className="input"
                    placeholder="User Email"
                    defaultValue={email}
                    required
                  />

                  <button
                    type="submit"
                    className="btn btn-primary btn-outline mt-4 w-full"
                  >
                    Create
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

export default AddItem;
