import React from 'react';
import "../styles/components.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__inner'>
                <div className='inner-left'>
                    <a className='astyle' href="/">Default</a>
                    <a className='astyle' href="/">Default</a>
                    <a className='astyle' href="/">Default</a>
                    <a className='astyle' href="/">Default</a>
                </div>
                <div className='inner-right'>
                <a className='astyle' href="/">Default</a>
                <a className='astyle' href="/">Default</a>
                <a className='astyle' href="/">Default</a>
                <a className='astyle' href="/">Default</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;