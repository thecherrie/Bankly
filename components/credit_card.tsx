import {View, StyleSheet} from 'react-native';
import React from 'react';
import BanklyText from './text_components/text';
import {Styleable} from '../utils/interfaces';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

interface CreditCardProps {
  name: string;
  make: string;
  number: number;
  expiry: Date;
  cvv: number;
  currency: string;
}

const CreditCard = ({
  name,
  style,
  make,
  expiry,
  cvv,
  currency,
}: CreditCardProps & Styleable) => {
  return (
    <LinearGradient
      colors={['#CFD8DC', '#F5F5F5']}
      style={[
        style,
        styles.container,
        {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
        },
      ]}>
      <BanklyText>{name}</BanklyText>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
          alignItems: 'center',
        }}>
        <View>
          <BanklyText size={16}>{make}</BanklyText>
          <BanklyText size={25}>{currency}</BanklyText>
        </View>
        <MCIcons name="contactless-payment" size={30} />
      </View>
    </LinearGradient>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    backgroundColor: 'pink',
    width: '100%',
    padding: 20,
    height: 200,
    borderRadius: 26,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
