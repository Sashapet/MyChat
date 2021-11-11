import { COLORS } from '@assets/theme';
import { useNavigation } from '@react-navigation/native';
import { scale } from '@utils/helpers/dimensions';
import React, { useCallback } from 'react';
import { default as HeaderIcon } from 'react-native-vector-icons/AntDesign';

export const BackIcon = () => {
  const { goBack } = useNavigation();
  return (
    <HeaderIcon
      name="arrowleft"
      size={scale(28)}
      style={{
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: 10,
      }}
      color={COLORS.white}
      onPress={goBack}
    />
  );
};
export const AddIcon = () => {
  const { navigate } = useNavigation();
  const navigateToAdd = useCallback(() => {
    navigate('NewRecordScreen');
  }, []);
  return (
    <HeaderIcon
      name="pluscircle"
      size={scale(28)}
      style={{
        backgroundColor: COLORS.secondary,
        padding: 5,
        borderRadius: 10,
      }}
      color={COLORS.white}
      onPress={navigateToAdd}
    />
  );
};
