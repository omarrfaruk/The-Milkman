import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div className='header'>
            <CustomLink to='/'><h1>M I L K M A N</h1></CustomLink>
            <nav className='navbar'>
                <CustomLink to='/'>HOME</CustomLink>
                <CustomLink to='/reviews'>REVIEWS</CustomLink>
                <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink to='/blogs'>BLOGS</CustomLink>
                <CustomLink to='/about'>ABOUT</CustomLink>
            </nav>
        </div>
    );
};

export default Header;