import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <KindeProvider clientId="d05dc5e8aefb42d1ba90eaa7a05aed3c" domain="https://codewilson64.kinde.com" redirectUri="http://localhost:3000/techhaven" logoutUri="http://localhost:3000/techhaven">
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </KindeProvider>
  </Provider>
);
