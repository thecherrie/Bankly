import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {Component} from 'react';

interface InputProps {
  placeholder: string;
  verticalPadding: boolean;
}

const BanklyInput = ({placeholder, verticalPadding}: InputProps) => {
  return (
    <View style={{marginVertical: 10}}>
      <TextInput placeholder={placeholder} style={styles.textInput}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    padding: 14,
    fontSize: 18,
    borderRadius: 8,
  },
});

export default BanklyInput;
