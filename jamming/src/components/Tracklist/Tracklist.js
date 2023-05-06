import React from 'react';
import Track from '../Track/Track';

const Tracklist = (props) => {
    return (
        <div className='Tracklist'>
            {props.tracks.map(track => {
                return (
                    <Track
                        track={track}
                        key={track.id}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist