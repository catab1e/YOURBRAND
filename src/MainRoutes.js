import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import CardsPages from "./pages/CardsPages";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PricePage from "./pages/PricePage";

const MainRoutes = () => {
  const ALL_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/cards",
      element: <CardsPages />,
      id: 2,
    },
    {
      link: "/price",
      element: <PricePage />,
      id: 3,
    },
    {
      link: "/*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/admin123",
      element: <AdminPage />,
      id: 5,
    },
  ];

  return (
    <Routes>
      {ALL_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
