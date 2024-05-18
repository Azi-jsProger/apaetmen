import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import DetailPage from "../pages/detailPage/detailPage";

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainPage />}  />
                <Route path={'/:id'} element={<DetailPage />} />
            </Routes>
        </div>
    );
};

export default MainRoutes;