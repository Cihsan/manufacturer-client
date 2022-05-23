import React, { useEffect, useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div>
            {/* <div>
                <img src="" alt="" />
                <h3>Tools Name</h3>
                <p>Tools Description</p>
                <p>Price</p>
                <p>min order quantity</p>
                <p>available quantity</p>
                <button>Place Order</button>
            </div> */}
            {/* component  */}
            <section class="">
                <div class="container px-6 py-8 mx-auto">
                    <div>
                        <h2 class="text-5xl font-bold text-center">Our Available</h2>
                    </div>

                    <div class="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="px-6 py-4 rounded-lg bg-gray-100">
                            <div class="avatar">
                                <div class="rounded mx-auto">
                                    <img src="https://api.lorem.space/image/face?hash=88560" alt=''/>
                                </div>
                            </div>
                            <div class="mt-8 space-y-2">
                                <div class="flex items-center">
                                    <BsCheck2Circle />

                                    <span class="mx-4 ">All limited links</span>
                                </div>

                                <div class="flex items-center">
                                    <BsCheck2Circle />

                                    <span class="mx-4 ">Own analytics platform</span>
                                </div>

                                <div class="flex items-center">
                                    <BsCheck2Circle />

                                    <span class="mx-4 ">Chat support</span>
                                </div>

                                <div class="flex items-center">
                                    <BsCheck2Circle />

                                    <span class="mx-4 ">Optimize hashtags</span>
                                </div>

                                <div class="flex items-center">
                                    <BsCheck2Circle />

                                    <span class="mx-4 ">Unlimited users</span>
                                </div>
                            </div>

                            <button class="w-full px-4 py-2 mt-5 font-medium tracking-wide text-white capitalize bg-accent hover:bg-secondary rounded-md ">
                                Choose plan
                            </button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tools;