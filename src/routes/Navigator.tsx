import React, { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { lightTheme } from '@assets/theme/theme';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { COLORS, FONTS } from '@assets/theme';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import {
  LandingView,
  ListView,
  NewRecordView,
  ProfileView,
} from '@containers/.';
import { scale } from '@utils/helpers/dimensions';
import { AddIcon, BackIcon } from '@components/icons';

const Navigator = () => {
  const Stack = createStackNavigator();
  //hide splash
  const hideSplash = useCallback(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <NavigationContainer onReady={hideSplash}>
            <Stack.Navigator
              screenOptions={{
                cardStyle: {
                  backgroundColor: COLORS.primary,
                },
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="LandingScreen"
                component={LandingView}
              />
              <Stack.Screen
                options={{
                  title: 'Employees',
                  headerTitleAlign: 'center',
                  headerTintColor: COLORS.black01,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    fontFamily: FONTS.Poppins.PoppinsLight,
                    fontSize: scale(FONTS.size.l),
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                  headerRightContainerStyle: {
                    marginRight: 10,
                  },
                  headerLeft: () => <BackIcon />,
                  headerRight: () => <AddIcon />,
                }}
                name="ListScreen"
                component={ListView}
              />
              <Stack.Screen
                options={{
                  title: 'Profile',
                  headerTitleAlign: 'center',
                  headerTintColor: COLORS.black01,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    fontFamily: FONTS.Poppins.PoppinsLight,
                    fontSize: scale(FONTS.size.l),
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                  headerLeft: () => <BackIcon />,
                }}
                name="ProfileScreen"
                component={ProfileView}
              />
              <Stack.Screen
                options={{
                  title: 'New employee',
                  headerTitleAlign: 'center',
                  headerTintColor: COLORS.black01,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    fontFamily: FONTS.Poppins.PoppinsLight,
                    fontSize: scale(FONTS.size.l),
                  },
                  headerLeftContainerStyle: {
                    marginLeft: 10,
                  },
                  headerLeft: () => <BackIcon />,
                }}
                name="NewRecordScreen"
                component={NewRecordView}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </TouchableWithoutFeedback>
    </ThemeProvider>
  );
};

export default Navigator;
