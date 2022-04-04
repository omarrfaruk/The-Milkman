import React, { useState } from 'react';
import image from '../../images/milkman.jpg';
import firstPage from '../../images/firstPage.jpg'
import useReview from '../../Hooks/useReview';
import './Home.css'
import SingleReview from '../SingleReview/SingleReview';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [review] = useReview();
    const navigate = useNavigate()
    const [over, setOver] = useState(false)
    return (
        <>
            <div className='home-page'>
                <div className='description'>
                    <div>
                        <h1>A reader lives a thousand </h1>
                        <h1>lives before he dies</h1>
                        <p>Milkman is a historical psychological fiction novel written by the Irish author Anna Burns. Set during The Troubles in Northern Ireland, the story follows an 18-year-old girl who is harassed by an older married man known as the "milkman".</p>
                        <button><a href="https://en.wikipedia.org/wiki/Milkman_(novel)" target="_blank" rel="noopener noreferrer">See More Details</a> </button>
                    </div>
                </div>
                <div className='homepage-img'
                    onMouseOver={() => setOver(true)}
                    onMouseOut={() => setOver(false)}
                >

                    <img src={over ? firstPage : image} alt="" />
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
                <div className='btn-div'>
                    <button className='review-btn' onClick={() => navigate('/reviews')}>SEE ALL REVIEWS</button>
                </div>
            </div>
        </>

    );
};

export default Home;