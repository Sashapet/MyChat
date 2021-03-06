import React, { useCallback } from 'react';
import styled from 'styled-components/native';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { SecondaryButton } from '@components/index';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@routes/RouteNames';

export const LandingView: React.FC = () => {
  const { navigate } = useNavigation();
  const navigateToLogin = useCallback(() => {
    navigate(ROUTES.ListScreen);
  }, []);

  return (
    <LandingContainer>
      <UpperSection>
        <LogoImg source={require('@assets/images/logo.png')} />
        <LogoTextContainer>
          <LogoText1>My</LogoText1>
          <LogoText2>Link</LogoText2>
        </LogoTextContainer>
        <Paragraph>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Paragraph>
      </UpperSection>
      <ButtonContainer>
        <SecondaryButton onPress={navigateToLogin}>Get Started</SecondaryButton>
      </ButtonContainer>
    </LandingContainer>
  );
};
const UpperSection = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;
`;
const LandingContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: space-between;
  padding-bottom: ${scale(52)}px;
`;
const LogoImg = styled.Image`
  width: ${scale(120)}px;
  height: ${scale(100)}px;
`;

const LogoTextContainer = styled.View`
  padding-vertical: ${moderateScale(26, 2)}px;
  flex-direction: row;
`;
const LogoText1 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const LogoText2 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratExtraBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
  align-items: center;
`;
const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  font-size: ${({ theme }) => moderateScale(theme.fonts.size.s, 0.3)}px;
  text-align: justify;
  line-height: ${moderateScale(24, 0.7)}px;
  width: 85%;
`;
const ButtonContainer = styled.View`
  width: 85%;
  margin: 0 auto;
  height: ${scale(71)}px;
`;
