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
    yield put(actions.employee.error(e.message));
  } finally {
    yield put(actions.employee.setOnSync(false));
  }
}

export default function* employeeSaga() {
  yield takeLeading(constants.employee.CREATE, createEmployee);
}
