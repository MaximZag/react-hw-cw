import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";

const AlbumsPage = () => {
    const {userId} = useParams()
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumService.getById(userId).then(value => setAlbums(value))
    }, [])

    return (
        <div>
            {albums.map(album=><Link)}
        </div>
    );
};

export default AlbumsPage;