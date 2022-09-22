import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WalletList from './wallet_list';

const WalletContainer = () => {
  const WalletStack = createNativeStackNavigator();

  return (
    <WalletStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <WalletStack.Screen name="wallet_list" component={WalletList} />
    </WalletStack.Navigator>
  );
};

export default WalletContainer;
