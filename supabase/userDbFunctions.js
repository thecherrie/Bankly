import supabase from './client';

export const getUserDetails = async userId => {
  const {data, error} = await supabase
    .from('users')
    .select()
    .eq('id', userId)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getAllUsers = async userId => {
  const {data, error} = await supabase.from('users').select();

  if (error) throw new Error(error.message);

  return data;
};
