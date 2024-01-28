import React from 'react';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleMovies from './SingleMovies';
import './App.css';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='movie/:id' element={ <SingleMovies/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
