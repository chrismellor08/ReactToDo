import { createStore, applyMiddleware, compose } from "redux";
import { StoreState } from "./storeState";
import reducer from "../reducers";
import thunk from "redux-thunk";

export default function configureStore(initialStore: StoreState) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
