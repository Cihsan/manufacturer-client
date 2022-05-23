import React from 'react';
import { Link } from 'react-router-dom';

const AllBlog = () => {
    return (
        <div>
            <div>
                {/* component  */}
                <div class="overflow-x-hidden drop-shadow-md">
                    <div class="px-6 py-8">
                        <div class="container flex justify-between mx-auto">
                            <div class="w-full lg:w-8/12">
                                <div class="flex items-center justify-between">
                                    <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Blog Post</h1>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">How will you improve the performance of a React Application</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">What are the different ways to manage a state in a React application?</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">How does prototypical inheritance work</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">Why you do not set the state directly in React</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">What is a unit test? Why should write unit tests?</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* POst  */}
                                <div class="mt-6">
                                    <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-between"><span class="font-light text-gray-600">May 21,
                                            2022</span>
                                            <div>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 ">Tips</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500 mx-2">React</Link>
                                                <Link to="#" class="px-2 py-1 font-bold text-gray-100 bg-accent rounded hover:bg-gray-500">Javascript</Link>
                                            </div>
                                        </div>
                                        <div class="mt-2"><Link to="#" class="text-2xl font-bold text-gray-700 hover:underline">You have an array of products, How will you implement a search to find products by name?</Link>
                                            <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <Link to="#" class="text-blue-500 hover:underline">Read more</Link>
                                            <div>
                                                <Link to="#" class="flex items-center"><img
                                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                    alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                                                    <h1 class="font-bold text-gray-700 hover:underline">Chy Ihsan</h1>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="hidden w-4/12 -mx-8 lg:block">
                                <div class="px-8">
                                    <h1 class="mb-4 text-xl font-bold text-gray-700">Authors</h1>
                                    <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                                        <ul class="-mx-4">
                                            <li class="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar" class="object-cover w-10 h-10 mx-4 rounded-full" />
                                                <p><Link to="#" class="mx-1 font-bold text-gray-700 hover:underline">Chy Ihsan</Link><span
                                                    class="text-sm font-light text-gray-700">Created 6 Posts</span></p>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="px-8 mt-10">
                                    <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
                                    <div class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <ul>
                                            <li><Link to="#" class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Bootstrap</Link></li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                React</Link></li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">- Tailwind</Link>
                                            </li>
                                            <li class="mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Firebase</Link></li>
                                            <li class="flex items-center mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                Javascript</Link></li>
                                            <li class="flex items-center mt-2"><Link to="#"
                                                class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                                ES6</Link></li>

                                        </ul>
                                    </div>
                                </div>
                                <div class="px-8 mt-10">
                                    <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                                    <div class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                                        <div class="flex items-center justify-center"><Link to="#"
                                            class="px-2 py-1 text-sm text-green-100 bg-accent rounded hover:bg-gray-500">React</Link>
                                        </div>
                                        <div class="mt-4"><Link to="#" class="text-lg font-medium text-gray-700 hover:underline">How will you improve the performance of a React Application.</Link></div>
                                        <div class="flex items-center justify-between mt-4">
                                            <div class="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar" class="object-cover w-8 h-8 rounded-full" /><Link to="#"
                                                    class="mx-3 text-sm text-gray-700 hover:underline">Chy IHsan</Link></div><span
                                                        class="text-sm font-light text-gray-600">May 21, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;