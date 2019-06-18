import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel1 from "redux-persist/lib/stateReconciler/autoMergeLevel1";
import createSagaMiddleware from "redux-saga";
import AsyncStorage from "@react-native-community/async-storage";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  timeout: null
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
