import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mx-auto'>
                <div class="md:flex items-center">
                    <div class="mb-12">
                        <p class="text-7xl text-green-300 font-dark font-extrabold mb-8"> 404</p>
                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                            Sorry we couldn't find the page you're looking for
                        </p>

                        <Link to='/' class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-accent active:bg-red-600 hover:bg-red-700">back to homepage</Link>
                    </div>
                    <div class="">
                        <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found" />
                    </div>

                </div>
            
        </div >
    );
};

export default NotFound;