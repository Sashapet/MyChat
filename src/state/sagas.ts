import { all, fork } from 'redux-saga/effects';

import employeeSaga from './employee/EmployeeSaga';
import { watchEmployees } from './employee/EmployeeWatcher';

export function* rootSaga() {
  yield all([fork(employeeSaga), fork(watchEmployees)]);
}
