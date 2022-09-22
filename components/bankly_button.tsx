import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: () => any;
  colours: string;
}

const BanklyButton = ({title = 'Press', onPress, colours}: ButtonProps) => {
  let __colours = {
    textColour: 'white',
    backgroundColor: 'black',
  };

  if (colours === 'white-and-black') {
    (__colours.textColour = 'black'), (__colours.backgroundColor = 'white');
  }

  return (
    <>
      <TouchableNativeFeedback onPress={onPress}>
        <View
          style={{
            ...styles.btnContainer,
            backgroundColor: __colours.backgroundColor,
          }}>
          <Text style={{...styles.btnText, color: __colours.textColour}}>
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
  },
  btnText: {
    color: 'white',
    padding: 15,
    fontSize: 18,
  },
});

export default BanklyButton;
