import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Home/Banner';
import Blog from './Blog';
import Reviews from './Reviews';
import Summary from './Summary';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='mx-auto px-12'>
            <Banner />
            <Summary />
            <Blog />
            <Reviews />
            <Tools />
            <Footer />

        </div>
    );
};

export default Home;