import React, { useCallback } from 'react'
import "./Playlist.css"
import Tracklist from '../Tracklist/Tracklist'

const Playlist = ({ playlistTracks, onRemove, onNameChange, onSave }) => {
    // console.log("These came from App", props)
    const handleNameChange = useCallback(
        event => {
            onNameChange(event.target.value)
        },
        [onNameChange]
    )

    return (
        <div className='Playlist'>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist
                playlistTracks={playlistTracks}
                isRemoval={true}
                onRemove={onRemove}
            />
            <button className='Playlist-save' onClick={onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    )
}

export default Playlist