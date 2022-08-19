import { put, takeEvery } from "redux-saga/effects";

import { setApiAction } from "@/actions/api";
import { SET_CURRENT_API } from "@/constants/actions";

export function* setCurrentApiWorker({ payload: apiName }) {
    yield put(setApiAction(apiName));
}

export function* setCurrentApiWatcher() {
    yield takeEvery(SET_CURRENT_API, setCurrentApiWorker);
}
