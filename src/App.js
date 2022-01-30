import {Routes, Route} from 'react-router-dom'

import './App.css';
import Layout from "./components/Layout/Layout";
import CarsPage from "./pages/CarsPage/CarsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import PostsPage from "./pages/PostsPage/PostsPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
