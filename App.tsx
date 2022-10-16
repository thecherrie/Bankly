/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from './pages/new_user/welcome';
import Signup from './pages/new_user/sign_up';
import HomeContainer from './pages/home_container';
import MyProfile from './pages/my_profile';
import {getSession, getUser} from './supabase/client';
import SignIn from './pages/sign_in';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  const MainStack = createNativeStackNavigator();

  const user = getUser();
  const session = getSession();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user || session ? (
          <MainStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <MainStack.Screen name="home_container" component={HomeContainer} />
            <MainStack.Screen name="my_profile" component={MyProfile} />
          </MainStack.Navigator>
        ) : (
          <MainStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <MainStack.Screen name="welcome_page" component={WelcomePage} />
            <MainStack.Screen name="sign_up" component={Signup} />
            <MainStack.Screen name="sign_in" component={SignIn} />
            <MainStack.Screen name="home_container" component={HomeContainer} />
            <MainStack.Screen name="my_profile" component={MyProfile} />
          </MainStack.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
  },
});

export default App;
