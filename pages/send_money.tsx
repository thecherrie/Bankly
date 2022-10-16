import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyInput from '../components/bankly_input';
import {searchForUser} from '../supabase/userDbFunctions';
import LoggedInContext from '../context/logged_in_ctx';
import BanklyText from '../components/text_components/text';
import BanklyButton from '../components/bankly_button';
import {sendMoney} from '../supabase/monetaryDbFunctions';
import {useNavigation} from '@react-navigation/native';

const SendMoney = () => {
  const navigation = useNavigation();
  const loggedInCtx = useContext(LoggedInContext);
  const {user, allUsers, userDetails} = loggedInCtx;

  const [recipient, setRecipient] = useState(null);
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(false);
  const [moneyAmount, setMoneyAmount] = useState(0);

  const searchUser = async (name: string) => {
    const foundUsers = await searchForUser(name);
    setSuggestions(foundUsers);
  };

  const truncate = (amt: number, text?: string) => {
    if (!text) return '';
    return text?.slice(0, amt) + '...';
  };

  const handleSendMoney = () => {
    if (moneyAmount > userDetails.balance) {
      return Alert.alert(
        'Error',
        `You cannot afford this transaction. Your balance is £${userDetails.balance}`,
      );
    }

    if (moneyAmount > 99999999) {
      return Alert.alert('Error', 'Balance is too large to send.');
    }

    if (moneyAmount === 0) {
      return Alert.alert('Error', 'You cannot send £0.');
    }

    sendMoney(moneyAmount, recipient);
    navigation.navigate('dashboard');
    setMoneyAmount(0);
  };

  return (
    <SafeAreaView>
      <DashboardTopBar />
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <BanklyText size={15}>
            Send to: {truncate(8, recipient?.id)}{' '}
            {recipient && `(${recipient.name})`}
          </BanklyText>
          <BanklyInput
            value={userSearchQuery}
            placeholder="Recipient"
            onChangeText={t => {
              setUserSearchQuery(t);
              searchUser(t);
              setSelectedSuggestion(false);
              setRecipient(null);
            }}
          />
          {userSearchQuery.length > 0 && !selectedSuggestion && (
            <ScrollView
              style={{
                top: -10,
                position: 'relative',
                backgroundColor: 'white',
                maxHeight: 200,
                padding: 20,
                borderRadius: 12,
              }}>
              {suggestions?.map(suggestion => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setUserSearchQuery(suggestion.name);
                      setSelectedSuggestion(true);
                      setRecipient(suggestion);
                    }}>
                    <View>
                      <BanklyText
                        key={Math.floor(Math.random() * 999)}
                        size={20}>
                        {suggestion.name}
                      </BanklyText>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 12,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <BanklyText colour="black" size={20}>
              £
            </BanklyText>
            <BanklyInput
              value={moneyAmount}
              onChangeText={value => {
                setMoneyAmount(Number.parseFloat(value));
              }}
              keyboardType="numeric"
              placeholder="Amount"
            />
          </View>
        </View>
        <View style={{flex: 1}}>
          <BanklyButton title="Send" onPress={handleSendMoney} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 20,
    height: '100%',
  },
});
