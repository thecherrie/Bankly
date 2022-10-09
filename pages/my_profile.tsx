import {
  View,
  Text,
  SafeAreaView,
  TouchableNativeFeedback,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import React from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import BanklyButton from '../components/bankly_button';
import { getUser, signOut } from '../supabase/client';

const MyProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          style={{
            padding: 15,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          name="return-down-back"
          size={25}
        />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <BanklyButton onPress={() => signOut()} title="Sign out" />
      </View>
    </SafeAreaView>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  bodyContainer: {
    margin: 20,
    display: 'flex',
    flex: 3,
    justifyContent: 'flex-start',
  },
});
