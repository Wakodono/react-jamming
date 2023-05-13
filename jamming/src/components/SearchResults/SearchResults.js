import React from 'react'

import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ searchResults, playlistTracks, onAdd }) => {
    // console.log("SEARCH RESULTS ARRAY", searchResults)
    const playlistTrackURIs = playlistTracks.map(track => track.uri)

    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist searchResults={searchResults} trackURIs={playlistTrackURIs} onAdd={onAdd} />
        </div>
    )
}

export default SearchResults