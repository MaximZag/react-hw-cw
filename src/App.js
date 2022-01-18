import {Routes, Route, Link} from "react-router-dom";

import css from './App.module.css';
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./pages/UserPosts/UserPosts";


function App() {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                    </Route>
                    {/*<Route path={'posts'} element={<PostsPage/>}/>*/}
                </Route>
            </Routes>
        </>
    )
        ;
}

export default App;
