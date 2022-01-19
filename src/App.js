import {Routes, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {UsersPage, UserDetails, UserPosts, AlbumsPage, PhotosPage, PostsPage, PostDetails, CommentsPage} from "./pages";


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
