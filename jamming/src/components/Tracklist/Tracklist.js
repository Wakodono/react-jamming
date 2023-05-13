import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ onAdd, isRemoval, onRemove, searchResults, trackURIs }) => {

    if (!searchResults) {
        return []
    }

    const filteredTracks = searchResults.filter(track => !trackURIs.includes(track.uri))

    return (
        <div className='Tracklist'>
            {filteredTracks.map(track => {
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