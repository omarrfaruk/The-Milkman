import React from 'react';
import useReview from '../../Hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';

const Review = () => {
    const [review] = useReview();

    return (
        <div>
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