import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import RootReducer from "./RootReducer";
import rootSaga from "./RootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(RootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
