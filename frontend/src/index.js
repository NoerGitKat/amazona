import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Import Provider component to connect to React app
import { Provider } from "react-redux";
// Import Redux store to put state at the top of state tree
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
