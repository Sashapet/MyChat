import { scale } from '@utils/helpers/dimensions';
import React from 'react';
import styled from 'styled-components/native';
import { default as PlusIcon } from 'react-native-vector-icons/AntDesign';
import { COLORS } from '@assets/theme';
import * as ImagePicker from 'react-native-image-picker/src/index';
import { View } from 'react-native';

export const PickImage: React.FC<{
  setImageUri: (value: string) => void;
  imageUri: string;
}> = ({ setImageUri, imageUri }) => {
  const handlePickImage = () => {
    ImagePicker.launchImageLibrary(
      {
        maxWidth: 800,
        maxHeight: 600,
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
          return;
        }
        setImageUri(response.uri);
      },
    );
  };

  return (
    <ImageContainer onPress={handlePickImage}>
      <View>
        <Image
          source={
            !imageUri
              ? require('@assets/images/profile.png')
              : { uri: imageUri }
          }
        />
        <IconContainer>
          <PlusIcon name="pluscircle" size={scale(28)} color={COLORS.white} />
        </IconContainer>
      </View>
    </ImageContainer>
  );
};

const ImageContainer = styled.TouchableOpacity``;
const Image = styled.Image`
  width: ${scale(146)}px;
  height: ${scale(146)}px;
  border-radius: 100px;
`;
const IconContainer = styled.View`
  background-color: ${COLORS.secondary};
  border-radius: 10px;
  bottom: 0;
  opacity: 0.9;
  padding: ${scale(5)}px;
  position: absolute;
  right: 0;
`;
