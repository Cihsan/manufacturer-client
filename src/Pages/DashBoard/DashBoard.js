import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineSetting } from 'react-icons/ai';
import { IoMdPersonAdd } from 'react-icons/io';
import { MdAddShoppingCart, MdManageAccounts, MdOutlinePlaylistAdd, MdRateReview } from 'react-icons/md';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className=''>
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
                                <h1 class="text-3xl font-bold text-indigo-600">{user.displayName}</h1>
                                <p class="text-center text-sm text-indigo-600 mt-1 font-serif">{user.email}</p>
                            </div>
                        </div>
                        <div class="mt-2">

                            <ul class="space-y-2">
                                {
                                    admin ?
                                        <>
                                            <li>
                                                <Link to="/dashboard/my-profile" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                                    <AiOutlineSetting className='text-2xl mr-3' />
                                                    My Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/manage-products" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                                    <MdManageAccounts className='text-2xl mr-3' />
                                                    Manage Products</Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/add-product" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                                    <MdOutlinePlaylistAdd className='text-2xl mr-3' />
                                                    Add Product</Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/make-admin" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                                    <IoMdPersonAdd className='text-2xl mr-3' />
                                                    Make Admin</Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard/manage-all-orders" class="flex items-centerx text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
                                                    <RiSecurePaymentFill className='text-2xl mr-3' />
                                                    Manage All Orders</Link>
                                            </li>
                                        </>
                                        :
                                        <>
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
                                        </>


                                }



                            </ul>
                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;