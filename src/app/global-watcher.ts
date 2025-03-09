import { all } from "redux-saga/effects";
import { storageWatcher } from "../modules/redux-saga-storage/sagas/redux-saga-storage";

export function* globalWatcher() {
  yield all([storageWatcher()]);
}
