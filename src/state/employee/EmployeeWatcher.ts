import { EmployeeProps } from '@typings/EmployeeTypes';
import database from '@react-native-firebase/database';
import { EventChannel, eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { actions } from '@state/actions';

const employeesChannel = async () => {
  const db = database().ref('employees/');
  return eventChannel(emit => {
    db.on(
      'value',
      snapshot => {
        emit({ employees: snapshot.val() });
      },
      errorObject => {
        console.log(errorObject);
      },
    );
    return () => db.off();
  });
};

export function* watchEmployees() {
  const channel: EventChannel<EmployeeProps> = yield call(employeesChannel);
  try {
    while (true) {
      const { employees } = yield take(channel);
      const newArray = [];
      for (const i in employees) {
        newArray.push(employees[i]);
      }
      yield put(actions.employee.fetchEmployees(newArray));
    }
  } catch (e) {
    console.tron.log(e.message);
  }
}
