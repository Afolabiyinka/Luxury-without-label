import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BlogProvider } from "./hooks/BlogContext";
import { CartProvider } from "./hooks/CartContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import { ProductProvider } from "./hooks/ProductsContext";
import { WishListProvider } from "./hooks/WishListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <ThemeProvider>
        <BrowserRouter>
          <ProductProvider>
            <BlogProvider>
              <CartProvider>
                <WishListProvider>
                  <App />
                </WishListProvider>
              </CartProvider>
            </BlogProvider>
          </ProductProvider>
        </BrowserRouter>
      </ThemeProvider>
    }
  </React.StrictMode>
);
