// import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App.tsx";
import "./app/layout/styles.css";
import { StoreContext, store } from "./app/stores/store.ts";

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
