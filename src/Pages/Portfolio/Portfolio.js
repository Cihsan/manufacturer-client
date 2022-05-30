import React from 'react';
import { BsCheck2Circle, BsPersonCircle } from 'react-icons/bs';
import img1 from '../../assets/images/01.png';
import img2 from '../../assets/images/02.png';
import img3 from '../../assets/images/03.png';
import img4 from '../../assets/images/04.png';
import img5 from '../../assets/images/05.png';
import img6 from '../../assets/images/06.png';

const Portfolio = () => {
    return (
        <div className='mx-5 mt-5'>
            <div class="card w-96 border border-accent">
                <div class="card-body">
                    <ul class="p-6 divide-y divide-slate-200">
                        {/* Remove top/bottom padding when first/last child */}
                        <li class="flex py-4 first:pt-0 last:pb-0">
                            <BsPersonCircle className='text-5xl' />
                            <div class="ml-3 overflow-hidden">
                                <p class="text-sm font-medium ">Chy Ihsan</p>
                                <p class="text-sm text-gray-400 truncate">chyihsan@gmail.com</p>
                                <p class="text-sm text-gray-400 truncate">Takmil Fil Hadis</p>
                            </div>
                        </li>
                    </ul>
                    <ul className=''>
                        <li><h1 className='text-2xl'>Skills</h1></li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/> HTML5</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>CSS3</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>Bootstrap</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>Tailwind</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>Javascript</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>ES6</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>React</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>Firebase</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>NodeJS</li>
                        <li className='flex items-center gap-2'><BsCheck2Circle/>MongoDB</li>
                    </ul>
                    <ul className=''>
                        <li className='font-semibold'>My Completed Projects link Below</li>
                        <li><a className='btn btn-link text-green-500' rel="noreferrer noopener" target="_blank" href='https://electrical-solution-e0837.web.app/'>Electrical Solution</a></li>
                        <li><a className='btn btn-link text-green-500' rel="noreferrer noopener" target="_blank" href='https://techreview.netlify.app/'>Tech Review</a></li>

                    </ul>
                </div>
            </div>

            <h1 className='text-center text-3xl font-bold'>My Completed Project View</h1>
            <div className='my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img5} alt="" />
                    </div>
                </div>
                <div class="card border-4 border-primary text-white">
                    <div class="card-body">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Portfolio;