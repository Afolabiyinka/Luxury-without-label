import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./Contexts/BlogContext";
import { CartProvider } from "./Contexts/CartContext";
import { ThemeProvider } from "./Contexts/ThemeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <ThemeProvider>
        <BrowserRouter>
          <BlogProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </BlogProvider>
        </BrowserRouter>
      </ThemeProvider>
    }
  </React.StrictMode>
);
