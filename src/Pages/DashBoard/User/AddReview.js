import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgkey = '496c910d299b68d853a1aac1a435c6f2'
    const onSubmit = async data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgkey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        
            .then(res => res.json())
            .then(result => {
                if (result.success) {

                    const img = result.data.url;
                    const reviewsubmit = {
                        name: data.name,
                        review: data.review,
                        rating: data.rating,
                        img: img
                    }
                    fetch('https://safe-inlet-78940.herokuapp.com/review-post', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(reviewsubmit)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted) {
                                toast.success('Review Successfuly Added')
                                reset();
                            }
                            else {
                                toast.error('Failed to add Review');
                            }
                        })

                }

            })
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
                                <form onSubmit={handleSubmit(onSubmit)} class="px-8 pb-8 mb-4 bg-white rounded">
                                    <div class="mb-4">
                                        <label class="mb-2 w-6/12 text-sm font-bold text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            {...register("name", {
                                                required: { value: true, message: 'Name is Required' }
                                            })}
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name='name'
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block mb-2 text-sm font-bold text-gray-700">
                                            Review
                                        </label>
                                        <textarea
                                            {...register("review", {
                                                required: { value: true, message: 'review is Required' }
                                            })}
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            placeholder="Your Review"
                                            rows="3"
                                            name='review'
                                            required
                                        ></textarea>
                                    </div>
                                    <div className='flex gap-5'>
                                        <div class="">
                                            <input
                                                class="block w-full text-sm text-slate-500
                                                file:mr-4 file:py-2 file:px-4
                                                file:rounded-full file:border-0
                                                file:text-sm file:font-semibold
                                                file:bg-violet-50 file:text-violet-700
                                                hover:file:bg-violet-100"
                                                type="file"
                                                placeholder="Your image"
                                                name='img'
                                                required
                                                {...register("img", {
                                                    required: { value: true, message: 'image is Required' }
                                                })}
                                            />
                                        </div>
                                        <div className=''>
                                            <div class=" flex items-center gap-3">
                                                <label class="mb-2 text-sm font-bold text-gray-700">
                                                    Ratings
                                                </label>
                                                <select className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline' name="ratings" required {...register("rating", {
                                                    required: { value: true, message: 'Rating is Required' }
                                                })}>
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
                                            class="w-full px-4 cursor-pointer py-2 font-bold text-white bg-primary rounded hover:bg-accent focus:outline-none focus:shadow-outline"
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