import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Layout from "./Layouts/Layout";
import { CartProvider } from "./Layouts/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "shop", element: <Shop /> },
      { path: "#offers", element: <HomePage /> },
      { path: "#contact", element: <HomePage /> },
      { path: "cart", element: <Cart /> }
    ]
  }
]);
function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
