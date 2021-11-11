import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';
import { selectors } from '@state/selectors';
import { useSelector } from 'react-redux';
import { COLORS } from '@assets/theme';

interface DefaultButtonProps {
  onPress?: (event: unknown) => void;
}

export const PrimaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => {
  const setOnSync = useSelector(selectors.employee.setOnSync);
  return (
    <PrimaryTouchableWrapper disabled={setOnSync} onPress={onPress}>
      {setOnSync ? (
        <ActivityIndicator size="large" color={COLORS.black01} />
      ) : (
        <ButtonTitle>{children}</ButtonTitle>
      )}
    </PrimaryTouchableWrapper>
  );
};

export const SecondaryButton: React.FC<DefaultButtonProps> = ({
  onPress,
  children,
}) => {
  const setOnSync = useSelector(selectors.employee.setOnSync);
  return (
    <SecondaryTouchableWrapper disabled={setOnSync} onPress={onPress}>
      {setOnSync ? (
        <ActivityIndicator size="large" color={COLORS.black01} />
      ) : (
        <ButtonTitle>{children}</ButtonTitle>
      )}
    </SecondaryTouchableWrapper>
  );
};

const ButtonTitle = styled.Text`
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

const PrimaryTouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
`;
const SecondaryTouchableWrapper = styled.TouchableOpacity`
  border-radius: 6px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  flex: 1;
`;
