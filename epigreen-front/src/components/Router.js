import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Sample from "./Sample";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Search from "./Search";
import Similarity from "./Similarity";

import Customer from "./Customer";
import Store from "./Store";
import Logs from "./Logs";
import DemoEcTransport from "./DemoEcTransport";
import Livraison from "./Livraison";


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
                    <Route path="/customer" element={<Customer />}/>
                    <Route path="/store" element={<Store />}/>
                    <Route path="/demoLivraison" element={<DemoLivraison />}/>
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/demoECTransport" element={<DemoEcTransport />} />
                    <Route path="/livraison" element={<Livraison />}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
};