import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'/episode'}>
                    <button>Episodes</button>
                </Link>
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;