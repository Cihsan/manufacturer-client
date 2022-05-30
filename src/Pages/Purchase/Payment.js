import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';
const Payment = () => {
    
    const stripePromise = loadStripe('pk_test_51L3mDcBCu2CLMg2EtMa0wudnS0Ab8F4YZ8hnn2pQU2NtkUwCI23svIhXt3Xh22SE5bu1F5pUdswu9Ihui4jjREM200DSdXbqS3');
    return (
        <div>
            <div class="card w-4/12 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOut/>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;