import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import './PhotosPage.css'

const PhotosPage = () => {
    const {albumId} = useParams()
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getById(albumId).then(value => setPhotos(value))
    }, [albumId])

    return (
        <div className={'photomain'}>
            {photos.map(photo => <div key={photo.id} className={'photo'}>
                <div>{photo.title}</div>
                <img src={photo.url} alt={photo.title}/>
            </div>)}
        </div>
    );
};

export {PhotosPage};