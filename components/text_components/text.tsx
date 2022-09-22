import {View, Text, StyleSheet} from 'react-native';
import React, {JSXElementConstructor, ReactElement} from 'react';
import {Styleable} from '../../utils/interfaces';

interface TextProps {
  size: number;
  colour: string;
  children: JSX.Element;
}

const BanklyText = ({
  style,
  size,
  colour = 'black',
  children,
}: TextProps & Styleable): Element => {
  return (
    <Text style={{...style, fontSize: size, color: colour}}>{children}</Text>
  );
};

export default BanklyText;

// const styles = StyleSheet.create({
//   text: {},
// });
