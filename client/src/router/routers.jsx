import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/dashboard';
import Homepage from '../pages/homepage';
import Nav from '../layouts/navBare'
import { RoomsDashBoard } from '../pages/admin/rooms';


const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path='/dash' element={<Homepage/>} />
                <Route path='/nav' element={<Nav/>} />
                <Route path='/roomsDashboard' element={<RoomsDashBoard/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
