import {
  View,
  Text,
  Touchable,
  Alert,
  Button,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const DashboardTopBar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <FeatherIcons name="menu" size={25} />
      <TouchableNativeFeedback
        onPress={() => navigation.navigate('my_profile')}>
        <View
          style={{
            backgroundColor: 'black',
            height: 40,
            width: 40,
            borderRadius: 40,
          }}></View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default DashboardTopBar;
