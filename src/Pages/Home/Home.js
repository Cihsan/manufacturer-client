import React from 'react';
import Banner from '../Home/Banner';
import Blog from './Blog';
import Summary from './Summary';


const Home = () => {
    return (
        <div className='mx-auto px-12'>
        <Banner/>
        <Summary/>
        <Blog/>
        </div>
    );
};

export default Home;