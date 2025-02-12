import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {

  const loggedInUser = await getLoggedInUser();
  
  const accounts = await getAccounts({userId: loggedInUser.$id})

  if(!accounts) return;
  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <HeaderBox
        title='Payment Transfer'
        subtext='Payments through your linked bank accounts can be done through here.'
      />
      
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default Transfer