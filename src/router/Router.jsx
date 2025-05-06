import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Basket from "../pages/basket/Basket.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Not from "../pages/not/Not.jsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/basket" element={<Basket/>} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<Not/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
