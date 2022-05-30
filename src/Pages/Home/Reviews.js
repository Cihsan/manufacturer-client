import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Rating from 'react-rating';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review-get')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Reviews</h1>
            <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {/* 1 card */}
                    {
                        reviews.slice(-0).reverse().slice(0, 6).map(review =>
                            <div key={review._id} class="relative bg-white py-6 px-6 rounded-xl my-4 shadow-xl">
                                <div class="mt-8">
                                    <div className='flex items-center'>
                                        <img src={review.img}
                                            class="w-6 h-6 rounded-full " alt='' />
                                        <p class="text-xl font-semibold my-2 ml-2">{review.name}</p>
                                    </div>
                                    <div class="text-gray-400 text-md mb-3">
                                        <p>{review.review}</p>
                                    </div>
                                    <div class="border-t-2"></div>

                                    <div class="flex justify-between">
                                        <div class="my-2">
                                            <p class="font-semibold text-base mb-2">Rating</p>
                                        </div>
                                        <div class="my-2">
                                            <Rating initialRating={review.ratings} emptySymbol={<AiOutlineStar />} fullSymbol={<AiFillStar className='text-yellow-500' />} readonly
                                            ></Rating>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;