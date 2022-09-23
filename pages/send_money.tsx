import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyInput from '../components/bankly_input';
import {SI} from '@env';

const SendMoney = () => {
  return (
    <SafeAreaView>
      <DashboardTopBar />
      <Text>{JSON.stringify(SI)}</Text>
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
