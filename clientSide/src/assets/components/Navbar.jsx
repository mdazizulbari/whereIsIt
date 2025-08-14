import { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { motion } from "motion/react";

const Navbar = ({ links }) => {
  const { signOutAcc, user } = use(AuthContext);

  return (
    <div className="bg-primary sticky top-0 z-50 max-w-full rounded-b-4xl shadow-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="navbar text-base-100 mx-auto max-w-7xl justify-center px-2"
      >
        <div className="hidden flex-1 md:flex">
          <a
            href="/"
            className="btn font-gummy text-base-100 btn-ghost hover:bg-primary rounded-full text-3xl font-bold italic"
          >
            WhereIsIt
          </a>
        </div>
        <div className="flex flex-col items-center md:flex-row">
          <ul className="menu menu-horizontal px-1 text-lg font-bold">
            {links}
          </ul>

          {user && (
            <div className="flex space-x-4">
              <button className="btn btn-outline" onClick={signOutAcc}>
                Sign Out
              </button>
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <button className="btn btn-ghost rounded-2xl p-0">
                      <img
                        src={user.photoURL}
                        className="h-10 w-10 rounded-full"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content text-primary menu bg-base-200 rounded-box z-1 w-28 p-2 shadow-sm"
                >
                  <li>
                    <NavLink to={`/add-item`}>Add Item</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/my-Items`}>My Items</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/recovered-items`}>Recovered Items</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="hidden md:flex">
            <label className="toggle text-base-content bg-base-100 mx-3">
              <input
                type="checkbox"
                value="dark"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
