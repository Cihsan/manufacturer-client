import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { BsFillPhoneFill } from 'react-icons/bs';
// import { FaGraduationCap } from 'react-icons/fa';
// import { ImLocation2 } from 'react-icons/im';
// import { MdDateRange } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase_init';
import Extra from './UpdateProfile';

const MyProfile = () => {
    const [userinfos, setUserInfo] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://safe-inlet-78940.herokuapp.com/profile-get?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setUserInfo(data);
                });
        }
    }, [user])
    return (
        <div className='mx-5'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    userinfos.map(userinfo=>
                        <div class="card bg-base-100 shadow-xl ">
                    <div class="card-body border-4 border-accent border-t-primary">
                        <div className='flex items-center'>
                        
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-bold leading-4 mr-5">Name: {userinfo?.name}</h3>
                                <p class="text-gray-600 text-md leading-6">Education: {userinfo?.study}</p>
                                <p class="text-gray-600 text-md leading-6">Date Of Birth: {userinfo?.date}</p>
                                <p class="text-gray-600 text-md leading-6">Phone: {userinfo?.phone}</p>
                                <p class="text-gray-600 text-md leading-6"> Country: {userinfo?.country}</p>
                                <p class="text-gray-600 text-md leading-6">State: {userinfo?.state}</p>
                                <p class="text-gray-600 text-md leading-6">Zip Code: {userinfo?.zip}</p>
                                <p class="text-gray-600 text-md leading-6">Email: {userinfo?.email}</p>
                                <p class="text-gray-600 text-md leading-6">Linkedin: {userinfo?.link}</p>
                            </div>
                        </div>
                    </div>
                </div>
                        )
                }
            </div>
            <Extra />
        </div>
    );
};

export default MyProfile;