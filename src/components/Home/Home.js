import React from 'react';
import image from '../../images/milkman.jpg';
import './Home.css'
const Home = () => {
    return (
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
    );
};

export default Home;