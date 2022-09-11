import React from 'react';
import "../styles/cards.css"
import hudi from "../assets/img/hudi.png"
import tobirama from "../assets/img/tobirama.png"
import saske from "../assets/img/saske.png"
import print from "../assets/img/print.png"
import pers from "../assets/img/pers.png"
import kepka from "../assets/img/kepka.png"
import nike from "../assets/img/nike.png"
import maske from "../assets/img/maske.png"
import SearchFilterBar from './SearchFilterBar';



const Cards = (item) => {
    return (
            <div className='cards'>
                <SearchFilterBar/>
                <div className='cards__inner'>
                    <div className='card'>
                        <img className='card__img' src={hudi} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={tobirama} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={saske} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={print} alt="" />
                        <p>ПРИНТЫ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={pers} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={kepka} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={nike} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>

                    <div className='card'>
                        <img className='card__img' src={maske} alt="" />
                        <p>ВЫШИВКИ</p>
                        <div className='price'>
                            <p>Цена от: <span> 1200сом</span></p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Cards;