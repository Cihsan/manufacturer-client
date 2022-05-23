import React from 'react';
import { AiFillCaretRight, AiFillPlayCircle, AiOutlineRight } from 'react-icons/ai';
import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Blog Hilights</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center'>
                <div class="card rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='rounded-md' alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            How will you improve the performance of a React App
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">21-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='rounded-md' alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            What are the different ways to manage a state in a React app
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">22-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
                <div class="card rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" className='rounded-md' alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            What is a unit test? Why should write unit tests?
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">23-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-right my-10 text-3xl '>
                <Link className='text-primary' to='/blogs'>See More<BsArrowRightShort className='display: inline-block' /></Link></p>

        </div>
    );
};

export default Blog;