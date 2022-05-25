import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = () => {
    const [users, setusers] = useState([])
    console.log(users.length);
    useEffect(() => {
        const url = 'http://localhost:5000/user'
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setusers(data))
    }, [users])

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <div class="overflow-x-auto w-3/4">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <td>
                                        <div class="flex items-center space-x-3">
                                            <div>
                                                <div class="font-bold">user</div>
                                                <div class="text-sm opacity-50">Role</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className='text-center'>
                                        <button onClick={makeAdmin} className='btn'>Make Admin</button>
                                        <button className='btn ml-5'>Delete User</button>
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

export default MakeAdmin;