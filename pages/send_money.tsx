import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyInput from '../components/bankly_input';
import Autocomplete from 'react-native-autocomplete-input';
import {getAllUsers} from '../supabase/userDbFunctions';
import {getUser} from '../supabase/client';
import LoggedInContext from '../context/logged_in_ctx';

const SendMoney = () => {
  const loggedInCtx = useContext(LoggedInContext);
  const {user} = loggedInCtx;

  return (
    <SafeAreaView>
      <DashboardTopBar />
      <View style={styles.container}>
        <Autocomplete />
        <BanklyInput placeholder="Recipient" />
        <BanklyInput defaultValue={0.0} placeholder="Amount" />
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
