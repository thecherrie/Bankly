import {SafeAreaView, Text, View} from 'react-native';
import React, {Component} from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyText from '../components/text_components/text';
import { getUser } from '../supabase/client';

const Dashboard = () => {
  const user = getUser();
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        height: '100%',
      }}>
      <DashboardTopBar />
      <View
        style={{
          display: 'flex',
          flex: 1,
          padding: 20,
        }}>
        <BanklyText size={20}>Total Balance</BanklyText>
        <BanklyText size={50}>£10,000</BanklyText>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 3,
          padding: 20,
        }}>
        <BanklyText size={20}>Wallet</BanklyText>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
