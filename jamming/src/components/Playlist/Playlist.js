import React, { useCallback } from 'react'
import "./Playlist.css"
import Tracklist from '../Tracklist/Tracklist'

const Playlist = (props) => {
    // console.log("These came from App", props)
    const handleNameChange = useCallback(
        event => {
            props.onNameChange(event.target.value)
        },
        [props.onNameChange]
    )

    return (
        <div className='Playlist'>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
        </div>
    )
}

export default Playlist