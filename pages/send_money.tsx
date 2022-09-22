import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyInput from '../components/bankly_input';

const SendMoney = () => {
  return (
    <SafeAreaView>
      <DashboardTopBar />
      <View style={styles.container}>
      <BanklyInput placeholder='Recipient' />
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})
