import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EmployeeProps } from '@typings/EmployeeTypes';
import { scale } from '@utils/helpers/dimensions';
import { selectors } from '@state/selectors';
import { useSelector } from 'react-redux';
import { ROUTES } from '@routes/RouteNames';

import { Employee } from './Employee';

export const Employees: React.FC = () => {
  const { navigate } = useNavigation();
  const employees = useSelector(selectors.employee.employees);
  const navigateToProfile = useCallback(
    (EmployeeProps: EmployeeProps) => () => {
      navigate(ROUTES.ProfileScreen, EmployeeProps);
    },
    [],
  );

  return (
    <EmployeesWrapper>
      <FlatList
        data={employees}
        keyExtractor={item => item.employeeId}
        renderItem={({ item }) => (
          <EmployeeWrapper onPress={navigateToProfile(item)}>
            <Employee
              image={item.url}
              name={item.firstname}
              profession={item.profession}
            />
          </EmployeeWrapper>
        )}
        style={{ margin: '-2%' }}
        contentContainerStyle={{ padding: '2%' }}
      />
    </EmployeesWrapper>
  );
};
const EmployeeWrapper = styled.TouchableOpacity`
  height: ${scale(71)}px;
  border-radius: 10px;
  elevation: 7;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${scale(10)}px;
`;
const EmployeesWrapper = styled.View`
  flex: 1;
  width: 100%;
  padding-vertical: 10%;
`;
