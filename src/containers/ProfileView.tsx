import React from 'react';
import { useRoute } from '@react-navigation/native';
import styled, { css } from 'styled-components/native';
import { scale } from '@utils/helpers/dimensions';
import { EmployeeProps } from '@typings/EmployeeTypes';
import { SecondaryButton } from '@components/buttons';

export const ProfileView: React.FC = () => {
  const { params } = useRoute();
  const { name, place, profession, company, skills } = params as EmployeeProps;
  return (
    <ProfileContainer>
      <Information>
        <Image source={require('@assets/images/profile.png')} />
        <Name>{name}</Name>
        <Place>{place}</Place>
        <Profession>
          {profession} at {company}
        </Profession>
        <Header>Skills</Header>
        <Skills>
          {skills.map((skill, index) => (
            <Skill borders={index === 1 && true} key={index}>
              {skill}
            </Skill>
          ))}
        </Skills>
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
const Header = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsBold};
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
`;
const Skills = styled.View`
  flex-direction: row;
  padding-bottom: 10%;
`;
const Skill = styled.Text<{ borders: boolean }>`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => scale(theme.fonts.size.m)}px;
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Montserrat.MontserratMedium};

  ${({ borders }) =>
    borders &&
    css`
      border-left-width: 2px;
      border-left-color: ${({ theme }) => theme.colors.black01};
      border-right-width: 2px;
      border-right-color: ${({ theme }) => theme.colors.black01};
    `};
`;
const ButtonContainer = styled.View`
  width: 100%;
  height: ${scale(71)}px;
`;
