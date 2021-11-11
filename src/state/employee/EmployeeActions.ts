import { EmployeeProps } from '@typings/EmployeeTypes';

import { constants } from '../constants';

const create = (payload: { employee: EmployeeProps; imageUri: string }) => ({
  type: constants.employee.CREATE,
  payload,
});
const setOnSync = (payload: boolean) => ({
  type: constants.employee.SET_ON_SYNC,
  payload,
});
const fetchEmployees = (payload: Array<EmployeeProps>) => ({
  type: constants.employee.FETCH,
  payload,
});

export const employeeActions = { create, setOnSync, fetchEmployees };
