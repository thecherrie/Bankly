import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import BanklyInput from '../components/bankly_input';
import BanklyText from '../components/text_components/text';
import BanklyButton from '../components/bankly_button';
import {signInUser} from '../supabase/client';

const SignIn = ({navigation}) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleValidationAndSubmit = async () => {
    const {email, password} = formState;
    if (email === '' || password === '') {
      Alert.alert('Error', 'Both fields must be filled.');
      return;
    }

    const {user, session} = await signInUser(email, password);
    if (user) {
      navigation.navigate('home_container');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <BanklyText style={{marginBottom: 30}} size={20} colour="white">
          Sign in
        </BanklyText>
        <BanklyInput
          onChangeText={(t: string) => setFormState({...formState, email: t})}
          placeholder="Email"
        />
        <BanklyInput
          password
          onChangeText={(t: string) =>
            setFormState({...formState, password: t})
          }
          placeholder="Password"
        />
      </View>
      <View style={styles.footContainer}>
        <BanklyButton
          onPress={handleValidationAndSubmit}
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

export default SignIn;
