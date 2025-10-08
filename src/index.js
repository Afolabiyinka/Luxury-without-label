import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BlogProvider } from "./hooks/BlogContext";
import { CartProvider } from "./hooks/CartContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import { ProductProvider } from "./hooks/ProductsContext";
import { WishListProvider } from "./hooks/WishListContext";
import RoutesConfig from "./Config/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <ThemeProvider>
        <ProductProvider>
          <BlogProvider>
            <CartProvider>
              <WishListProvider>
                <RoutesConfig />
              </WishListProvider>
            </CartProvider>
          </BlogProvider>
        </ProductProvider>
      </ThemeProvider>
    }
  </React.StrictMode>
);
