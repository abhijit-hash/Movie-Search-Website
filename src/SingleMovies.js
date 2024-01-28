import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMovies = () => {
    const { id } = useParams();
    return (
        <div>
            <div>our single movie {id} </div>
        </div>
    );
};

export default SingleMovies;