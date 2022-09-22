import {View, Text} from 'react-native';
import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';

const DashboardTopBar = () => {
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
      <View
        style={{
          backgroundColor: 'black',
          height: 40,
          width: 40,
          borderRadius: 40,
        }}></View>
    </View>
  );
};

export default DashboardTopBar;
