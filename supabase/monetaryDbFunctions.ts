import supabase, {getUser} from './client';
import {getUserDetails} from './userDbFunctions';

export const sendMoney = async (amount: number, recipient: object | null) => {
  const userId = getUser()?.id;
  const user = await getUserDetails(userId);
  const recipientDetails = await getUserDetails(recipient.id);

  if (amount > user.balance) {
    throw new Error('Amount is too big!');
  }

  if (amount < 0) {
    throw new Error('Formatting error');
  }

  const updateSenderBalance = async () => {
    //Reduce my money
    const {error} = await supabase
      .from('users')
      .update({balance: (user.balance -= amount)})
      .eq('id', userId);
    if (error) throw new Error(error.message);
  };

  const updateRecipientBalance = async () => {
    // increase recipient's money
    const {error} = await supabase
      .from('users')
      .update({balance: (recipientDetails.balance += amount)})
      .eq('id', recipientDetails.id);
    if (error) throw new Error(error.message);
  };

  updateSenderBalance();
  updateRecipientBalance();
};
