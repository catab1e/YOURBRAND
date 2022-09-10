import React from 'react';
import { Route , Routes } from 'routes';
import CardsPages from './pages/CardsPages';
import HomePage from './pages/HomePage';

const MainRoutes = () => {
    const ALL_ROUTES = [
        {
            link: "/",
            element: <HomePage/>,
            id: 1,
        },
        {
            link: "/cards",
            element: <CardsPages/>,
            id: 2,
        },
    ];
    return (
        <Routes>
        {ALL_ROUTES.map((item) => (
            <Route path = {item.link} element = {item.element} key = {item.id}/>
        ))}
        </Routes>
    );
};

export default MainRoutes;