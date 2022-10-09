import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import BanklyButton from '../../components/bankly_button';
import BanklyText from '../../components/text_components/text';
import BanklyInput from '../../components/bankly_input';
import supabase, {getSession, registerUser} from '../../supabase/client';

const Signup = ({navigation}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const handleValidationAndSubmit = async () => {
    setSubmitting(false);
    setSubmitting(true);
    if (formState.password !== formState.confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match.');
    }

    const {user, session} = await registerUser(
      formState.name,
      formState.email,
      formState.password,
    );

    if (user) {
      navigation.navigate('home_container');
    }
    console.log(user, session);
    setSubmitting(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <BanklyText style={{marginBottom: 30}} size={20} colour="white">
          Sign up
        </BanklyText>
        <BanklyInput
          onChangeText={(t: string) => setFormState({...formState, name: t})}
          placeholder="Name"
        />
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
        <BanklyInput
          password
          onChangeText={(t: string) =>
            setFormState({...formState, confirmPassword: t})
          }
          placeholder="Confirm Password"
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

export default Signup;
