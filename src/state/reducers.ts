import { AnyAction, CombinedState, combineReducers } from 'redux';

import {
  employeeReducer,
  EmployeeReducerState,
} from './employee/EmployeeReducer';

export interface RootState {
  employee: EmployeeReducerState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  employee: employeeReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
