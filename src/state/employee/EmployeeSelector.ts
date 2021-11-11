import { RootState } from '../reducers';

const setOnSync = (state: RootState) => state.employee.setOnSync;
const employees = (state: RootState) => state.employee.employees;

export const employeeSelectors = {
  setOnSync,
  employees,
};
