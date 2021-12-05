import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { LoaderLayer } from "./components/LoaderLayer";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

const { store, persistor } = configureStore();

window.addEventListener("beforeunload", () =>
  localStorage.removeItem("persist:eventList")
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={<LoaderLayer />} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
