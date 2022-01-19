import React, {useEffect, useState} from 'react';
import {Link, useParams, Outlet} from "react-router-dom";

import {albumService} from "../../services/album.service";
import './AlbumsPage.css'

const AlbumsPage = () => {
    const {id} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getById(id).then(value => setAlbums(value))
    }, [id])

    return (
        <div>
            <div className={'albums'}>
                {albums && albums.map(album =>
                    <div key={album.id}>
                        <Link to={`${album.id.toString()}/photos`}>{album.id}--{album.title}</Link>
                    </div>)}
            </div>
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};