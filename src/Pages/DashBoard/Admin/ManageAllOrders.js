import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageAllOrders = () => {
    const [orders, setorder] = useState([])
    useEffect(() => {
        const url = 'http://localhost:5000/order-all'
        fetch(url, {
            method: 'GET',
            /* headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }, */
        })
            .then(res => res.json())
            .then(data => setorder(data))
    }, [orders])

    const makeStatus = (id) => {
        //console.log(id);
        fetch(`http://localhost:5000/order-status/${id}`, {
            method: 'PUT',
            /* headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            } */
        })
            .then(res =>res.json())
            .then(data => {
                if(data.modifiedCount===1){
                    toast.success(`Successfully Confirm Payment`);
                }
                else{
                    toast.error(`Failed`);
                }
                /* if (data.modifiedCount > 0) {
                    
                } */

            })
    }

    const del = id => {
        console.log(id)
        const url = `http://localhost:5000/order-status/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted')
                    const remaining = orders.filter(order => order._id !== id)
                    setorder(remaining)
                    toast('Deleted Form Here');
                }
                else {
                    toast.error('Delete Failed');
                }
            })
    
}
    return (
        <div className='mt-10'>
            <ToastContainer/>
            <h1>Manage All Orders</h1>
            <div class="overflow-x-auto w-3/4">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Transection ID</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div>
                                                <div class="font-xs">{order.transactionId}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {order.email}
                                    </td>
                                    <td>
                                        {!order.status?<span className='text-gray-400'>Pending</span>:<span className='text-primary'>{order.status}</span>}
                                    </td>
                                    <td className='text-center'>
                                        {!order.status && <button onClick={()=>makeStatus(order._id)} className='btn btn-sm mr-2'>Confirm</button>}
                                        <button onClick={()=>del(order._id)} className='btn btn-red-400 btn-sm '>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;