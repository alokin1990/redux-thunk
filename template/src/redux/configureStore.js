import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// store
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage
};

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  let store = createStore(
    persistReducer(persistConfig, rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);

  return { persistor, store };
}
