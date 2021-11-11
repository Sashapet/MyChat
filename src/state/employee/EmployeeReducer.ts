import { EmployeeProps } from '@typings/EmployeeTypes';
import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

const INITIAL_STATE: EmployeeReducerState = {
  setOnSync: false,
  employees: null,
};

export interface EmployeeReducerState {
  setOnSync: boolean;
  employees: Array<EmployeeProps>;
}

export const employeeReducer = createReducer(INITIAL_STATE, {
  [constants.employee.SET_ON_SYNC]: (state, action) => {
    state.setOnSync = action.payload;
  },
  [constants.employee.FETCH]: (state, action) => {
    state.employees = action.payload;
  },
});
