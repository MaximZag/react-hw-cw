import React from 'react';
import {Link, Outlet} from "react-router-dom";

import css from "./Layout.css";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <Link to={'/episode'}>
                    <button>Episodes</button>
                </Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;