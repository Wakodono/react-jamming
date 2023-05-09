import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ onAdd, isRemoval, onRemove, tracks }) => {
    return (
        <div className='Tracklist'>
            {tracks.map(track => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                        onAdd={onAdd}
                        isRemoval={isRemoval}
                        onRemove={onRemove}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist