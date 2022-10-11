import {createClient} from '@supabase/supabase-js';
import {SUPABASE_URL, SUPABASE_KEY} from '@env';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  localStorage: AsyncStorage,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});

export const registerUser = async (name, email, password) => {
  const {user, session, error} = await supabase.auth.signUp(
    {
      email: email,
      password: password,
    },
    {
      data: {
        full_name: name,
      },
    },
  );
  if (error) {
    Alert.alert('Error', error.message);
    return;
  }
  return {
    user,
    session,
  };
};

export const signInUser = async (email, password) => {
  const {user, session, error} = await supabase.auth.signIn({
    email,
    password,
  });
  if (error) {
    Alert.alert('Error', error.message);
    return;
  }
  return {
    user,
    session,
  };
};

export const createUserOnDb = async (userId, name, balance = 10000) => {
  console.log(userId, name, balance);
  const {error} = await supabase
    .from('users')
    .insert([{id: userId, name, balance: 200}], {returning: 'minimal'});
  if (!error) {
    console.info(`Successfully created ${userId}`);
  }

  if (error) throw new Error(error);

  // const {data} = await supabase
  // .from('users')
  // .select()
  // console.log(data)
};

export const getSession = () => supabase.auth.session();

export const getUser = () => supabase.auth.user();

export const signOut = () => supabase.auth.signOut();

export default supabase;
