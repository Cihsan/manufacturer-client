import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillTwitterCircle, AiOutlineDribbble } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
           <section class="bg-accent pb-20">
                        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
                                <div class="px-5 py-2">
                                    <Link to='/blogs' class="text-base leading-6 text-gray-100 hover:text-secondary">
                                        Blog
                                    </Link>
                                </div>
                                <div class="px-5 py-2">
                                    <Link to='/portfolio' class="text-base leading-6 text-gray-100 hover:text-secondary">
                                        Portfolio
                                    </Link>
                                </div>
                                <div class="px-5 py-2">
                                    <Link to='/' class="text-base leading-6 text-gray-100 hover:text-secondary">
                                        About
                                    </Link>
                                </div>
                                <div class="px-5 py-2">
                                    <Link to='/' class="text-base leading-6 text-gray-100 hover:text-secondary">
                                        Contact
                                    </Link>
                                </div>
                                <div class="px-5 py-2">
                                    <Link to='/' class="text-base leading-6 text-gray-100 hover:text-secondary">
                                        Terms
                                    </Link>
                                </div>
                            </nav>
                            <div class="flex justify-center mt-8 space-x-6">
                                <Link to='/' class="text-gray-300 hover:text-secondary">
                                    <span class="sr-only text-2xl">Facebook</span>
                                    <BsFacebook className='text-2xl'/>
                                </Link>
                                <Link to='/' class="text-gray-300 hover:text-secondary">
                                    <span class="sr-only">Instagram</span>
                                    <AiFillInstagram className='text-2xl'/>
                                </Link>
                                <Link to='/' class="text-gray-300 hover:text-secondary">
                                    <span class="sr-only">Twitter</span>
                                    <AiFillTwitterCircle className='text-2xl' />
                                </Link>
                                <Link to='/' class="text-gray-300 hover:text-secondary">
                                    <span class="sr-only">GitHub</span>
                                    <AiFillGithub className='text-2xl'/>
                                </Link>
                                <Link to='/' class="text-gray-300 hover:text-secondary">
                                    <span class="sr-only">Dribbble</span>
                                    <AiOutlineDribbble className='text-2xl'/>
                                </Link>
                            </div>
                            <p class="mt-8 text-base leading-6 text-center text-gray-400">
                                © 2023 Manufacturer, Inc. All rights reserved.
                            </p>
                        </div>
                    </section>
        </div>
    );
};

export default Footer;