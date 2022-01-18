import React from 'react';

import css from "./Layout.module.css";
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;