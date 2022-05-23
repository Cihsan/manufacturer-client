import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Blog Hilights</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                <div class="card w-96 rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            How will you improve the performance of a React Application
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">21-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            What are the different ways to manage a state in a React application?
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">22-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 rounded-none">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                    <div class="">
                        <h2 class="card-title hover:text-secondary text-2xl">
                            How does prototypical inheritance work
                        </h2>
                        <div class="card-actions">
                            <div class="text-gray-400">Chy</div>
                            <div class="text-gray-400">23-May-2022</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center my-10 text-3xl '><Link className='underline-offset-1 hover:text-primary' to='/blogs'>See More</Link></p>
        </div>
    );
};

export default Blog;