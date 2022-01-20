import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {photoService} from "../../services/photo.service";
import './PhotosPage.css'
import Photo from "../../components/Photo/Photo";

const PhotosPage = () => {
    const {albumId} = useParams()
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        photoService.getById(albumId).then(value => setPhotos(value))
    }, [albumId])

    return (
        <div className={'photomain'}>
            {photos.map(photo=><Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};