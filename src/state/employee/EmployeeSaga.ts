import { call, fork } from 'redux-saga/effects';

// import { authApi } from '@api/.';

function* helloWorld() {
  yield call(console.tron.log, 'Hello World');
}

export default function* employeeSaga() {
  yield fork(helloWorld);
}
