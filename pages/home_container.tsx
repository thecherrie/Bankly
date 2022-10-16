import {View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './dashboard';
import AntIcons from 'react-native-vector-icons/AntDesign';
import SendMoney from './send_money';
import WalletContainer from './wallet_container';
import {getAllUsers, getUserDetails} from '../supabase/userDbFunctions';
import LoggedInContext from '../context/logged_in_ctx';
import {getUser} from '../supabase/client';

const HomeContainer = () => {
  const loggedInCtx = useContext(LoggedInContext);

  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [recipient, setRecipient] = useState(null);

  useEffect(() => {
    (async () => {
      const _user = await getUser();
      const _userData = await getUserDetails(_user?.id);
      const _allUsers = await getAllUsers();

      setUser(_user);
      setAllUsers(_allUsers);
      setUserDetails(_userData);
    })();
  }, [userDetails]);

  const BottomTab = createBottomTabNavigator();

  const focusedStyle = {
    backgroundColor: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <LoggedInContext.Provider value={{user, allUsers, userDetails}}>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            height: 100,
          },
        }}>
        <BottomTab.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            tabBarIconStyle: {
              marginBottom: 5,
            },
            tabBarIcon: ({focused}) => (
              <View style={focused && focusedStyle}>
                <AntIcons color={focused && 'white'} name="home" size={28} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="send"
          component={SendMoney}
          options={{
            tabBarIconStyle: {
              marginBottom: 10,
            },
            tabBarIcon: ({focused}) => (
              <View style={focused && focusedStyle}>
                <AntIcons name="swap" color={focused && 'white'} size={35} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          navigationKey="credit_cards"
          name="Payment"
          component={WalletContainer}
          options={{
            tabBarIconStyle: {
              marginBottom: 5,
            },
            tabBarIcon: ({focused}) => (
              <View style={focused && focusedStyle}>
                <AntIcons
                  name="creditcard"
                  color={focused && 'white'}
                  size={28}
                />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </LoggedInContext.Provider>
  );
};

export default HomeContainer;
