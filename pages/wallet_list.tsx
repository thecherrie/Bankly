import {View, SafeAreaView, FlatList, Animated} from 'react-native';
import React from 'react';
import DashboardTopBar from '../components/dashboard_top_bar';
import BanklyText from '../components/text_components/text';
import AntIcons from 'react-native-vector-icons/AntDesign';
import CreditCard from '../components/credit_card';

const WalletList = ({navigation}) => {
  const dummyCards = [
    {
      name: 'card1',
      make: 'visa',
      number: '12456789',
      expiry: '09/24',
      cvv: 123,
    },
    {
      name: 'card2',
      make: 'mastercard',
      number: '12456789',
      expiry: '09/24',
      cvv: 123,
    },
  ];

  const renderCard = ({item: card}) => (
    <CreditCard
      currency="GBP"
      name={card.name}
      make={card.make}
      number={card.number}
      cvv={card.cvv}
    />
  );

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <BanklyText size={20}>Wallet</BanklyText>
        <AntIcons name="pluscircle" color="black" size={30} />
      </View>
      <View
        style={{
          margin: 20,
        }}>
        <FlatList
          style={{
            height: '100%',
          }}
          data={dummyCards}
          renderItem={renderCard}
        />
      </View>
    </SafeAreaView>
  );
};

export default WalletList;
