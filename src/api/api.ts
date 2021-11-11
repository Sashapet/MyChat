import { EmployeeProps } from '@typings/EmployeeTypes';
import ImageResizer from 'react-native-image-resizer';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import { nonPhotoUrl } from '@utils/helpers/url';

const uploadImage = async (uri: string, employeeId: string) => {
  const resizeImage = await ImageResizer.createResizedImage(
    uri,
    700,
    700,
    'JPEG',
    90,
    0,
  );
  const storageRef = await storage().ref('avatars/' + employeeId);
  const path = resizeImage.uri;

  await storageRef.putFile(path);

  const url = await storageRef.getDownloadURL();

  return url;
};

const create = async (data: EmployeeProps, imageUri: string) => {
  const employeeRef = await database().ref('employees/');

  const newPushedRef = employeeRef.push();

  let url;
  if (imageUri) {
    url = await uploadImage(imageUri, newPushedRef.key);
  } else {
    url = nonPhotoUrl;
  }

  const updatedObj = {
    ...data,
    url,
    employeeId: newPushedRef.key,
  };

  return newPushedRef.set(updatedObj);
};

export const api = { create };
