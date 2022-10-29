import React from 'react';
import "../styles/pages.css";

const PricePage = () => {
    return (
        <div className='price--body'>
            <div className='price--body__inner'>
                <div className='price--body__inner--paragraphs'>
                    <p className='oglavlenie'>About prices</p>
                    <div className='prices--photos'>
                        <ul>
                            <li>Худи — 1800 сом</li>
                            <li>Свитшот — 1500 сом</li>
                            <li>Чехол для телефона — 800 сом</li>
                            <li>Кружка — 490 сом</li>
                            <li>Футболка — 800 сом</li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PricePage;