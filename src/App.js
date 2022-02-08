import {Routes, Route, Navigate} from 'react-router-dom'

import './App.css';
import Layout from "./pages/Layout/Layout";
import MoviePage from "./pages/MoviePage/MoviePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movie'} element={<MoviePage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;