import { scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';
import { Contacts } from '@components/other';

export const ListView = () => (
  <ListContainer>
    <Contacts />
    <LogoTextContainer>
      <LogoText1>My</LogoText1>
      <LogoText2>Link</LogoText2>
    </LogoTextContainer>
  </ListContainer>
);

const ListContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${scale(52)}px;
`;

const LogoTextContainer = styled.View`
  flex-direction: row;
`;
const LogoText1 = styled.Text`
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const LogoText2 = styled.Text`
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratExtraBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
  align-items: center;
`;
