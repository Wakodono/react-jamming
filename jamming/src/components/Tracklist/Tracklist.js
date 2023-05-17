import React from 'react';
import Track from '../Track/Track';

const Tracklist = ({ onAdd, isRemoval, onRemove, searchResults, trackURIs, playlistTracks }) => {

    if (!searchResults || !playlistTracks) {
        return []
    }

    const filteredTracks = searchResults.filter(track => !trackURIs.includes(track.uri))

    const isTrackInPlaylist = track => {
        return playlistTracks.some(playlistTrack => playlistTrack.id === track.id)
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