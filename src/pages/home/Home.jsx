import React from 'react';
import FeaturedProducts from '../../components/featuredProdutcs/FeaturedProducts';
import Slider from '../../components/slider/Slider';
import './home.scss'

const Home = () => {
    return (
        <div className='home'>
            <Slider/>
            <FeaturedProducts type="featured" />
            <FeaturedProducts type="trending" />
        </div>
    );
}

export default Home;
