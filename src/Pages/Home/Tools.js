import { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const Tools = () => {
    const [tools, setTools] = useState([])    
    useEffect(() => {
        fetch('https://safe-inlet-78940.herokuapp.com/product-get')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [tools])
    return (
        <div>
           
            <section class="">
                <div class="container px-6 py-8 mx-auto">
                    <div>
                        <h2 class="text-5xl font-bold text-center">Our Available</h2>
                    </div>

                    <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {
                            tools.slice(0,8).map(tool=>
                                <div class="px-6 py-4 rounded-lg bg-gray-100">
                            <div class="avatar">
                                <div class="rounded mx-auto">
                                    <img src={tool.img} alt=''/>
                                </div>
                            </div>
                            <div class="mt-8 space-y-2">
                                <div class="flex items-center">
                                    

                                    <span class="mx-4 font-bold">{tool.name}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span title='Description' class="mx-4 "><span className='font-semibold'>Desc.</span> {tool.desc}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 "><span className='font-semibold'>Stock:</span> {tool.stock}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 "><span className='font-semibold'>Min. Order:</span> {tool.mOrder}</span>
                                </div>

                                <div class="flex items-center">
                                    

                                    <span class="mx-4 "><span className='font-semibold'>$</span> {tool.price}</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-5 font-medium tracking-wide text-white capitalize bg-accent hover:bg-secondary rounded-md ">
                                Choose plan
                            </button>
                        </div>
                                )
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tools;