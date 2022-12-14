import React from "react";
import HelpPage from "../pages/HelpPage";
import PricePage from "../pages/PricePage";
import "../styles/components.css";
import Accordion from "./SimpleAccordion";
import Cards from "./Cards";

const MainContent = () => {
  return (
    <div className="main__container">
      <div className="back__img">
        <div className="shadow">
          <div className="shadow__left">
            <h1>YOURBRAND</h1>
          </div>
          <div className="shadow__right">
            <p>
              YOURBBRAND.KG — Мы занимаемся изготовлением Одежды и подарков с
              Уникальным дизайном. В нашем магазине вы можете воплотить любую
              свою идею принта или вышивки на Худи, Свитшоте, Чехле для
              телефона, Кружке и Зажигалке.
            </p>
          </div>
        </div>
      </div>
      <Cards />
      <PricePage />
      <HelpPage/>
      <Accordion/>
    </div>
  );
};

export default MainContent;
