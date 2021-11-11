import { RootState } from '../reducers';

const setOnSync = (state: RootState) => state.employee.setOnSync;
const employees = (state: RootState) => state.employee.employees;
const firebaseError = (state: RootState) => state.employee.firebaseError;
export const employeeSelectors = {
  setOnSync,
  employees,
  firebaseError,
};
