import React from 'react';
import './SingleReview.css'

const SingleReview = ({ singleReview }) => {
    const { name, ratings, description, date, picture } = singleReview;
    return (
        <div className='review-details'>
            <div className='ratings'>
                <div className='img-name'>
                    <div>
                        <img className='img-size' src={picture} alt="" />
                    </div>
                    <div>
                        <h3 className='reviewer-name'>{name}</h3>
                        <p className='date'><small>{date}</small></p>
                    </div>
                </div>
                <p>Ratings: {ratings}</p>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default SingleReview;