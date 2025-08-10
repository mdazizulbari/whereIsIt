import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Loader from "../assets/components/Loader";
import LostAndFoundItems from "../pages/LostAndFoundItems";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../pages/AddItem";
import MyItems from "../pages/MyItems";
import RecoveredItems from "../pages/RecoveredItems";
import ItemDetails from "../pages/ItemDetails";
import UpdateItem from "../pages/UpdateItem";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          fetch("https://b11a11-server-side-mdazizulbari.vercel.app/items"),
        hydrateFallbackElement: <Loader />,
      },
      { path: "sign-in", element: <SignIn /> },
      { path: "sign-up", element: <SignUp /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsAndConditions /> },
      {
        path: "lost-and-found-items",
        loader: () =>
          fetch("https://b11a11-server-side-mdazizulbari.vercel.app/items"),
        hydrateFallbackElement: <Loader />,
        element: <LostAndFoundItems />,
      },
      {
        path: "add-item",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "my-items",
        loader: () =>
          fetch("https://b11a11-server-side-mdazizulbari.vercel.app/items"),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
      },
      {
        path: "item-details/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-mdazizulbari.vercel.app/items/${params.id}`
          ),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <ItemDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "update-item/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-mdazizulbari.vercel.app/items/${params.id}`
          ),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <UpdateItem />
          </PrivateRoute>
        ),
      },
      {
        path: "recovered-items",
        loader: () =>
          fetch(
            "https://b11a11-server-side-mdazizulbari.vercel.app/recoveredItems"
          ),
        hydrateFallbackElement: <Loader />,
        element: (
          <PrivateRoute>
            <RecoveredItems />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
