import React from 'react';

const Photo = ({photo}) => {
    const {title, url} = photo

    return (
        <div>
            <div className={'photo'}>
                <div>{title}</div>
                <img src={url} alt={title}/>
            </div>
        </div>
    );
};

export default Photo;