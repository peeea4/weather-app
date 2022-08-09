import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "@/reducers";
import { rootWatcher } from "@/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootWatcher);
