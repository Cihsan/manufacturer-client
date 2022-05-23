import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdAddShoppingCart, MdRateReview } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="dashboard" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* Page content here  */}
                    <Outlet />
                </div>
                <div class="drawer-side">
                    <label for="dashboard" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <div class="flex space-2 items-center border-b-2 pb-4">
                            <div>
                                {/* user Image */}
                                <img src="" alt="" />
                            </div>
                            <div class="ml-3">
                                <h1 class="text-3xl font-bold text-indigo-600">USER NAME</h1>
                                <p class="text-center text-sm text-indigo-600 mt-1 font-serif">User Role</p>
                            </div>
                        </div>
                        <div class="mt-8">
                            <ul class="space-y-2">
                                <li>
                                    <Link to="/dashboard" class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <MdAddShoppingCart className='text-2xl mr-3' />
                                        My Orders</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard/add-review" class="flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <MdRateReview className='text-2xl mr-3' />
                                        Add A Review</Link>
                                </li>

                                <li>
                                    <Link to="/dashboard/my-profile" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                        <AiOutlineSetting className='text-2xl mr-3' />
                                        My Profile</Link>
                                </li>
                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;