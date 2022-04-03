import React from 'react';
import './SingleReview.css'

const SingleReview = ({ singleReview }) => {
    const { name, ratings, description, date } = singleReview;
    return (
        <div className='review-details'>
            <div className='ratings'>
                <div>
                    <h3 className='reviewer-name'>{name}</h3>
                    <p className='date'><small>{date}</small></p>
                </div>
                <p>Ratings: {ratings}</p>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default SingleReview;