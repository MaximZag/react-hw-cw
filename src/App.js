import {Routes, Route, Navigate} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {CharactersPage, EpisodesPage} from "./pages";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'episode'}/>}/>

                    <Route path={'episode'} element={<EpisodesPage/>}>
                        <Route path={'character'} element={<CharactersPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App;
