import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import worksReducer from "./slices/works";
import snackbarReducer from "./slices/snackbar";
import quotesReducer from "./slices/quotes";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const reducer = combineReducers({
  snackbar: snackbarReducer,
  works: persistReducer(
    {
      key: "works",
      storage: storage,
      keyPrefix: "kevnanrd-",
    },
    worksReducer
  ),
  quotes: quotesReducer,
});

export default reducer;
