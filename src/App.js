import {Routes, Route} from "react-router-dom";

import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetails from "./pages/UserDetails/UserDetails";
import UserPosts from "./pages/UserPosts/UserPosts";
import PostDetails from "./pages/PostDetails/PostDetails";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
