import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Banner from '../Home/Banner';
import Blog from './Blog';
import SomeTry from './SomeTry';
import Summary from './Summary';
import Tools from './Tools';


const Home = () => {
    return (
        <div className='mx-auto px-12'>
        <Banner/>
        <Summary/>
        <Blog/>
        <SomeTry/>
        <Tools/>
        <DashBoard/>
        </div>
    );
};

export default Home;