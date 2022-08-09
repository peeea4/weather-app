import { applyMiddleware } from "@reduxjs/toolkit";
import { createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "@/reducers";
import { rootWatcher } from "@/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
