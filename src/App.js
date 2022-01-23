import {Routes, Route, Navigate} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {EpisodesPage} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episode'}/>}/>

                    <Route path={'episode'} element={<EpisodesPage/>}>
                        {/*<Route path={':id'} element={<UserDetails/>}>*/}
                        {/*    <Route path={'posts'} element={<UserPosts/>}/>*/}
                        {/*</Route>*/}

                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
