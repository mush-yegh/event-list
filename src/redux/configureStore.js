import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from "./reducers";

const persistConfig = {
  key: "eventList",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  const middleWare = [];
  const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === "development",
  });

  middleWare.push(thunk);
  middleWare.push(loggerMiddleware);

  const initialState = {};

  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middleWare)
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
