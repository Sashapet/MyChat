import React, { useState } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { moderateScale, scale } from '@utils/helpers/dimensions';
import { COLORS } from '@assets/theme';
import { SecondaryButton } from '@components/buttons';
import { Error, PickImage } from '@components/other';
import { newRecordSchema } from '@utils/validatons';
import { Keyboard } from 'react-native';
import { chooseErrorTitle } from '@utils/helpers/chooseErrorTitle';
import { useDispatch } from 'react-redux';
import { actions } from '@state/actions';

export const NewRecordView = () => {
  const [error, setError] = useState('');
  const [imageUri, setImageUri] = useState<string>(null);
  const dispatch = useDispatch();

  const initialValues = {
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    profession: '',
    company: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async employee => {
        Keyboard.dismiss();
        dispatch(actions.employee.create({ employee, imageUri }));
        console.tron.log(employee, imageUri);
      }}
      validateOnMount
      validationSchema={newRecordSchema}
    >
      {({ handleSubmit, values, handleChange, errors }) => (
        <NewRecordWrapper>
          <Form>
            <KeyboardAwareScrollView
              extraScrollHeight={15}
              enableOnAndroid={true}
            >
              <UpperSection>
                <PickImage imageUri={imageUri} setImageUri={setImageUri} />
                <Row>
                  <Input
                    placeholder={'First name'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.firstname}
                    onChangeText={handleChange('firstname')}
                  />
                  <Input
                    placeholder={'Last name'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.lastname}
                    onChangeText={handleChange('lastname')}
                  />
                </Row>
                <Row>
                  <Input
                    placeholder={'Country'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.country}
                    onChangeText={handleChange('country')}
                  />
                  <Input
                    placeholder={'City'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.city}
                    onChangeText={handleChange('city')}
                  />
                </Row>
                <Row>
                  <Input
                    placeholder={'Profession'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.profession}
                    onChangeText={handleChange('profession')}
                  />
                  <Input
                    placeholder={'Company'}
                    placeholderTextColor={COLORS.white}
                    underlineColorAndroid="transparent"
                    value={values.company}
                    onChangeText={handleChange('company')}
                  />
                </Row>
                <Error error={error} />
              </UpperSection>
            </KeyboardAwareScrollView>
            <ButtonContainer>
              <SecondaryButton
                onPress={() => {
                  setError(chooseErrorTitle(errors));
                  handleSubmit();
                }}
              >
                Create
              </SecondaryButton>
            </ButtonContainer>
          </Form>

          <LogoTextContainer>
            <LogoText1>My</LogoText1>
            <LogoText2>Link</LogoText2>
          </LogoTextContainer>
        </NewRecordWrapper>
      )}
    </Formik>
  );
};
const NewRecordWrapper = styled.View`
  flex: 1;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-top: ${scale(10)}%;
`;
const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;
const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;
const UpperSection = styled.View`
  align-items: center;
`;

const LogoTextContainer = styled.View`
  flex-direction: row;
  padding-vertical: ${scale(10)}%;
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
const Input = styled.TextInput`
  border-bottom-color: ${({ theme }) => theme.colors.white};
  border-bottom-width: 2px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins.PoppinsMedium};
  font-size: ${({ theme }) => scale(theme.fonts.size.s)}px;
  margin-bottom: ${moderateScale(10, 3)}px;
  padding-bottom: ${scale(5)}px;
  width: 45%;
`;
const ButtonContainer = styled.View`
  width: 85%;
  margin: 0 auto;
  align-self: center;
  height: ${scale(71)}px;
`;
