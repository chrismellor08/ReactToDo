import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { Store } from "redux";
import { initialState } from "./store/initialState";
import { StoreState } from "./store/storeState";
import configureStore from "./store/configureStore";

const store: Store<StoreState> = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
