import { all } from "redux-saga/effects"
import { storageWatcher } from "../modules/storage/sagas/storage";

export function* globalWatcher() {
    yield all([storageWatcher()])
}