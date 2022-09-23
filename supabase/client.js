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

export default supabase;
