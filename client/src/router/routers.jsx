import { BrowserRouter, Routes , Route } from 'react-router-dom';
import React from 'react';
import Dashboard from '../pages/dashboard';
import Homepage from '../pages/homepage';
import Nav from '../layouts/navBare'
import { RoomsDashBoard } from '../pages/admin/rooms';


const Routers = () => {
    return (
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/manageRooms' element={<RoomsDashBoard/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routers;
