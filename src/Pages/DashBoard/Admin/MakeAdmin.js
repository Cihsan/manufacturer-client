import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase_init';

const MakeAdmin = () => {
    const [user] = useAuthState(auth);
    const {email}=user
    const [users, setusers] = useState([])
    useEffect(() => {
        const url = 'https://safe-inlet-78940.herokuapp.com/user'
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
        //console.log(email);
        fetch(`https://safe-inlet-78940.herokuapp.com/user/admin/${email}`, {
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
                            <th>User Role</th>
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
                                                <div class="font-bold">{user.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user.email}
                                    </td>
                                    <td className='text-center'>
                                        {!user.role&&<button onClick={makeAdmin} className='btn btn-sm'>Make Admin</button>}
                                        <button className='btn btn-sm ml-5'>Delete User</button>
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