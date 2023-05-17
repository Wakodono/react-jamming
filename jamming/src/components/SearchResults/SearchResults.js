import React from 'react'

import './SearchResults.css'
import Tracklist from '../Tracklist/Tracklist'

const SearchResults = ({ searchResults, playlistTracks, onAdd }) => {
    // console.log("SEARCH RESULTS ARRAY", searchResults)
    const playlistTrackURIs = playlistTracks.map(track => track.uri)

    let filteredTracks = []

    let content;

    if (!searchResults) {
        content = <h2>Loading...</h2>
    } else {

        if (playlistTracks.length === 0) {
            content = <Tracklist tracks={searchResults} onAdd={onAdd} />
        } else {
            filteredTracks = searchResults.filter(track => !playlistTrackURIs.includes(track.uri))
        }

        if (filteredTracks.length === 0) {
            content = <h2>No results found</h2>
        } else {
            content = <Tracklist filteredTracks={filteredTracks} onAdd={onAdd} />
        }
    }

    return <div className='SearchResults'>{content}</div>
}

export default SearchResults