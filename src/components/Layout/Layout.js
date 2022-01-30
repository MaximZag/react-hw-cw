import React from 'react';
import {Link, Outlet} from "react-router-dom";

import './Layout.css'

const Layout = () => {
    return (
        <>
            <div className={'header'}>
                <Link to={'/users'}>
                    <button>Users</button>
                </Link>
                <Link to={'/posts'}>
                    <button>Posts</button>
                </Link>
                <Link to={'/comments'}>
                    <button>Comments</button>
                </Link>
                <Link to={'/cars'}>
                    <button>Cars</button>
                </Link>
            </div>
            <div className={'outlet'}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;