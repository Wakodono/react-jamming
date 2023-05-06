import React from 'react'

import Tracklist from '../Tracklist/Tracklist'

const Playlist = (props) => {
    // console.log("These came from App", props)

    return (
        <div className='Playlist'>
            <Tracklist
                tracks={props.playlistTracks}
            />
        </div>
    )
}

export default Playlist