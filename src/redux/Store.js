import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["langReducer"], // TODO: determine where to get my appSlice's reducer name from
};
// const enhancedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function reduxFunction() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger],
    // middleware: getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
  });
  const persistor = persistStore(store);
  return { store, persistor };
}
