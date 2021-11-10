import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { EmployeeProps } from '@typings/EmployeeTypes';
import { scale } from '@utils/helpers/dimensions';

import { Employee } from './Employee';

const employees = [
  {
    employeeId: '1',
    name: 'John Jones',
    place: 'Lithuania, Vilnius',
    profession: 'UX/UI designer',
    company: 'Kilo',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '2',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '3',
    name: 'John Travollta',
    place: 'USA, New York',
    profession: 'Actor',
    company: 'Hollywood',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '4',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '5',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '6',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '7',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '8',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '9',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '10',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '11',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '12',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
  {
    employeeId: '13',
    name: 'Martin King',
    place: 'Lithuania, Kaunas',
    profession: 'UX/UI designer',
    company: 'Teso',
    skills: ['UX/UI', 'FIGMA', 'PS'],
  },
];

export const Employees = () => {
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(
    (EmployeeProps: EmployeeProps) => () => {
      navigate('ProfileScreen', EmployeeProps);
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
            <Employee name={item.name} profession={item.profession} />
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
