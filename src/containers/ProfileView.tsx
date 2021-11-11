import React from 'react';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';
import { EmployeeProps } from '@typings/EmployeeTypes';
import { SecondaryButton } from '@components/buttons';

export const ProfileView: React.FC = () => {
  const { params } = useRoute();
  const { firstname, lastname, country, city, profession, company, url } =
    params as EmployeeProps;
  return (
    <ProfileContainer>
      <Information>
        <Image source={{ uri: url }} />
        <Name>
          {firstname} {lastname}
        </Name>
        <Place>
          {country}, {city}
        </Place>
        <Profession>
          {profession} at {company}
        </Profession>
        <ButtonContainer>
          <SecondaryButton>Hire Me</SecondaryButton>
        </ButtonContainer>
      </Information>
      <LogoTextContainer>
        <LogoText1>My</LogoText1>
        <LogoText2>Link</LogoText2>
      </LogoTextContainer>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.View`
  flex: 1;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const LogoTextContainer = styled.View`
  flex-direction: row;
  padding-vertical: 10%;
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
const Information = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding-vertical: 10%;
`;
const Image = styled.Image`
  width: ${scale(146)}px;
  height: ${scale(146)}px;
  border-radius: 100px;
`;
const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsSemiBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.l)}px;
`;
const Place = styled.Text`
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  margin-bottom: ${scale(8)}px;
`;
const Profession = styled.Text`
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};
  margin-bottom: ${scale(8)}px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  height: ${scale(71)}px;
`;
