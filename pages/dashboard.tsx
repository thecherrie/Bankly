import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component, useEffect, useState} from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyText from '../components/text_components/text';
import {createUserOnDb, getUser} from '../supabase/client';
import {useNavigation} from '@react-navigation/native';
import BanklyButton from '../components/bankly_button';
import {getAllUsers, getUserDetails} from '../supabase/userDbFunctions';

const Dashboard = () => {
  const user = getUser();
  const navigation = useNavigation();

  const [userDetails, setUserDetails] = useState(null);
  const [allUsers, setAllUsers] = useState([]);

  const _getAllUsers = async () => {
    const _allUsers = await getAllUsers(user?.id);
    setAllUsers(_allUsers);
  };

  const _getUserDetails = async () => {
    const _userDetails = await getUserDetails(user?.id);
    setUserDetails(_userDetails);
  };
  useEffect(() => {
    _getUserDetails();
    _getAllUsers();
  }, []);

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
        <BanklyText size={50}>{userDetails?.balance}</BanklyText>
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
                  <TouchableOpacity onPress={() => navigation.navigate('send')}>
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
