import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Root, UsersScreen, User, AddUser } from "pages";
import { BusinessScreen } from "../pages/business/index";
import { Business } from "pages/business/Business";
import { AddBusiness } from "../pages/business/AddBusiness";
import { data } from "helpers/data";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "users",
        element: <UsersScreen />,
        children: [
          {
            path: ":idUser",
            element: <User />,
          },
          {
            path: "add",
            element: <AddUser />,
          },
        ],
      },

      {
        path: "business",
        element: <BusinessScreen />,
        children: [
          {
            path: ":idBusiness",
            element: <Business />,
          },
          {
            path: "add",
            element: <AddBusiness />,
          },
        ],
      },
    ],
  },
]);

export const BrowserRouter = () => {


  return <RouterProvider router={router} />;
};
