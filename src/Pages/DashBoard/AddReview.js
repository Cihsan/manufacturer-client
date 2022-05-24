import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddReview = () => {
    const reviews = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const review = event.target.review.value
        const ratings = event.target.ratings.value
        const img = event.target.img.value
        const submit = { name, review, ratings, img }
        fetch('http://localhost:5000/review-post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submit)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Review Added Successfuly`)
                }
                else {
                    toast.error(`Already have and appointment`)
                }
            })
        event.target.reset()
    }
    return (
        <div>
            <div>
                <div class="container mx-auto">
                    <div class=" px-6">
                        <ToastContainer />
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
                                            required
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
                                            required
                                        ></textarea>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div class="">
                                            <label class="mb-2 text-sm font-bold text-gray-700">
                                                Image
                                            </label>
                                            <input
                                                class="px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                type="file"
                                                placeholder="Your image"
                                                name='img'
                                                required
                                            />
                                        </div>
                                        <div className=''>
                                            <div class=" flex items-center gap-3">
                                                <label class="mb-2 text-sm font-bold text-gray-700">
                                                    Ratings
                                                </label>
                                                <select className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' name="ratings" required>
                                                    <option value="3.5" selected>3.5</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="4.5">4.5</option>
                                                    <option value="5">5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mb-6 text-center">
                                        <input
                                            class="w-full px-4 cursor-pointer py-2 font-bold text-white bg-primary rounded hover:bg-secondary focus:outline-none focus:shadow-outline"
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