import React from "react";
import ReactDOM from "react-dom";
import Addition from "./containers/App/Addition";
import { store } from "./Store/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Addition />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
