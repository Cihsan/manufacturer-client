import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const Reviews = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Reviews</h1>
            <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {/* 1 card */}
                    <div class="relative bg-white py-6 px-6 rounded-xl w-96 my-4 shadow-xl">
                        <div class="mt-8">
                            <div className='flex items-center'>
                                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    class="w-6 h-6 rounded-full " alt='' />
                                <p class="text-xl font-semibold my-2 ml-2">Name</p>
                            </div>
                            <div class="text-gray-400 text-md mb-3">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem culpa possimus non maiores! Nobis fuga sunt quis ipsa asperiores voluptas?</p>
                            </div>
                            <div class="border-t-2"></div>

                            <div class="flex justify-between">
                                <div class="my-2">
                                    <p class="font-semibold text-base mb-2">Rating</p>
                                </div>
                                <div class="my-2">
                                    <Rating initialRating={3.5} emptySymbol={<AiOutlineStar />} fullSymbol={<AiFillStar className='text-yellow-500' />} readonly
                                    ></Rating>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;