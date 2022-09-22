import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BanklyText from './text_components/text';
import {Styleable} from '../utils/interfaces';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <View style={[style, styles.container]}>
      <BanklyText>{name}</BanklyText>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height:'100%',
          alignItems:'center',
        }}>
        <View>
          <BanklyText size={16}>{make}</BanklyText>
          <BanklyText size={25}>{currency}</BanklyText>
        </View>
        <MCIcons name="contactless-payment" size={30} />
      </View>
    </View>
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
});
