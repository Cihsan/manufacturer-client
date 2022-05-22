import React from 'react';
import Banner from '../Home/Banner';
import Blog from './Blog';


const Home = () => {
    return (
        <div className='mx-auto px-12'>
        <Banner/>
        <Blog/>
        </div>
    );
};

export default Home;