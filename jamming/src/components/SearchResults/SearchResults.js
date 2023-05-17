import React from 'react'

import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ searchResults, playlistTracks, onAdd }) => {
    // console.log("SEARCH RESULTS ARRAY", searchResults)

    if (!searchResults) {
        return null
    }

    const playlistTrackURIs = playlistTracks.map(track => track.uri)

    const filteredTracks = searchResults.filter(track => !playlistTrackURIs.includes(track.uri))

    if (filteredTracks.length === 0) {
        return (
            <div className='SearchResults'>
                <h2>No results found</h2>
            </div>
        )
    }

    return (
        <div className='SearchResults'>
            <h2>Results</h2>
            <Tracklist filteredTracks={filteredTracks} onAdd={onAdd} />
        </div>
    )
}

export default SearchResults