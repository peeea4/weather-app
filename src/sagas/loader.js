import { put, takeEvery } from "redux-saga/effects";

import { setLoaderStatusAction } from "@/actions/loader";
import { SET_LOADER_STATUS } from "@/constants/actions";

export function* setLoaderStatusWorker({ payload: isLoading }) {
    yield put(setLoaderStatusAction(isLoading));
}

export function* setLoaderStatusWatcher() {
    yield takeEvery(SET_LOADER_STATUS, setLoaderStatusWorker);
}
