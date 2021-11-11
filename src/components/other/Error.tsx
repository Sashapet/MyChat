import React from 'react';
import styled from 'styled-components/native';

export const Error: React.FC<{ error: string }> = ({ error }) => (
  <ErrorText>{error}</ErrorText>
);

const ErrorText = styled.Text`
  font-size: ${({ theme }) => theme.fonts.size.s}px;
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratBold};
`;

Error.displayName = 'Error';
