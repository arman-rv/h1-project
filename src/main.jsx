import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Router } from "./App/Routes/Routes.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import "./App/App.css"


ReactDOM.createRoot(document.getElementById("root"))
.render(<Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={true}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    toastClassName="toastify"
    />
  </React.StrictMode>
  </Provider>
);
