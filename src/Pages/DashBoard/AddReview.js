import React from 'react';

const AddReview = () => {
    return (
        <div>
            <h1>This is Add Review</h1>
            <div>
                <div class="container mx-auto">
                    <div class=" px-6">

                        <div class="">


                            <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="text-2xl text-center">Write Your Review Here</h3>
                                <form class="px-8 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-4">
                                        <label class="mb-2 w-6/12 text-sm font-bold text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                            type="text"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Review
                                        </label>
                                        <textarea
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder="Your Review"
                                            rows="3"
                                        ></textarea>
                                    </div>
                                    <p className='text-xl font-bold my-5'>Use any one option for Image either first or Second</p>
                                    <div className='flex'>
                                        <div class="">
                                            <label class="mb-2 text-sm font-bold text-gray-700">
                                                image
                                            </label>
                                            <input
                                                class="px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                                type="file"
                                                placeholder="Your image"
                                            />
                                        </div>
                                        <div class="">
                                            <label class="mb-2 text-sm font-bold text-gray-700 mx-2">
                                                or | image Link
                                            </label>
                                            <input
                                                class="px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                                type="text"
                                                placeholder="Your image link"
                                            />
                                        </div>
                                    </div>

                                    <div class="mb-6 text-center">
                                        <button
                                            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Submit Review
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;