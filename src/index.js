import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./Contexts/BlogContext";
import { CartProvider } from "./Contexts/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <BrowserRouter>
        <BlogProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </BlogProvider>
      </BrowserRouter>
    }
  </React.StrictMode>
);
