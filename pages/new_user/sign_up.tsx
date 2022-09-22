import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import React from 'react';
import BanklyButton from '../../components/bankly_button';
import BanklyText from '../../components/text_components/text';
import BanklyInput from '../../components/bankly_input';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <BanklyText style={{marginBottom: 30}} size={20} colour="white">
          Sign up
        </BanklyText>
        <BanklyInput placeholder="Name" />
        <BanklyInput placeholder="Email" />
        <BanklyInput placeholder="Password" />
        <BanklyInput placeholder="Confirm Password" />
      </View>
      <View style={styles.footContainer}>
        <BanklyButton
          onPress={() => navigation.navigate('home_container')}
          title="Sign up"
          colours="white-and-black"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: 'black',
  },
  bodyContainer: {
    margin: 20,
    display: 'flex',
    flex: 3,
    justifyContent: 'flex-start',
  },
  footContainer: {
    margin: 20,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Signup;
