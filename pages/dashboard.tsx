import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useContext, useEffect, useState} from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyText from '../components/text_components/text';
import {createUserOnDb, getUser} from '../supabase/client';
import {useNavigation} from '@react-navigation/native';
import BanklyButton from '../components/bankly_button';
import {getAllUsers, getUserDetails} from '../supabase/userDbFunctions';
import LoggedInContext from '../context/logged_in_ctx';

const Dashboard = () => {
  const navigation = useNavigation();

  const {user, allUsers, userDetails} = useContext(LoggedInContext);

  const isMe = (userCheckingAgainst: {}) => user?.id === userCheckingAgainst.id;

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
        <BanklyText size={50}>£{userDetails?.balance}</BanklyText>
      </View>
      <View
        style={{
          display: 'flex',
          flex: 3,
          padding: 20,
        }}>
        <BanklyText size={20}>Send</BanklyText>
        <ScrollView horizontal>
          {allUsers?.map(user => {
            return (
              !isMe(user) && (
                <View
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    marginRight: 20,
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('send', {
                        recipient: user,
                      })
                    }>
                    <View
                      style={{
                        backgroundColor: 'black',
                        height: 80,
                        width: 80,
                        borderRadius: 80,
                      }}></View>
                  </TouchableOpacity>
                  <Text style={{marginTop: 10}}>{user.name}</Text>
                </View>
              )
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
