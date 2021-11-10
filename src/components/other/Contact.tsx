import { moderateScale, scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';
import { default as DetailsIcon } from 'react-native-vector-icons/Entypo';
import { COLORS } from '@assets/theme';

export const Contact = () => (
  <ContactWrapper>
    <ProfileContainer>
      <Image source={require('@assets/images/profile.png')} />
      <Details>
        <Name>John Jones</Name>
        <Profession>UX/UI designer</Profession>
      </Details>
    </ProfileContainer>
    <DetailsIcon
      style={{ marginRight: 3 }}
      size={scale(22)}
      color={COLORS.black01}
      name="dots-three-vertical"
    />
  </ContactWrapper>
);

const ContactWrapper = styled.View`
  height: ${scale(71)}px;
  border-radius: 10px;
  elevation: 7;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: ${scale(10)}px;
`;
const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-horizontal: 10px;
`;
const Details = styled.View``;
const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsExtraBold};
  font-size: ${({ theme }) => moderateScale(theme.fonts.size.s, 0.3)}px;
`;
const Profession = styled.Text`
  font-size: ${({ theme }) => moderateScale(theme.fonts.size.xs, 0.8)}px;
  color: ${({ theme }) => theme.colors.black01};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsSemiBold};
  bottom: 5px;
  left: 0.4px;
`;
