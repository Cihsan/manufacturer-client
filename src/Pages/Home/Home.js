import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Home/Banner';
import Blog from './Blog';
import Reviews from './Reviews';
import Summary from './Summary';
import Team from './Team';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='mx-auto px-12'>
            <Banner />
            <Tools />
            <Summary />
            <Reviews />
            <Blog />
            <Team/>
            <Footer />

        </div>
    );
};

export default Home;