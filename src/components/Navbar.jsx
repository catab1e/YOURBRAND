import React from 'react';
import logo from "../assets/img/logo.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='inner__navbar'>
                <div className="inner__left">
                    <img src={logo} alt="" />
                    <span>YOUR_BRAND</span>
                </div>
                <div className='inner__right'>
                    <Link className='txtstyle' to="/cards">PRODUCTS</Link>
                    <Link className='txtstyle' to="/">PRICE</Link>
                    <Link className='txtstyle' to="/">SIZES</Link>
                    <Link className='txtstyle' to="/">CONTACTS</Link>
                    <Link className='txtstyle' to="/">ABOUT US</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;