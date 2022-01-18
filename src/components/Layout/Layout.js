import React from 'react';

import css from "./Layout.module.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <Link to={'/users'}><button>Users</button></Link>
                <Link to={'/posts'}><button>Posts</button></Link>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;