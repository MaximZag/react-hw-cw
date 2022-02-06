import React from 'react';
import Genres from "../../components/Genres/Genres";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export default Layout;