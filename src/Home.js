import React from 'react';
import Search from './Search';
import Movies from './Movies';

const Home = () => {
    return (
        <div>
            <div className='container'>
            <Search />
            <Movies />
            </div>
        </div>
    );
};

export default Home;