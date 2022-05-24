import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsFillPhoneFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import { MdDateRange } from 'react-icons/md';
import Extra from './UpdateProfile';

const MyProfile = () => {
    return (
        <div className='mx-5'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                <div class="card bg-base-100 shadow-xl ">
                    <div class="card-body border-4 border-accent border-t-primary">
                        <div className='flex items-center'>
                            <div class="mr-4 w-12 h-12 rounded shadow">
                                <img class="w-full h-full overflow-hidden object-cover object-center rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/popovers/p_1_0.png" alt="avatar" />
                            </div>
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Andres Berlin</h3>
                                <p class="text-gray-600 text-xs leading-3">Role: </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body border-4 border-accent border-b-primary">
                        <div className='flex items-center gap-4'>
                            <MdDateRange className='text-5xl' />
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Date Of Birth</h3>
                                <p class="text-gray-600 text-xs leading-3">21-03-1998</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body border-4 border-accent border-t-primary">
                        <div className='flex items-center gap-4'>
                            <FaGraduationCap className='text-5xl' />
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Education</h3>
                                <p class="text-gray-600 text-xs leading-3">MBA</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body border-4 border-accent border-b-primary">
                        <div className='flex items-center gap-4'>
                            <BsFillPhoneFill className='text-5xl' />
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Phone</h3>
                                <p class="text-gray-600 text-xs leading-3">+123 4567 8912</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body border-4 border-accent border-t-primary">
                        <div className='flex items-center gap-4'>
                            <ImLocation2 className='text-5xl' />
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Location</h3>
                                <p class="text-gray-600 text-xs leading-3">Country | State | Zip Code</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <div class="card-body border-4 border-accent border-b-primary">
                        <div className='flex items-center gap-4'>
                            <AiFillLinkedin className='text-5xl' />
                            <div>
                                <h3 class="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4 mr-5">Linkedin Profile Link</h3>
                                <p class="text-gray-600 text-xs leading-3">https://linkedin.com/?user=name</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Extra/>
        </div>
    );
};

export default MyProfile;