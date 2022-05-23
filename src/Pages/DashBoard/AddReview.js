import React from 'react';

const AddReview = () => {
    const reviews=(event)=>{
        event.preventDefault()
        const name = event.target.name.value
        const review = event.target.review.value
        const ratings = event.target.ratings.value
        const img = event.target.img.value
        const submit={name,review,ratings,img}
        // console.log(submit);
        fetch('http://localhost:5000/review-post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        event.target.reset()
    }
    return (
        <div>
            <div>
                <div class="container mx-auto">
                    <div class=" px-6">

                        <div class="">


                            <div class="w-full bg-white p-5 rounded-lg lg:rounded-l-none">
                                <h3 class="text-2xl text-center">Write Your Review Here</h3>
                                <form onSubmit={reviews} class="px-8 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-4">
                                        <label class="mb-2 w-6/12 text-sm font-bold text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name='name'
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
                                            name='review'
                                        ></textarea>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div class="">
                                            <label class="mb-2 text-sm font-bold text-gray-700">
                                                image
                                            </label>
                                            <input
                                                class="px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                type="file"
                                                placeholder="Your image"
                                                name='img'
                                            />
                                        </div>
                                        <div className='items-center'>
                                            <div class="">
                                                <label class="mb-2 text-sm font-bold text-gray-700">
                                                    Ratings
                                                </label>
                                                <select name="ratings">
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3.5">3.5</option>
                                                    <option value="4">4</option>
                                                    <option value="4.5">4.5</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-6 text-center">
                                        <input
                                            class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                            type="submit"
                                            value='Submit Review'
                                        />
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