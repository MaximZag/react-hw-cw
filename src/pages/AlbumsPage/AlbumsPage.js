import React, {useEffect, useState} from 'react';
import {useParams, Outlet} from "react-router-dom";

import {albumService} from "../../services/album.service";
import './AlbumsPage.css'
import Album from "../../components/Album/Album";

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getById(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            <div className={'albums'}>
                {albums.map(album=><Album key={album.id} album={album}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};