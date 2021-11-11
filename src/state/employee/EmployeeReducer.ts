import { createReducer } from '@reduxjs/toolkit';

// import { constants } from '../constants';

const INITIAL_STATE: EmployeeReducerState = {
  setOnSync: false,
};

export interface EmployeeReducerState {
  setOnSync: boolean;
}

export const employeeReducer = createReducer(INITIAL_STATE, {
  // [constants.app.SET_APP_UPDATE_FLAG]: (state, action) => {
  //   state.needToUpdate = action.needToUpdate;
  // },
});
