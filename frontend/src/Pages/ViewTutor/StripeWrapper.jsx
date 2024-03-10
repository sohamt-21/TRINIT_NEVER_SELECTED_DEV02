import React, { useState, useEffect } from 'react';
import { useStripe, useElements, PaymentElement , AddressElement} from '@stripe/react-stripe-js';
import './Components/Stripe.css';

const StriprWrapper = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://github.com/Adidem23',
      },
    });


    if (error) {
      setErrorMessage(error.message);
    } else {
        console.log("Nothing")
    }
  };



  return (
    <>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
      <AddressElement options={{mode: 'shipping'}}   />
        <PaymentElement />
        <br />
        <button disabled={!stripe}>Submit</button>
        {/* Show error message to your customers */}
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </>

  )
};

export default StriprWrapper;