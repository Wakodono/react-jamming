import React from 'react'
import "./Playlist.css"
import Tracklist from '../Tracklist/Tracklist'

const Playlist = (props) => {
    // console.log("These came from App", props)

    return (
        <div className='Playlist'>
            <Tracklist
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
        </div>
    )
}

export default Playlist