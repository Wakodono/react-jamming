import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ onAdd, isRemoval, onRemove, searchResults, trackURIs, tracks }) => {

    if (!searchResults) {
        return []
    }

    const filteredTracks = searchResults.filter(track => !trackURIs.includes(track.uri))

    const isTrackInPlaylist = track => {
        return tracks.some(track => track.id === track.id)
    }


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
                        isTrackInPlaylist={isTrackInPlaylist(track)}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist