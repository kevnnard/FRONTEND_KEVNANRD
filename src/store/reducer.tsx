import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import worksReducer from "./slices/works";
import snackbarReducer from "./slices/snackbar";
import quotesReducer from "./slices/quotes";

const reducer = combineReducers({
  snackbar: snackbarReducer,
  works: persistReducer(
    {
      key: "works",
      storage,
      keyPrefix: "kevnanrd-",
    },
    worksReducer
  ),
  quotes: quotesReducer,
});

export default reducer;
