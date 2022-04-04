import React from 'react';
import image from '../../images/milkman.jpg';
import useReview from '../../Hooks/useReview';
import './Home.css'
import SingleReview from '../SingleReview/SingleReview';
import { Link } from 'react-router-dom';
const Home = () => {
    const [review] = useReview();
    return (
        <>
            <div className='home-page'>
                <div className='description'>
                    <div>
                        <h1>A reader lives a thousand </h1>
                        <h1>lives before he dies</h1>
                        <p>Milkman is a historical psychological fiction novel written by the Irish author Anna Burns. Set during The Troubles in Northern Ireland, the story follows an 18-year-old girl who is harassed by an older married man known as the "milkman".</p>
                        <button>Read More</button>
                    </div>
                </div>
                <div className='homepage-img'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='review-home'>
                <h2>Customer Reviews (3)</h2>
                {
                    review.slice(0, 3).map(singleReview => <SingleReview
                        key={singleReview._id}
                        singleReview={singleReview}
                    ></SingleReview>)
                }
                <Link to='reviews'>REVIEWS</Link>
            </div>
        </>

    );
};

export default Home;