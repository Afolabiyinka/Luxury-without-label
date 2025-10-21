import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BlogProvider } from "./Pages/blogs/hooks/BlogContext";
import { CartProvider } from "./Pages/cart/hooks/CartContext";
import { ThemeProvider } from "./hooks/ThemeContext";
import { ProductProvider } from "./Pages/shopping/hooks/ProductsContext";
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
