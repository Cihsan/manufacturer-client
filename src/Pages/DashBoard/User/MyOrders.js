import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase_init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setorder] = useState([])
    useEffect(() => {
        const { email } = user
        /* profile-get?email=${user.email} */
        fetch(`http://localhost:5000/order?email=${email}`, {
            method: 'GET',
            /* headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            } */
        })
            .then(res => res.json())
            .then(data => setorder(data))
    })
    return (
        <div>
            <h1>Your All Payment Completed</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {
                    orders.map(order =>
                        <div class="card  bg-base-100 shadow-xl">
                            <div class="card-body items-center text-center">
                                <p>{order.email}</p>
                                <p>Product: {order.pname}</p>
                                <p>Quantity: {order.qt}</p>
                                <p>Paid Amount: {order.price}</p>
                                <p>Payment: {!order.status?<span title='We Will Update Payment'>Pending</span>:<span>Tranjection ID{order.transactionId}</span>}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;