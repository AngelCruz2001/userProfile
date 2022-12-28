import React from "react";
import ReactDOM from "react-dom/client";
import "styles/globals.scss";
import { BrowserRouter } from "./routes/BrowserRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
