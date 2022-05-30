import React from 'react';

const Team = () => {
    return (
        <div>
            <h1 className='my-12 text-center text-5xl font-bold'>Our Team</h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <div class="card  bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-diamond" src="https://raw.githubusercontent.com/Cihsan/pic/main/05.jpg" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Jhon Victory</h2>
                        <p>App Developer</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-diamond" src="https://raw.githubusercontent.com/Cihsan/pic/main/03.jpg" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Hasim Mia</h2>
                        <p>Front-end Developer</p>
                    </div>
                </div>
                <div class="card bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img class="mask mask-diamond" src="https://raw.githubusercontent.com/Cihsan/pic/main/04.jpg" alt='' />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Mr Sejan</h2>
                        <p>Backend Spacialist</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;