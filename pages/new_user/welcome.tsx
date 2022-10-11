import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BanklyButton from '../../components/bankly_button';
import BanklyText from '../../components/text_components/text';
import {NavigationContainer} from '@react-navigation/native';

const WelcomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <BanklyText colour="white" size={50}>
          More Than Just Banking
        </BanklyText>
      </View>
      <View style={styles.footContainer}>
        <BanklyButton
          colours="white-and-black"
          onPress={() => navigation.navigate('sign_up')}
          title="Get Started"
        />
        <TouchableOpacity onPress={() => navigation.navigate('sign_in')}>
          <Text
            style={{
              marginTop: 15,
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Already a user? Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

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
    justifyContent: 'center',
  },
  footContainer: {
    margin: 20,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});
