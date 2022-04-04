import React from 'react';
import useReview from '../../Hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [review] = useReview();

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>WHAT THE READER SAYS .....</h1>
            {
                review.map(singleReview => <SingleReview
                    key={singleReview._id}
                    singleReview={singleReview}
                ></SingleReview>)
            }
        </div>
    );
};

export default Review;