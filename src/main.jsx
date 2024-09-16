import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ShopProductprovider } from "./context/context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProductprovider>
        <App />
      </ShopProductprovider>
    </BrowserRouter>
  </React.StrictMode>
);
