import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConnectAWallet } from "./screens/ConnectAWallet";
import { ConnectPage } from "./screens/ConnectPage";
import { ConnectPageScreen } from "./screens/ConnectPageScreen";
import { ConnectPageWrapper } from "./screens/ConnectPageWrapper";
import { DivWrapper } from "./screens/DivWrapper";
import { Element } from "./screens/Element";
import { ConnectAWalletScreen } from "./screens/ConnectAWalletScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Element />,
  },
  {
    path: "/connect-a-wallet-991",
    element: <ConnectAWallet />,
  },
  {
    path: "/connect-page-478",
    element: <ConnectPage />,
  },
  {
    path: "/x478",
    element: <Element />,
  },
  {
    path: "/connect-a-wallet-1440",
    element: <DivWrapper />,
  },
  {
    path: "/connect-a-wallet-478",
    element: <ConnectAWalletScreen />,
  },
  {
    path: "/connect-page-991",
    element: <ConnectPageScreen />,
  },
  {
    path: "/connect-page-1440",
    element: <ConnectPageWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
