import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51N7Vn6SAIfD6oaTk3TemPNPNK1DmfeNSmAqTvhIJzWwf7cOqPH0G3iWYl3rj5Aws3InCXsZk6ArXRZKapQlC3lRv00MuZbIrUF');

const options = {
  clientSecret:'pi_3OsYa8SAIfD6oaTk1jKPSI94_secret_o5WdmqSmH5VR2Ij0PDFnLmDvC',
};

const PUBLISHABLE_KEY = "pk_test_dW5pZmllZC1zaGFyay00OS5jbGVyay5hY2NvdW50cy5kZXYk"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise} options={options}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ClerkProvider>
    </Elements>
  </React.StrictMode>,
)
