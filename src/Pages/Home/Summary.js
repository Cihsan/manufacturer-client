import React from 'react';
import { AiOutlineBarChart } from 'react-icons/ai';
import { RiUserSettingsFill } from 'react-icons/ri';
import { CgUserlane } from 'react-icons/cg';
import { FaProductHunt } from 'react-icons/fa';
const Summary = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Business Summary</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body border-l-4">
                    <div className='flex items-center'>
                        <span className='text-5xl mr-3 text-primary'><AiOutlineBarChart/></span>
                        <div>
                            <h4 className='text-2xl font-bold'>Revenue</h4>
                            <p className='text-xl'>$ 900000+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body border-l-4">
                    <div className='flex items-center'>
                        <span className='text-5xl mr-3 text-primary'><RiUserSettingsFill/></span>
                        <div>
                            <h4 className="text-2xl font-bold">Total Customer</h4>
                            <p className='text-xl'>2000+</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body border-l-4">
                    <div className='flex items-center'>
                        <span className='text-5xl mr-3 text-primary'><CgUserlane/></span>
                        <div>
                            <h4 className="text-2xl font-bold">Customer Satisfaction</h4>
                            <p className='text-xl'>95%</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body border-l-4">
                    <div className='flex items-center'>
                        <span className='text-5xl mr-3 text-primary'><FaProductHunt/></span>
                        <div>
                            <h4 className="text-2xl font-bold">Total Product Lounch</h4>
                            <p className='text-xl'>120</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Summary;