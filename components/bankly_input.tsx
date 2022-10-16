import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

interface InputProps {
  placeholder: string;
  verticalPadding: boolean;
  onChangeText: (text: string) => any;
  password: boolean;
  defaultValue?: string;
  value?: string;
  keyboardType?: string;
}

const BanklyInput = ({
  placeholder,
  onChangeText,
  password = false,
  defaultValue,
  value,
  keyboardType,
}: InputProps) => {
  return (
    <View style={{marginVertical: 10}}>
      <TextInput
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        value={value}
        secureTextEntry={password}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}></TextInput>
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
