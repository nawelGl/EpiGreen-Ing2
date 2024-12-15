import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Sample from "./Sample";
import DemoLivraison from "./DemoLivraison";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Customer from "./Customer";

export default function Router () {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/sample" element={<Sample />}/>
                    <Route path="/customer" element={<Customer />}/>
                    <Route path="/demoLivraison" element={<DemoLivraison />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};