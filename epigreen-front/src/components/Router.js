import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Sample from "./Sample";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Search from "./Search";
import Similarity from "./Similarity";

export default function Router () {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/sample" element={<Sample />}/>
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/search" element={<Search />}/>
                    <Route path="/similarity" element={<Similarity />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};