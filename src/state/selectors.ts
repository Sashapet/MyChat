import { employeeSelectors } from './employee/EmployeeSelector';

export const selectors = {
  employee: employeeSelectors,
} as const;
