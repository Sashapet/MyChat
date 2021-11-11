import { call, put, takeLeading } from 'redux-saga/effects';
import { constants } from '@state/constants';
import { actions } from '@state/actions';
import { EmployeeProps } from '@typings/EmployeeTypes';
import { api } from '@api/api';

function* createEmployee(data: {
  type: string;
  payload: { employee: EmployeeProps; imageUri: string };
}) {
  try {
    yield put(actions.employee.setOnSync(true));
    const { payload } = data;
    yield call(api.create, payload.employee, payload.imageUri);
  } catch (e) {
    console.tron.log(e.message);
  } finally {
    yield put(actions.employee.setOnSync(false));
  }
}

export default function* employeeSaga() {
  yield takeLeading(constants.employee.CREATE, createEmployee);
}

// function* login(data: { type: string; payload: SignProps }) {
//     try {
//       const { payload } = data;

//       yield call(authApi.login, payload.email, payload.password);
//       yield put(
//         actions.app.setOnSync({
//           type: setOnSyncConstants.login,
//           setOnSync: true,
//         }),
//       );
//     } catch (e) {
//       console.tron.log(e.message);
//     } finally {
//       yield put(
//         actions.app.setOnSync({
//           type: setOnSyncConstants.login,
//           setOnSync: false,
//         }),
//       );
//     }
//   }
